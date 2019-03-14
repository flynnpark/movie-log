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
        isMe
      }
    }
    GetUserInfo(userId: $userId) {
      ok
      error
      countInfo {
        watchedMovieCount
        movieRatingCount
      }
    }
  }
`;

export const GET_RATED_MOVIES = gql`
  query getRatedMovies($userId: Int!, $offset: Int!) {
    GetRatedMovies(userId: $userId, offset: $offset) {
      ok
      error
      ratedMovies {
        movieId
      }
    }
  }
`;
