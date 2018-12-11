import React from 'react';
import styled from 'styled-components';
import MovieCard from 'src/components/MovieCard';

const MovieCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: -10px -10px 30px -10px;
`;

const MovieListTitle = styled.h1`
  font-size: 32px;
  margin-bottom: 25px;
`;

interface IProps {
  title?: string;
  movieList?: Array<{
    id: number;
    poster_path: string;
    title: string;
    release_date: string;
  }>;
}

const MovieCardListPresenter: React.FunctionComponent<IProps> = ({
  title,
  movieList
}) => (
  <React.Fragment>
    {title && <MovieListTitle>{title}</MovieListTitle>}
    <MovieCardContainer>
      {movieList &&
        movieList.map(movieInfo => (
          <MovieCard key={movieInfo.id} {...movieInfo} />
        ))}
    </MovieCardContainer>
  </React.Fragment>
);

export default MovieCardListPresenter;
