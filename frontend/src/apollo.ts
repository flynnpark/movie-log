import ApolloClient, { Operation, InMemoryCache } from 'apollo-boost';
import {
  getMovieDetail,
  getNowPlaying,
  getPopular,
  getTopRated
} from './utils/tmdb';
import { getMovieDetailVariables } from './types/local';

const cache = new InMemoryCache();

const client = new ApolloClient({
  cache,
  clientState: {
    defaults: {
      auth: {
        __typename: 'Auth',
        isLoggedIn: Boolean(localStorage.getItem('jwt'))
      }
    },
    resolvers: {
      Mutation: {
        userLogIn: (_, { token }, { cache: appCache }) => {
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
        userLogOut: (_, __, { appCache }) => {
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
        }
      }
    }
  },
  request: async (operation: Operation) => {
    operation.setContext({
      headers: {
        'X-JWT': localStorage.getItem('jwt') || ''
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
