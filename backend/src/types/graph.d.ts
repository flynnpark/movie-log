export const typeDefs = ["type Query {\n  FindMovie(query: String): [Movie]\n  genre: Genre\n  GetMovieDetail(movieId: Int): GetMovieDetailResponse!\n  GetNowPlaying: [Movie]\n  GetPopular: [Movie]\n  GetTopRated: [Movie]\n  movie: Movie\n  movieDetail: MovieDetail\n  GetMovieRating(movieId: Int!): GetMovieRatingResponse!\n  GetMovieRatings(movieId: Int!, limit: Int): GetMovieRatingsResponse!\n  GetUserMovieRatings: GetUserMovieRatingsResponse!\n  movieRating: MovieRating\n  GetUserProfile(userId: Int): GetUserProfileResponse!\n  user: User\n}\n\ntype Genre {\n  id: Int!\n  name: String!\n}\n\ntype GetMovieDetailResponse {\n  ok: Boolean!\n  error: String\n  movie: MovieDetail\n}\n\ntype Movie {\n  id: Int!\n  title: String!\n  poster_path: String\n  original_language: String!\n  original_title: String!\n  genre_ids: [Int]!\n  adult: Boolean!\n  overview: String\n  release_date: String!\n}\n\ntype MovieDetail {\n  id: Int!\n  title: String!\n  tagline: String!\n  poster_path: String\n  original_language: String!\n  original_title: String!\n  genres: [Genre]!\n  adult: Boolean!\n  overview: String!\n  release_date: String!\n  runtime: Int!\n}\n\ntype GetMovieRatingResponse {\n  ok: Boolean!\n  error: String\n  movieRating: MovieRating\n}\n\ntype GetMovieRatingsResponse {\n  ok: Boolean!\n  error: String\n  movieRatings: [MovieRating]\n}\n\ntype GetUserMovieRatingsResponse {\n  ok: Boolean!\n  error: String\n  movieRatings: [MovieRating]\n}\n\ntype MovieRating {\n  id: Int!\n  movieId: Int!\n  userId: Int!\n  rating: Float!\n  watchDate: String!\n  createdAt: String!\n}\n\ntype RemoveMovieRatingResponse {\n  ok: Boolean!\n  error: String\n  movieRating: MovieRating\n}\n\ntype Mutation {\n  RemoveMovieRating(id: Int): RemoveMovieRatingResponse\n  SetMovieRating(movieId: Int!, rating: Float!, watchDate: String!): SetMovieRatingResponse!\n  EmailSignIn(email: String!, password: String!): EmailSignInResponse!\n  EmailSignUp(email: String!, password: String!, name: String!, avatar: String, shortBio: String): EmailSignUpResponse!\n  UpdateMyProfile(password: String, name: String, avatar: String): UpdateMyProfileResponse!\n}\n\ntype SetMovieRatingResponse {\n  ok: Boolean!\n  error: String\n  movieRating: MovieRating\n}\n\ntype EmailSignInResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype EmailSignUpResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype GetUserProfileResponse {\n  ok: Boolean!\n  error: String\n  user: User\n}\n\ntype UpdateMyProfileResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype User {\n  id: Int!\n  email: String!\n  password: String!\n  name: String!\n  avatar: String\n  shortBio: String\n  createdAt: String!\n}\n"];
/* tslint:disable */

export interface Query {
  FindMovie: Array<Movie> | null;
  genre: Genre | null;
  GetMovieDetail: GetMovieDetailResponse;
  GetNowPlaying: Array<Movie> | null;
  GetPopular: Array<Movie> | null;
  GetTopRated: Array<Movie> | null;
  movie: Movie | null;
  movieDetail: MovieDetail | null;
  GetMovieRating: GetMovieRatingResponse;
  GetMovieRatings: GetMovieRatingsResponse;
  GetUserMovieRatings: GetUserMovieRatingsResponse;
  movieRating: MovieRating | null;
  GetUserProfile: GetUserProfileResponse;
  user: User | null;
}

export interface FindMovieQueryArgs {
  query: string | null;
}

export interface GetMovieDetailQueryArgs {
  movieId: number | null;
}

export interface GetMovieRatingQueryArgs {
  movieId: number;
}

export interface GetMovieRatingsQueryArgs {
  movieId: number;
  limit: number | null;
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

export interface Genre {
  id: number;
  name: string;
}

export interface GetMovieDetailResponse {
  ok: boolean;
  error: string | null;
  movie: MovieDetail | null;
}

export interface MovieDetail {
  id: number;
  title: string;
  tagline: string;
  poster_path: string | null;
  original_language: string;
  original_title: string;
  genres: Array<Genre>;
  adult: boolean;
  overview: string;
  release_date: string;
  runtime: number;
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
