import { gql } from 'apollo-boost';

export const EMAIL_SIGN_UP = gql`
  mutation startEmailSignUp(
    $email: String!
    $password: String!
    $name: String!
    $birthday: String!
    $profileImage: String
  ) {
    EmailSignUp(
      email: $email
      password: $password
      name: $name
      birthday: $birthday
      profileImage: $profileImage
    ) {
      ok
      error
      token
    }
  }
`;
