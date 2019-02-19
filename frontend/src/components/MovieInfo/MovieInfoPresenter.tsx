import React from 'react';
import styled from 'styled-components';
import { getMovieDetail_GetMovieDetail_movie } from 'src/types/local';

const MovieInfoHeader = styled.h1`
  display: flex;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 14px;
`;

const MovieReleasedDate = styled.div`
  margin-bottom: 10px;
`;

const MovieOverview = styled.p`
  line-height: 160%;
`;

interface IProps {
  movie: getMovieDetail_GetMovieDetail_movie;
}

const MovieHeaderPresenter: React.FunctionComponent<IProps> = ({ movie }) => (
  <>
    <MovieInfoHeader>기본 정보</MovieInfoHeader>
    <MovieReleasedDate>
      개봉일 {movie.release_date.replace(/-/g, '. ')}
    </MovieReleasedDate>
    <MovieOverview>{movie.overview}</MovieOverview>
  </>
);

export default MovieHeaderPresenter;
