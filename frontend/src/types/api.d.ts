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
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
