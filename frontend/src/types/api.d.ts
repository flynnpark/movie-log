/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getHomeData
// ====================================================

export interface getHomeData_GetNowPlaying {
  __typename: "Movie";
  id: number;
  title: string;
  poster_path: string | null;
  genre_ids: (number | null)[];
  overview: string | null;
  release_date: string;
}

export interface getHomeData_GetTopRated {
  __typename: "Movie";
  id: number;
  title: string;
  poster_path: string | null;
  genre_ids: (number | null)[];
  overview: string | null;
  release_date: string;
}

export interface getHomeData_GetPopular {
  __typename: "Movie";
  id: number;
  title: string;
  poster_path: string | null;
  genre_ids: (number | null)[];
  overview: string | null;
  release_date: string;
}

export interface getHomeData {
  GetNowPlaying: (getHomeData_GetNowPlaying | null)[] | null;
  GetTopRated: (getHomeData_GetTopRated | null)[] | null;
  GetPopular: (getHomeData_GetPopular | null)[] | null;
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
// GraphQL query operation: getMovieDetail
// ====================================================

export interface getMovieDetail_GetMovieDetail_movie_genres {
  __typename: "Genre";
  name: string;
}

export interface getMovieDetail_GetMovieDetail_movie {
  __typename: "MovieDetail";
  id: number;
  title: string;
  tagline: string;
  poster_path: string | null;
  original_language: string;
  original_title: string;
  genres: (getMovieDetail_GetMovieDetail_movie_genres | null)[];
  adult: boolean;
  overview: string;
  release_date: string;
}

export interface getMovieDetail_GetMovieDetail {
  __typename: "GetMovieDetailResponse";
  ok: boolean;
  error: string | null;
  movie: getMovieDetail_GetMovieDetail_movie | null;
}

export interface getMovieDetail_GetMovieRatings_movieRatings {
  __typename: "MovieRating";
  id: number;
  userId: number;
  movieId: number;
  rating: number;
  watchDate: string;
  createdAt: string;
}

export interface getMovieDetail_GetMovieRatings {
  __typename: "GetMovieRatingsResponse";
  ok: boolean;
  error: string | null;
  movieRatings: (getMovieDetail_GetMovieRatings_movieRatings | null)[] | null;
}

export interface getMovieDetail {
  GetMovieDetail: getMovieDetail_GetMovieDetail;
  GetMovieRatings: getMovieDetail_GetMovieRatings;
}

export interface getMovieDetailVariables {
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
  __typename: "User";
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

export interface getProfileData {
  GetUserProfile: getProfileData_GetUserProfile;
}

export interface getProfileDataVariables {
  userId: number;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: findMovie
// ====================================================

export interface findMovie_FindMovie {
  __typename: "Movie";
  id: number;
  title: string;
  poster_path: string | null;
  genre_ids: (number | null)[];
  release_date: string;
}

export interface findMovie {
  FindMovie: (findMovie_FindMovie | null)[] | null;
}

export interface findMovieVariables {
  query: string;
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
