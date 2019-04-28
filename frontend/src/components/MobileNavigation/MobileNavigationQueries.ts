import { gql } from 'apollo-boost';

export const GET_NAVIGATION_DATA = gql`
  query getMyInfo {
    GetUserProfile {
      ok
      error
      user {
        id
        avatar
      }
    }
  }
`;
