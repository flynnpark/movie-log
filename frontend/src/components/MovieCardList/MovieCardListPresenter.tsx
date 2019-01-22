import React from 'react';
import styled from 'styled-components';
import MovieCard from 'src/components/MovieCard';
import { MovieItem } from 'src/types/local';

const MovieCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: -10px -10px 30px -10px;
`;

interface IProps {
  title?: React.ReactNode;
  movieList?: MovieItem[] | null;
}

const MovieCardListPresenter: React.FunctionComponent<IProps> = ({
  title,
  movieList
}) => (
  <React.Fragment>
    {title && title}
    <MovieCardContainer>
      {movieList &&
        movieList.map(
          movieInfo =>
            movieInfo && <MovieCard key={movieInfo.id} {...movieInfo} />
        )}
    </MovieCardContainer>
  </React.Fragment>
);

export default MovieCardListPresenter;
