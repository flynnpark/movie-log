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
  title?: string;
  movieList?: Array<{
    id: number;
    poster_path: string;
    title: string;
  }>;
}

const MovieCardListPresenter: React.SFC<IMovieCardListProps> = ({
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
