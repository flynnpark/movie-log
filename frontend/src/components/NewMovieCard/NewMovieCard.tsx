import React from 'react';
import { Link } from 'react-router-dom';
import MoviePosterWithLoading from '../MoviePosterWIithLoading';

interface IProps {
  id: number;
  poster_path: string | null;
  title: string;
}

const NewMovieCard: React.FunctionComponent<IProps> = ({
  id,
  title,
  poster_path
}) => {
  return (
    <Link to={`/movie/${id}`}>
      <MoviePosterWithLoading title={title} poster_path={poster_path} />
    </Link>
  );
};

export default NewMovieCard;
