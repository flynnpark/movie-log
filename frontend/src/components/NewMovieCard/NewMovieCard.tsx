import React from 'react';
import { Link } from 'react-router-dom';
import MoviePosterWithLoading from '../MoviePosterWIithLoading';

interface IProps {
  id: number;
  posterPath: string | null;
  title: string;
}

const NewMovieCard: React.FunctionComponent<IProps> = ({
  id,
  title,
  posterPath
}) => {
  return (
    <Link to={`/movie/${id}`}>
      <MoviePosterWithLoading title={title} posterPath={posterPath} />
    </Link>
  );
};

export default NewMovieCard;
