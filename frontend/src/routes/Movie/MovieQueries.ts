import { gql } from 'apollo-boost';

export const GET_MOVIE_RATINGS = gql`
  query getMovieRatings($movieId: Int!) {
    GetMovieRatings(movieId: $movieId) {
      ok
      error
      movieRatings {
        id
        userId
        movieId
        rating
        watchDate
        createdAt
      }
    }
  }
`;

export const SET_MOVIE_RATING = gql`
  mutation setMovieRating(
    $movieId: Int!
    $rating: Float!
    $watchDate: String!
  ) {
    SetMovieRating(movieId: $movieId, rating: $rating, watchDate: $watchDate) {
      ok
      error
      movieRating {
        id
        userId
        movieId
        rating
        watchDate
        createdAt
      }
    }
  }
`;

export const REMOVE_MOVIE_RATING = gql`
  mutation removeMovieRating($id: Int!) {
    RemoveMovieRating(id: $id) {
      ok
      error
      movieRating {
        id
        userId
        movieId
        rating
        watchDate
        createdAt
      }
    }
  }
`;
