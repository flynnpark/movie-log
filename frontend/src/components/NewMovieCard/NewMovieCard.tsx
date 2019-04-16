import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MoviePosterWithLoading from '../MoviePosterWIithLoading';

const MovieTitle = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  margin-top: 8px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  span {
    color: rgba(0, 0, 0, 0.85);
  }
`;

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
      <div>
        <MoviePosterWithLoading title={title} posterPath={posterPath} />
        <MovieTitle>
          <span>{title}</span>
        </MovieTitle>
      </div>
    </Link>
  );
};

export default NewMovieCard;
