export const typeDefs = ["type Query {\n  FindMovie(query: String): [Movie]\n  GetNowPlaying: [Movie]\n  GetPopular: [Movie]\n  GetTopRated: [Movie]\n  movie: Movie\n  GetMovieRating: GetMovieRatingResponse!\n  GetUserMovieRatings: GetUserMovieRatingsResponse!\n  movieRating: MovieRating\n  GetUserProfile(userId: Int): GetUserProfileResponse!\n  user: User\n}\n\ntype Movie {\n  id: Int!\n  title: String!\n  poster_path: String\n  original_language: String!\n  original_title: String!\n  genre_ids: [Int]!\n  adult: Boolean!\n  overview: String\n  release_date: String!\n}\n\ntype GetMovieRatingResponse {\n  ok: Boolean!\n  error: String\n  movieRating: MovieRating\n}\n\ntype GetUserMovieRatingsResponse {\n  ok: Boolean!\n  error: String\n  movieRatings: [MovieRating]\n}\n\ntype MovieRating {\n  id: Int!\n  movieId: Int!\n  userId: Int!\n  rating: Int!\n  createdAt: Int!\n}\n\ntype SetMovieRatingResponse {\n  ok: Boolean!\n  error: String\n  movieRating: MovieRating\n}\n\ntype Mutation {\n  SetMovieRating(movieId: Int!, rating: Int!): SetMovieRatingResponse!\n  EmailSignIn(email: String!, password: String!): EmailSignInResponse!\n  EmailSignUp(email: String!, password: String!, name: String!, avatar: String, shortBio: String): EmailSignUpResponse!\n  UpdateMyProfile(password: String, name: String, avatar: String): UpdateMyProfileResponse!\n}\n\ntype EmailSignInResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype EmailSignUpResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype GetUserProfileResponse {\n  ok: Boolean!\n  error: String\n  user: User\n}\n\ntype UpdateMyProfileResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype User {\n  id: Int!\n  email: String!\n  password: String!\n  name: String!\n  avatar: String\n  shortBio: String\n  createdAt: String!\n}\n"];
/* tslint:disable */

export interface Query {
  FindMovie: Array<Movie> | null;
  GetNowPlaying: Array<Movie> | null;
  GetPopular: Array<Movie> | null;
  GetTopRated: Array<Movie> | null;
  movie: Movie | null;
  GetMovieRating: GetMovieRatingResponse;
  GetUserMovieRatings: GetUserMovieRatingsResponse;
  movieRating: MovieRating | null;
  GetUserProfile: GetUserProfileResponse;
  user: User | null;
}

export interface FindMovieQueryArgs {
  query: string | null;
}

export interface GetUserProfileQueryArgs {
  userId: number | null;
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
  createdAt: number;
}

export interface GetUserMovieRatingsResponse {
  ok: boolean;
  error: string | null;
  movieRatings: Array<MovieRating> | null;
}

export interface GetUserProfileResponse {
  ok: boolean;
  error: string | null;
  user: User | null;
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
  SetMovieRating: SetMovieRatingResponse;
  EmailSignIn: EmailSignInResponse;
  EmailSignUp: EmailSignUpResponse;
  UpdateMyProfile: UpdateMyProfileResponse;
}

export interface SetMovieRatingMutationArgs {
  movieId: number;
  rating: number;
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
