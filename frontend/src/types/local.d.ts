export interface userLogInVariables {
  token: string;
}

export interface facebookLogInVariables {
  facebookToken: string;
}

export interface MovieItem {
  __typename: 'MovieItem';
  adult: boolean;
  backdrop_path: string;
  genre_ids?: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string | null;
  poster_path: string | null;
  release_date: string;
  title: string;
}

export interface getHomeData {
  GetNowPlaying: MovieItem[];
  GetTopRated: MovieItem[];
  GetPopular: MovieItem[];
}

export interface findMovie {
  FindMovie: MovieItem[];
}

export interface findMovieVariables {
  query: string;
}

export interface Collection {
  __typename: 'Collection';
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}

export interface Genre {
  __typename: 'Genre';
  id: number;
  name: string;
}

export interface Company {
  __typename: 'Company';
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface Country {
  __typename: 'Country';
  iso_3166_1: string;
  name: string;
}

export interface getMovieDetail_GetMovieDetail_movie {
  __typename: 'Movie';
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: Collection | null;
  budget: number;
  genres: Genre[];
  homepage: string | null;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_companies: Company[];
  production_countries: Country[];
  release_date: string;
  revenue: number;
  runtime: number | null;
  status:
    | 'Rumored'
    | 'Planned'
    | 'In Production'
    | 'Post Production'
    | 'Released'
    | 'Canceled';
  tagline: string;
  title: string;
}

export interface getMovieDetail_GetMovieDetail {
  __typename: 'GetMovieDetailResponse';
  ok: boolean;
  error: string | null;
  movie: getMovieDetail_GetMovieDetail_movie | null;
}

export interface getMovieDetail {
  GetMovieDetail: getMovieDetail_GetMovieDetail;
}

export interface getMovieDetailVariables {
  movieId: number;
}

export interface getRelatedMovies {
  GetMovieRecommendations: MovieItem[];
  GetMovieSimilar: MovieItem[];
}

export interface getMovieRecommendationsVariables {
  movieId: number;
}

export interface getMovieSimilarVariables {
  movieId: number;
}

export interface getMovieList_GetMovieList {
  __typename: 'GetMovieListResponse';
  ok: boolean;
  error: string | null;
  movieList: MovieItem[];
}

export interface getMovieList {
  GetMovieList: getMovieList_GetMovieList;
}

export interface getMovieListVariables {
  movieIdList: number[];
}
