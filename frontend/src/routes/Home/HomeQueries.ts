import { gql } from 'apollo-boost';

export const GET_HOME_DATA = gql`
  query getHomeData {
    GetNowPlaying {
      id
      title
      poster_path
      genre_ids
      overview
      release_date
    }
    GetTopRated {
      id
      title
      poster_path
      genre_ids
      overview
      release_date
    }
    GetPopular {
      id
      title
      poster_path
      genre_ids
      overview
      release_date
    }
  }
`;
