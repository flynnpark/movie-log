import React from 'react';
import styled from 'styled-components';
import MovieCard from '../MovieCard';

const MovieListContainer = styled.div`
  margin-bottom: 35px;
`;

const MovieListTitle = styled.h1`
  font-size: 28px;
  margin-bottom: 15px;
`;

const MovieListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: -7px;
`;

const MovieListPresenter = () => (
  <MovieListContainer>
    <MovieListTitle>Title</MovieListTitle>
    <MovieListWrapper>
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </MovieListWrapper>
  </MovieListContainer>
);

export default MovieListPresenter;
