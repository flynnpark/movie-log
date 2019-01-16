import { gql } from 'apollo-boost';

export const GET_MOVIE_LIST = gql`
  query getMovieList($movieIdList: [Int]!) {
    GetMovieList(movieIdList: $movieIdList) @client {
      ok
      error
      movieList {
        id
        title
        poster_path
        adult
        release_date
      }
    }
  }
`;
