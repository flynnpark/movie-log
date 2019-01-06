import axios from 'axios';

console.log(process.env);

const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie';
const NOW_PLAYING_URL = 'https://api.themoviedb.org/3/movie/now_playing';
const TOP_RATED_URL = 'https://api.themoviedb.org/3/movie/top_rated';
const POPULAR_URL = 'https://api.themoviedb.org/3/movie/popular';
const MOVIE_DETAIL_URL = 'https://api.themoviedb.org/3/movie';
const API_KEY = process.env.REACT_APP_TMDB_KEY;

interface IMovieDetailData {
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

interface IMovieListData {
  page: number;
  total_results: number;
  total_pages: number;
  results: [any];
}

export const getNowPlaying = async () => {
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

export const getTopRated = async () => {
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

export const getPopular = async () => {
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

export const findMovie = async (query: string) => {
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
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
