import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MoviePosterWithLoading from 'components/MoviePosterWIithLoading';

const MovieTitle = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  margin-top: 10px;

  span {
    color: rgba(0, 0, 0, 0.85);
    font-size: 16px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

interface IProps {
  size: 'mini' | 'normal';
  id: number;
  posterPath: string | null;
  title: string;
}

const NewMovieCard: React.FunctionComponent<IProps> = ({
  size,
  id,
  title,
  posterPath
}) => {
  return (
    <Link to={`/movie/${id}`}>
      <div>
        <MoviePosterWithLoading title={title} posterPath={posterPath} />
        {size !== 'mini' && (
          <MovieTitle>
            <span>{title}</span>
          </MovieTitle>
        )}
      </div>
    </Link>
  );
};

export default NewMovieCard;
