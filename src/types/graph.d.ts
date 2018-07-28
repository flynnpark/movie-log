export const typeDefs = ["type EmailSignInResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype mutation {\n  EmailSignIn(email: String!, password: String!): EmailSignInResponse!\n}\n\ntype User {\n  id: Int!\n  email: String!\n  password: String!\n  name: String!\n  birthYear: Int!\n  profileImage: String\n  createdAt: Int!\n}\n\ntype Query {\n  user: User\n}\n"];
/* tslint:disable */

export interface Query {
  user: User | null;
}

export interface User {
  id: number;
  email: string;
  password: string;
  name: string;
  birthYear: number;
  profileImage: string | null;
  createdAt: number;
}

export interface EmailSignInResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface mutation {
  EmailSignIn: EmailSignInResponse;
}

export interface EmailSignInmutationArgs {
  email: string;
  password: string;
}
