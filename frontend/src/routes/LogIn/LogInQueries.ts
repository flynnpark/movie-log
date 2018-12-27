import { gql } from 'apollo-boost';

export const EMAIL_LOG_IN = gql`
  mutation startEmailVerification($email: String!, $password: String!) {
    EmailSignIn(email: $email, password: $password) {
      ok
      error
      token
      user {
        id
      }
    }
  }
`;
