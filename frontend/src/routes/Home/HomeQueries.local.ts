import { gql } from 'apollo-boost';

export const GET_HOME_DATA = gql`
  query getHomeData {
    GetNowPlaying @client {
      id
      title
      poster_path
      genre_ids
      overview
      release_date
    }
    GetTopRated @client {
      id
      title
      poster_path
      genre_ids
      overview
      release_date
    }
    GetPopular @client {
      id
      title
      poster_path
      genre_ids
      overview
      release_date
    }
  }
`;
