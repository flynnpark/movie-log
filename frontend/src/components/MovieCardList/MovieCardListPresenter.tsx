import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MovieCard from 'src/components/MovieCard';

const MovieCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: -7px -7px 30px -7px;
`;

const MovieListTitle = styled.h1`
  font-size: 28px;
  margin-bottom: 15px;
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

const MovieCardListPresenter: React.SFC<IProps> = ({ title, movieList }) => (
  <React.Fragment>
    {title && <MovieListTitle>{title}</MovieListTitle>}
    <MovieCardContainer>
      {movieList &&
        movieList.map(movieInfo => (
          <Link to={`/movie/${movieInfo.id}`}>
            <MovieCard key={movieInfo.id} {...movieInfo} />
          </Link>
        ))}
    </MovieCardContainer>
  </React.Fragment>
);

export default MovieCardListPresenter;
