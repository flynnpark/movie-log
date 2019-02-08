import React from 'react';
import Helmet from 'react-helmet';
import { Alert, Divider } from 'antd';
import styled from 'styled-components';
import { getMovieDetail } from 'src/types/local';
import { getMovieRatings } from 'src/types/api';
import MovieHeader from 'src/components/MovieHeader';
import MovieInfo from 'src/components/MovieInfo';

const MovieInfoContinaer = styled.div`
  background-color: #fff;
  padding: 36px;
  border-radius: 4px;
  box-shadow: 0 1px 4px #e8e8e8;
`;

interface IProps {
  movieData: getMovieDetail;
  ratingData: getMovieRatings | undefined;
  handleMovieRatingApply: (rating: number, watchDate: string) => void;
  handleMovieRatingRemove: (id: number) => void;
}

const MoviePresenter: React.FunctionComponent<IProps> = ({
  movieData,
  ratingData,
  handleMovieRatingApply,
  handleMovieRatingRemove
}) => {
  const {
    GetMovieDetail: { ok, movie }
  } = movieData;
  return (
    <>
      {ok && movie ? (
        <>
          <Helmet>
            <title>{movie.title} | Movie-log</title>
          </Helmet>
          <MovieInfoContinaer>
            <MovieHeader
              movie={movie}
              ratingData={ratingData}
              handleMovieRatingApply={handleMovieRatingApply}
              handleMovieRatingRemove={handleMovieRatingRemove}
            />
            <Divider />
            <MovieInfo movie={movie} />
          </MovieInfoContinaer>
        </>
      ) : (
        <>
          <Helmet>
            <title>정보가 존재하지 않습니다. | Movie-log</title>
          </Helmet>
          <Alert
            message="Error"
            description="해당 영화 정보를 가져올 수 없습니다."
            type="error"
            showIcon={true}
          />
        </>
      )}
    </>
  );
};

export default MoviePresenter;
