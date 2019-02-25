import axios from 'axios';

const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie';
const NOW_PLAYING_URL = 'https://api.themoviedb.org/3/movie/now_playing';
const TOP_RATED_URL = 'https://api.themoviedb.org/3/movie/top_rated';
const POPULAR_URL = 'https://api.themoviedb.org/3/movie/popular';
const MOVIE_DETAIL_URL = 'https://api.themoviedb.org/3/movie';
const API_KEY = process.env.REACT_APP_TMDB_KEY;

interface IMovieDetailData {
  __typename: 'MovieDetail';
  id: number;
  title: string;
  tagline: string;
  poster_path: string;
  original_language: string;
  original_title: string;
  genres: Array<{
    id: number;
    name: string;
  }>;
  adult: boolean;
  overview: string;
  release_date: string;
  runtime: number;
}

interface IMovie {
  id: number;
  title: string;
  poster_path: string;
  original_language: string;
  original_title: string;
  genre_ids: number[];
  adult: boolean;
  overview: string;
  release_date: string;
}

interface IMovieListData {
  page: number;
  total_results: number;
  total_pages: number;
  results: IMovie[];
}

export const getNowPlaying = async (): Promise<IMovie[]> => {
  const {
    data: { results }
  } = await axios.get<IMovieListData>(NOW_PLAYING_URL, {
    params: {
      api_key: API_KEY,
      language: 'ko-KR'
    }
  });
  return results;
};

export const getTopRated = async (): Promise<IMovie[]> => {
  const {
    data: { results }
  } = await axios.get<IMovieListData>(TOP_RATED_URL, {
    params: {
      api_key: API_KEY,
      language: 'ko-KR'
    }
  });
  return results;
};

export const getPopular = async (): Promise<IMovie[]> => {
  const {
    data: { results }
  } = await axios.get<IMovieListData>(POPULAR_URL, {
    params: {
      api_key: API_KEY,
      language: 'ko-KR'
    }
  });
  return results;
};

export const findMovie = async (query: string): Promise<IMovie[]> => {
  const {
    data: { results }
  } = await axios.get<IMovieListData>(SEARCH_URL, {
    params: {
      api_key: API_KEY,
      language: 'ko-KR',
      query
    }
  });
  return results;
};

export const getMovieDetail = async (
  movieId: number
): Promise<IMovieDetailData | null> => {
  try {
    const { data } = await axios.get<IMovieDetailData>(
      `${MOVIE_DETAIL_URL}/${movieId}`,
      {
        params: {
          api_key: API_KEY,
          language: 'ko-KR'
        }
      }
    );
    data.__typename = 'MovieDetail';
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getMovieRecommendations = async (movieId: number) => {
  try {
    const { data } = await axios.get(
      `${MOVIE_DETAIL_URL}/${movieId}/recommendations`,
      {
        params: {
          api_key: API_KEY,
          language: 'ko-KR'
        }
      }
    );
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getMovieSimilar = async (movieId: number) => {
  try {
    const { data } = await axios.get(`${MOVIE_DETAIL_URL}/${movieId}/similar`, {
      params: {
        api_key: API_KEY,
        language: 'ko-KR'
      }
    });
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
