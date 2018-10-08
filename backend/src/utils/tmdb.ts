import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie';
const NOW_PLAYING_URL = 'https://api.themoviedb.org/3/movie/now_playing';
const TOP_RATED_URL = 'https://api.themoviedb.org/3/movie/top_rated';
const POPULAR_URL = 'https://api.themoviedb.org/3/movie/popular';
const MOVIE_DETAIL_URL = 'https://api.themoviedb.org/3/movie';
const API_KEY = process.env.TMDB_KEY;

interface MovieData {
  page: number;
  total_results: number;
  total_pages: number;
  results: [any];
}

export const getNowPlaying = async () => {
  const {
    data: { results }
  } = await axios.get<MovieData>(NOW_PLAYING_URL, {
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
  } = await axios.get<MovieData>(TOP_RATED_URL, {
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
  } = await axios.get<MovieData>(POPULAR_URL, {
    params: {
      api_key: API_KEY,
      language: 'ko-KR'
    }
  });
  return results;
};

export const findMovie = async query => {
  const {
    data: { results }
  } = await axios.get<MovieData>(SEARCH_URL, {
    params: {
      api_key: API_KEY,
      language: 'ko-KR',
      query
    }
  });
  return results;
};

export const getMovieDetail = async (query: string) => {
  const {
    data: { results }
  } = await axios.get(MOVIE_DETAIL_URL, {
    params: {
      api_key: API_KEY,
      language: 'ko-KR',
      query
    }
  });
  return results;
};
