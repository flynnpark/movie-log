import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie';
const NOW_PLAYING_URL = 'https://api.themoviedb.org/3/movie/now_playing';
const TOP_RATED_URL = 'https://api.themoviedb.org/3/movie/top_rated';
const POPULAR_URL = 'https://api.themoviedb.org/3/movie/popular';
const MOVIE_DETAIL_URL = 'https://api.themoviedb.org/3/movie';
const API_KEY = process.env.TMDB_KEY;

interface MovieDetailData {
  id: number;
  title: string;
  poster_path: string;
  original_language: string;
  original_title: string;
  adult: boolean;
  overview: string;
  release_datde: string;
}

interface MovieListData {
  page: number;
  total_results: number;
  total_pages: number;
  results: [any];
}

export const getNowPlaying = async () => {
  const {
    data: { results }
  } = await axios.get<MovieListData>(NOW_PLAYING_URL, {
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
  } = await axios.get<MovieListData>(TOP_RATED_URL, {
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
  } = await axios.get<MovieListData>(POPULAR_URL, {
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
  } = await axios.get<MovieListData>(SEARCH_URL, {
    params: {
      api_key: API_KEY,
      language: 'ko-KR',
      query
    }
  });
  return results;
};

export const getMovieDetail = async (movieId: string) => {
  try {
    const { data } = await axios.get<MovieDetailData>(
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
