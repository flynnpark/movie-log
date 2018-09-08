import { gql } from 'apollo-boost';

export const EMAIL_SIGN_UP = gql`
  mutation startEmailSignUp(
    $email: String!
    $password: String!
    $name: String!
    $avatar: String
    $shortBio: String
  ) {
    EmailSignUp(
      email: $email
      password: $password
      name: $name
      avatar: $avatar
      shortBio: $shortBio
    ) {
      ok
      error
      token
    }
  }
`;
