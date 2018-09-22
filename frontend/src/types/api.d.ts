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
