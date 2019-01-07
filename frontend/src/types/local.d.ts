export interface getHomeData_GetNowPlaying {
  __typename: 'MovieItem';
  id: number;
  title: string;
  poster_path: string | null;
  genre_ids: (number | null)[];
  overview: string | null;
  release_date: string;
}

export interface getHomeData_GetTopRated {
  __typename: 'MovieItem';
  id: number;
  title: string;
  poster_path: string | null;
  genre_ids: (number | null)[];
  overview: string | null;
  release_date: string;
}

export interface getHomeData_GetPopular {
  __typename: 'MovieItem';
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

export interface findMovie_FindMovie {
  __typename: 'MovieItem';
  id: number;
  title: string;
  poster_path: string | null;
  genre_ids: (number | null)[];
  release_date: string;
}

export interface findMovie {
  FindMovie: (findMovie_FindMovie | null)[] | null;
}

export interface findMovieVariables {
  query: string;
}

export interface getMovieDetail_GetMovieDetail_movie_genres {
  __typename: 'Genre';
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
  genres: (getMovieDetail_GetMovieDetail_movie_genres | null)[];
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
