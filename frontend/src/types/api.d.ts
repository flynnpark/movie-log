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
