export const typeDefs = ["type Query {\n  FindMovie(query: String): [Movie]\n  GetMyProfile: GetMyProfileResponse!\n  user: User\n}\n\ntype Movie {\n  id: Int!\n  title: String!\n  poster_path: String\n  original_language: String!\n  original_title: String!\n  genre_ids: [Int]!\n  adult: Boolean!\n  overview: String\n  release_date: String!\n}\n\ntype Quert {\n  movie: Movie\n}\n\ntype EmailSignInResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype Mutation {\n  EmailSignIn(email: String!, password: String!): EmailSignInResponse!\n  EmailSignUp(email: String!, password: String!, name: String!, birthYear: Int!, profileImage: String): EmailSignUpResponse!\n  UpdateMyProfile(password: String, name: String, profileImage: String): UpdateMyProfileResponse!\n}\n\ntype EmailSignUpResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype GetMyProfileResponse {\n  ok: Boolean!\n  error: String\n  user: User\n}\n\ntype UpdateMyProfileResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype User {\n  id: Int!\n  email: String!\n  password: String!\n  name: String!\n  birthYear: Int!\n  profileImage: String\n  createdAt: Int!\n}\n"];
/* tslint:disable */

export interface Query {
  FindMovie: Array<Movie> | null;
  GetMyProfile: GetMyProfileResponse;
  user: User | null;
}

export interface FindMovieQueryArgs {
  query: string | null;
}

export interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  original_language: string;
  original_title: string;
  genre_ids: Array<number>;
  adult: boolean;
  overview: string | null;
  release_date: string;
}

export interface GetMyProfileResponse {
  ok: boolean;
  error: string | null;
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

export interface Mutation {
  EmailSignIn: EmailSignInResponse;
  EmailSignUp: EmailSignUpResponse;
  UpdateMyProfile: UpdateMyProfileResponse;
}

export interface EmailSignInMutationArgs {
  email: string;
  password: string;
}

export interface EmailSignUpMutationArgs {
  email: string;
  password: string;
  name: string;
  birthYear: number;
  profileImage: string | null;
}

export interface UpdateMyProfileMutationArgs {
  password: string | null;
  name: string | null;
  profileImage: string | null;
}

export interface EmailSignInResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface EmailSignUpResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface UpdateMyProfileResponse {
  ok: boolean;
  error: string | null;
}

export interface Quert {
  movie: Movie | null;
}
