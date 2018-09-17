import React from 'react';
import styled from 'styled-components';
import MovieCard from 'src/components/MovieCard';

const MovieCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: -7px -7px 30px -7px;
`;

const MovieListTitle = styled.h1`
  font-size: 28px;
  margin-bottom: 15px;
`;

interface IMovieCardListProps {
  withTitle?: boolean;
}

const MovieCardListPresenter: React.SFC<IMovieCardListProps> = ({
  withTitle
}) => (
  <React.Fragment>
    {withTitle && <MovieListTitle>Title</MovieListTitle>}
    <MovieCardContainer>
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </MovieCardContainer>
  </React.Fragment>
);

export default MovieCardListPresenter;
