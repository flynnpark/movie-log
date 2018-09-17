import React from 'react';
import styled from 'styled-components';
import MovieCard from 'src/components/MovieCard';

const MovieCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: -7px;
`;

const MovieCardListPresenter = () => (
  <MovieCardContainer>
    <MovieCard />
    <MovieCard />
    <MovieCard />
    <MovieCard />
    <MovieCard />
    <MovieCard />
    <MovieCard />
  </MovieCardContainer>
);

export default MovieCardListPresenter;
