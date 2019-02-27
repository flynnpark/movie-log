import { gql } from 'apollo-boost';

export const GET_MOVIE_DETAIL = gql`
  query getMovieDetail($movieId: Int!) {
    GetMovieDetail(movieId: $movieId) @client {
      ok
      error
      movie {
        id
        title
        tagline
        poster_path
        original_language
        original_title
        genres {
          name
        }
        adult
        overview
        release_date
      }
    }
  }
`;

export const GET_MOVIE_RECOMMENDATIONS = gql`
  query getMovieRecommendations($movieId: Int!) {
    GetMovieRecommendations(movieId: $movieId) @client {
      id
      title
      poster_path
      overview
      release_date
    }
  }
`;
