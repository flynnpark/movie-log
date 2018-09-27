import { gql } from 'apollo-boost';

export const GET_PROFILE_DATA = gql`
  query getProfileData($userId: Int!) {
    GetUserProfile(userId: $userId) {
      ok
      error
      user {
        id
        email
        name
        avatar
        shortBio
        createdAt
      }
    }
  }
`;
