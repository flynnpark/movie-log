import ApolloClient, { Operation, InMemoryCache } from 'apollo-boost';
import {
  getMovieDetail,
  getNowPlaying,
  getPopular,
  getTopRated,
  findMovie,
  getMovieRecommendations,
  getMovieSimilar
} from './utils/tmdb';
import {
  getMovieDetailVariables,
  findMovieVariables,
  userLogInVariables,
  getMovieListVariables,
  getMovieRecommendationsVariables,
  getMovieSimilarVariables,
  facebookLogInVariables
} from './types/local';

const cache = new InMemoryCache();

const client = new ApolloClient({
  cache,
  clientState: {
    defaults: {
      auth: {
        __typename: 'Auth',
        isLoggedIn:
          Boolean(localStorage.getItem('jwt')) ||
          Boolean(localStorage.getItem('facebookToken'))
      }
    },
    resolvers: {
      Mutation: {
        userLogIn: (
          _: null | undefined,
          { token }: userLogInVariables,
          { cache: appCache }
        ): null => {
          localStorage.setItem('jwt', token);
          appCache.writeData({
            data: {
              auth: {
                __typename: 'Auth',
                isLoggedIn: true
              }
            }
          });
          return null;
        },
        userLogOut: (
          _: null | undefined,
          __: null | undefined,
          { cache: appCache }
        ): null => {
          localStorage.removeItem('jwt');
          localStorage.removeItem('userId');
          appCache.writeData({
            data: {
              auth: {
                __typename: 'Auth',
                isLoggedIn: false
              }
            }
          });
          return null;
        },
        facebookLogIn: (
          _: null | undefined,
          { facebookToken }: facebookLogInVariables,
          { cache: appCache }
        ): null => {
          localStorage.setItem('facebookToken', facebookToken);
          appCache.writeData({
            data: {
              auth: {
                __typename: 'Auth',
                isLoggedIn: true
              }
            }
          });
          return null;
        }
      },
      Query: {
        GetNowPlaying: async (_: null | undefined) => {
          const movieList = await getNowPlaying();
          const newMovieList = new Array();
          movieList.map(movieItem => {
            newMovieList.push({
              __typename: 'MovieItem',
              ...movieItem
            });
          });
          return newMovieList;
        },
        GetPopular: async (_: null | undefined) => {
          const movieList = await getPopular();
          const newMovieList = new Array();
          movieList.map(movieItem => {
            newMovieList.push({
              __typename: 'MovieItem',
              ...movieItem
            });
          });
          return newMovieList;
        },
        GetTopRated: async (_: null | undefined) => {
          const movieList = await getTopRated();
          const newMovieList = new Array();
          movieList.map(movieItem => {
            newMovieList.push({
              __typename: 'MovieItem',
              ...movieItem
            });
          });
          return newMovieList;
        },
        FindMovie: async (
          _: null | undefined,
          { query }: findMovieVariables
        ) => {
          if (query) {
            const movieList = await findMovie(query);
            const newMovieList = new Array();
            movieList.map(movieItem => {
              newMovieList.push({
                __typename: 'MovieItem',
                ...movieItem
              });
            });
            return newMovieList;
          }
          return null;
        },
        GetMovieDetail: async (
          _: null | undefined,
          { movieId }: getMovieDetailVariables
        ) => {
          const movieDetail = await getMovieDetail(movieId);
          if (movieDetail) {
            return {
              __typename: 'GetMovieDetailResponse',
              ok: true,
              error: null,
              movie: {
                ...movieDetail,
                __typename: 'MovieInfo',
                genres: movieDetail.genres.map(genre => {
                  return {
                    ...genre,
                    __typename: 'Genre'
                  };
                })
              }
            };
          }
          return {
            __typename: 'GetMovieDetailResponse',
            ok: false,
            error: 'Movie not found',
            movie: null
          };
        },
        GetMovieRecommendations: async (
          _: null | undefined,
          { movieId }: getMovieRecommendationsVariables
        ) => {
          const movieList = await getMovieRecommendations(movieId);
          const newMovieList = new Array();
          movieList.map(movieItem => {
            newMovieList.push({
              __typename: 'MovieItem',
              ...movieItem
            });
          });
          return newMovieList;
        },
        GetMovieSimilar: async (
          _: null | undefined,
          { movieId }: getMovieSimilarVariables
        ) => {
          const movieList = await getMovieSimilar(movieId);
          const newMovieList = new Array();
          movieList.map(movieItem => {
            newMovieList.push({
              __typename: 'MovieItem',
              ...movieItem
            });
          });
          return newMovieList;
        },
        GetMovieList: async (
          _: null | undefined,
          { movieIdList }: getMovieListVariables
        ) => {
          if (movieIdList && movieIdList.length > 0) {
            const movieList = new Array();
            for (const movieId of movieIdList) {
              const movieInfo = await getMovieDetail(movieId);
              movieList.push(movieInfo);
            }
            return {
              __typename: 'GetMovieListResponse',
              ok: true,
              error: null,
              movieList
            };
          }
          return {
            __typename: 'GetMovieListResponse',
            ok: false,
            error: 'Movie ID List is null',
            movieList: null
          };
        }
      }
    }
  },
  request: async (operation: Operation) => {
    operation.setContext({
      headers: {
        Authorization: `JWT ${localStorage.getItem('jwt')}` || '',
        access_token: `${localStorage.getItem('facebookToken')}` || ''
      }
    });
  },
  onError: ({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.map(({ message }) => {
        console.log(`Unexpected error: ${message}`);
        if (message === 'Unauthorized') {
          localStorage.removeItem('jwt');
          cache.writeData({
            data: {
              auth: {
                __typename: 'Auth',
                isLoggedIn: false
              }
            }
          });
        }
      });
    }
    if (graphQLErrors) {
      console.log(`graphQLErrors: ${graphQLErrors}`);
    }
    if (networkError) {
      console.log(`Unexpected error: ${networkError}`);
    }
  },
  uri: 'http://localhost:4000/graphql'
});

export default client;
