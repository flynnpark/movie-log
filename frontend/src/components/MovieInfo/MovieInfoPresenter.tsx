import React from 'react';
import styled from 'styled-components';
import { getMovieDetail_GetMovieDetail_movie } from 'src/types/local';

const MovieInfoHeader = styled.h1`
  display: flex;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 14px;
`;

const MovieInfo = styled.div`
  margin-bottom: 10px;
`;

const MovieOverview = styled.p`
  line-height: 160%;
  margin-bottom: 30px;
`;

interface IProps {
  movie: getMovieDetail_GetMovieDetail_movie;
}

const MovieHeaderPresenter: React.FunctionComponent<IProps> = ({ movie }) => (
  <>
    <MovieInfoHeader>기본 정보</MovieInfoHeader>
    <MovieInfo>
      {movie.title} {movie.original_title}
    </MovieInfo>
    <MovieInfo>개봉일 {movie.release_date.replace(/-/g, '. ')}</MovieInfo>
    {movie.runtime && <MovieInfo>{movie.runtime}분</MovieInfo>}
    {movie.belongs_to_collection && (
      <MovieInfo>{movie.belongs_to_collection.name}</MovieInfo>
    )}
    <MovieOverview>{movie.overview}</MovieOverview>
  </>
);

export default MovieHeaderPresenter;
