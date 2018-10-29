import { gql } from 'apollo-boost';

export const GET_MOVIE_DETAIL = gql`
  query getMovieDetail($movieId: Int!) {
    GetMovieDetail(movieId: $movieId) {
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

export const SET_MOVIE_RATING = gql`
  mutation setMovieRating($movieId: Int!, $rating: Float!) {
    SetMovieRating(movieId: $movieId, rating: $rating) {
      ok
      type
      error
      movieRating {
        id
        userId
        movieId
        rating
      }
    }
  }
`;
