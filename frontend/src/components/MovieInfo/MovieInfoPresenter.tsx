import React from 'react';
import { getMovieDetail_GetMovieDetail_movie } from 'src/types/local';

interface IProps {
  movie: getMovieDetail_GetMovieDetail_movie;
}

const MovieHeaderPresenter: React.FunctionComponent<IProps> = ({ movie }) => (
  <div>
    <p>Movie's info is here!</p>
    <p>{movie}</p>
  </div>
);

export default MovieHeaderPresenter;
