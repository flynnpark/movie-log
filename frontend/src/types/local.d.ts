export interface userLoginVariables {
  token: string;
}

export interface MovieItem {
  __typename: 'MovieItem';
  id: number;
  title: string;
  poster_path: string | null;
  genre_ids?: (number | null)[];
  overview: string | null;
  release_date: string;
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

export interface Genre {
  __typename: 'Genre';
  id: number;
  name: string;
}

export interface Country {
  __typename: 'Country';
  iso_3166_1: string;
  name: string;
}

export interface getMovieDetail_GetMovieDetail_movie {
  __typename: 'Movie';
  id: number;
  title: string;
  tagline: string;
  poster_path: string | null;
  original_language: string;
  original_title: string;
  production_countries: Country[];
  homepage: string | null;
  runtime: number | null;
  genres: Genre[];
  adult: boolean;
  overview: string;
  release_date: string;
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
