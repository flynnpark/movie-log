import { gql } from 'apollo-boost';

export const EMAIL_SIGN_UP = gql`
  mutation startEmailSignUp(
    $email: String!
    $password: String!
    $name: String!
    $birthYear: Int!
    $profileImage: String
  ) {
    EmailSignUp(
      email: $email
      password: $password
      name: $name
      birthYear: $birthYear
      profileImage: $profileImage
    ) {
      ok
      error
      token
    }
  }
`;
