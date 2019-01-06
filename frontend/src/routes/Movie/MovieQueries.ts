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
