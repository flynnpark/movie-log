import { gql } from 'apollo-boost';

export const GET_MOVIE_DETAIL = gql`
  query getMovieDetail($movieId: Int!) {
    GetMovieDetail(movieId: $movieId) {
      ok
      error
      movie {
        id
        title
        poster_path
        original_language
        original_title
        adult
        overview
        release_date
      }
    }
  }
`;
