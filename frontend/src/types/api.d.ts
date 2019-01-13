/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getMyInfo
// ====================================================

export interface getMyInfo_GetUserProfile_user {
  __typename: "UserExpose";
  id: number;
  avatar: string | null;
}

export interface getMyInfo_GetUserProfile {
  __typename: "GetUserProfileResponse";
  ok: boolean;
  error: string | null;
  user: getMyInfo_GetUserProfile_user | null;
}

export interface getMyInfo {
  GetUserProfile: getMyInfo_GetUserProfile;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: startEmailVerification
// ====================================================

export interface startEmailVerification_EmailSignIn {
  __typename: "EmailSignInResponse";
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface startEmailVerification {
  EmailSignIn: startEmailVerification_EmailSignIn;
}

export interface startEmailVerificationVariables {
  email: string;
  password: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getMovieRatings
// ====================================================

export interface getMovieRatings_GetMovieRatings_movieRatings {
  __typename: "MovieRating";
  id: number;
  userId: number;
  movieId: number;
  rating: number;
  watchDate: string;
  createdAt: string;
}

export interface getMovieRatings_GetMovieRatings {
  __typename: "GetMovieRatingsResponse";
  ok: boolean;
  error: string | null;
  movieRatings: (getMovieRatings_GetMovieRatings_movieRatings | null)[] | null;
}

export interface getMovieRatings {
  GetMovieRatings: getMovieRatings_GetMovieRatings;
}

export interface getMovieRatingsVariables {
  movieId: number;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: setMovieRating
// ====================================================

export interface setMovieRating_SetMovieRating_movieRating {
  __typename: "MovieRating";
  id: number;
  userId: number;
  movieId: number;
  rating: number;
  watchDate: string;
  createdAt: string;
}

export interface setMovieRating_SetMovieRating {
  __typename: "SetMovieRatingResponse";
  ok: boolean;
  error: string | null;
  movieRating: setMovieRating_SetMovieRating_movieRating | null;
}

export interface setMovieRating {
  SetMovieRating: setMovieRating_SetMovieRating;
}

export interface setMovieRatingVariables {
  movieId: number;
  rating: number;
  watchDate: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: removeMovieRating
// ====================================================

export interface removeMovieRating_RemoveMovieRating_movieRating {
  __typename: "MovieRating";
  id: number;
  userId: number;
  movieId: number;
  rating: number;
  watchDate: string;
  createdAt: string;
}

export interface removeMovieRating_RemoveMovieRating {
  __typename: "RemoveMovieRatingResponse";
  ok: boolean;
  error: string | null;
  movieRating: removeMovieRating_RemoveMovieRating_movieRating | null;
}

export interface removeMovieRating {
  RemoveMovieRating: removeMovieRating_RemoveMovieRating | null;
}

export interface removeMovieRatingVariables {
  id: number;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getProfileData
// ====================================================

export interface getProfileData_GetUserProfile_user {
  __typename: "UserExpose";
  id: number;
  email: string;
  name: string;
  avatar: string | null;
  shortBio: string | null;
  createdAt: string;
}

export interface getProfileData_GetUserProfile {
  __typename: "GetUserProfileResponse";
  ok: boolean;
  error: string | null;
  user: getProfileData_GetUserProfile_user | null;
}

export interface getProfileData_GetUserInfo_countInfo {
  __typename: "CountInfo";
  watchedMovieCount: number;
  movieRatingCount: number;
}

export interface getProfileData_GetUserInfo {
  __typename: "GetUserInfoResponse";
  ok: boolean;
  error: string | null;
  countInfo: getProfileData_GetUserInfo_countInfo | null;
}

export interface getProfileData {
  GetUserProfile: getProfileData_GetUserProfile;
  GetUserInfo: getProfileData_GetUserInfo;
}

export interface getProfileDataVariables {
  userId: number;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getRatedMovies
// ====================================================

export interface getRatedMovies_GetRatedMovies_ratedMovies {
  __typename: "RatedMovie";
  movieId: number;
}

export interface getRatedMovies_GetRatedMovies {
  __typename: "GetRatedMoviesResponse";
  ok: boolean;
  error: string | null;
  ratedMovies: (getRatedMovies_GetRatedMovies_ratedMovies | null)[] | null;
}

export interface getRatedMovies {
  GetRatedMovies: getRatedMovies_GetRatedMovies;
}

export interface getRatedMoviesVariables {
  userId: number;
  offset: number;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: startEmailSignUp
// ====================================================

export interface startEmailSignUp_EmailSignUp {
  __typename: "EmailSignUpResponse";
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface startEmailSignUp {
  EmailSignUp: startEmailSignUp_EmailSignUp;
}

export interface startEmailSignUpVariables {
  email: string;
  password: string;
  name: string;
  avatar?: string | null;
  shortBio?: string | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
