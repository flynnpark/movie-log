import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
const API_KEY = process.env.TMDB_KEY;

interface MovieData {
  page: number;
  total_results: number;
  total_pages: number;
  results: [any];
}

export const findMovie = async query => {
  console.log(process.env);
  const {
    data: { results },
  } = await axios.get<MovieData>(BASE_URL, {
    params: {
      api_key: API_KEY,
      language: 'ko-KR',
      query,
    },
  });
  return results;
};
