import { gql } from 'apollo-boost';

export const USER_LOG_IN = gql`
  mutation userLogIn($token: String!, $userId: Int!) {
    userLogIn(token: $token, userId: $userId) @client
  }
`;

export const USER_LOG_OUT = gql`
  mutation userLogOut {
    userLogOut @client
  }
`;

export const FACEBOOK_LOG_IN = gql`
  mutation facebookLogIn($facebookToken: String!) {
    facebookLogIn(facebookToken: $facebookToken) @client
  }
`;
