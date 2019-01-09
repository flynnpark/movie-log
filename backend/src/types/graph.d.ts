export const typeDefs = ["type GetMovieRatingResponse {\n  ok: Boolean!\n  error: String\n  movieRating: MovieRating\n}\n\ntype Query {\n  GetMovieRating(movieId: Int!): GetMovieRatingResponse!\n  GetMovieRatings(movieId: Int!, limit: Int): GetMovieRatingsResponse!\n  GetUserMovieRatings: GetUserMovieRatingsResponse!\n  movieRating: MovieRating\n  GetUserInfo(userId: Int): GetUserInfoResponse!\n  GetUserProfile(userId: Int): GetUserProfileResponse!\n  user: User\n  userExpose: UserExpose\n}\n\ntype GetMovieRatingsResponse {\n  ok: Boolean!\n  error: String\n  movieRatings: [MovieRating]\n}\n\ntype GetUserMovieRatingsResponse {\n  ok: Boolean!\n  error: String\n  movieRatings: [MovieRating]\n}\n\ntype MovieRating {\n  id: Int!\n  movieId: Int!\n  userId: Int!\n  rating: Float!\n  watchDate: String!\n  createdAt: String!\n}\n\ntype RemoveMovieRatingResponse {\n  ok: Boolean!\n  error: String\n  movieRating: MovieRating\n}\n\ntype Mutation {\n  RemoveMovieRating(id: Int): RemoveMovieRatingResponse\n  SetMovieRating(movieId: Int!, rating: Float!, watchDate: String!): SetMovieRatingResponse!\n  EmailSignIn(email: String!, password: String!): EmailSignInResponse!\n  EmailSignUp(email: String!, password: String!, name: String!, avatar: String, shortBio: String): EmailSignUpResponse!\n  UpdateMyProfile(password: String, name: String, avatar: String): UpdateMyProfileResponse!\n}\n\ntype SetMovieRatingResponse {\n  ok: Boolean!\n  error: String\n  movieRating: MovieRating\n}\n\ntype EmailSignInResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype EmailSignUpResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype CountInfo {\n  watchedMovieCount: Int!\n  movieRatingCount: Int!\n}\n\ntype GetUserInfoResponse {\n  ok: Boolean!\n  error: String\n  countInfo: CountInfo\n}\n\ntype GetUserProfileResponse {\n  ok: Boolean!\n  error: String\n  user: UserExpose\n}\n\ntype UpdateMyProfileResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype User {\n  id: Int!\n  email: String!\n  password: String!\n  name: String!\n  avatar: String\n  shortBio: String\n  createdAt: String!\n}\n\ntype UserExpose {\n  id: Int!\n  email: String!\n  name: String!\n  avatar: String\n  shortBio: String\n  createdAt: String!\n}\n"];
/* tslint:disable */

export interface Query {
  GetMovieRating: GetMovieRatingResponse;
  GetMovieRatings: GetMovieRatingsResponse;
  GetUserMovieRatings: GetUserMovieRatingsResponse;
  movieRating: MovieRating | null;
  GetUserInfo: GetUserInfoResponse;
  GetUserProfile: GetUserProfileResponse;
  user: User | null;
  userExpose: UserExpose | null;
}

export interface GetMovieRatingQueryArgs {
  movieId: number;
}

export interface GetMovieRatingsQueryArgs {
  movieId: number;
  limit: number | null;
}

export interface GetUserInfoQueryArgs {
  userId: number | null;
}

export interface GetUserProfileQueryArgs {
  userId: number | null;
}

export interface GetMovieRatingResponse {
  ok: boolean;
  error: string | null;
  movieRating: MovieRating | null;
}

export interface MovieRating {
  id: number;
  movieId: number;
  userId: number;
  rating: number;
  watchDate: string;
  createdAt: string;
}

export interface GetMovieRatingsResponse {
  ok: boolean;
  error: string | null;
  movieRatings: Array<MovieRating> | null;
}

export interface GetUserMovieRatingsResponse {
  ok: boolean;
  error: string | null;
  movieRatings: Array<MovieRating> | null;
}

export interface GetUserInfoResponse {
  ok: boolean;
  error: string | null;
  countInfo: CountInfo | null;
}

export interface CountInfo {
  watchedMovieCount: number;
  movieRatingCount: number;
}

export interface GetUserProfileResponse {
  ok: boolean;
  error: string | null;
  user: UserExpose | null;
}

export interface UserExpose {
  id: number;
  email: string;
  name: string;
  avatar: string | null;
  shortBio: string | null;
  createdAt: string;
}

export interface User {
  id: number;
  email: string;
  password: string;
  name: string;
  avatar: string | null;
  shortBio: string | null;
  createdAt: string;
}

export interface Mutation {
  RemoveMovieRating: RemoveMovieRatingResponse | null;
  SetMovieRating: SetMovieRatingResponse;
  EmailSignIn: EmailSignInResponse;
  EmailSignUp: EmailSignUpResponse;
  UpdateMyProfile: UpdateMyProfileResponse;
}

export interface RemoveMovieRatingMutationArgs {
  id: number | null;
}

export interface SetMovieRatingMutationArgs {
  movieId: number;
  rating: number;
  watchDate: string;
}

export interface EmailSignInMutationArgs {
  email: string;
  password: string;
}

export interface EmailSignUpMutationArgs {
  email: string;
  password: string;
  name: string;
  avatar: string | null;
  shortBio: string | null;
}

export interface UpdateMyProfileMutationArgs {
  password: string | null;
  name: string | null;
  avatar: string | null;
}

export interface RemoveMovieRatingResponse {
  ok: boolean;
  error: string | null;
  movieRating: MovieRating | null;
}

export interface SetMovieRatingResponse {
  ok: boolean;
  error: string | null;
  movieRating: MovieRating | null;
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
