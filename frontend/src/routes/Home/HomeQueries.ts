import { gql } from 'apollo-boost';

export const GET_NOW_PLAYING = gql`
  query getNowPlaying {
    GetNowPlaying {
      id
      title
      poster_path
      genre_ids
      overview
      release_date
    }
  }
`;

export const GET_TOP_RATED = gql`
  query getTopRated {
    GetTopRated {
      id
      title
      poster_path
      genre_ids
      overview
      release_date
    }
  }
`;

export const GET_POPULAR = gql`
  query getPopular {
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
