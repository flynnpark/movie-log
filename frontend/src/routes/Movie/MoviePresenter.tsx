import React from 'react';
import Helmet from 'react-helmet';
import { Alert } from 'antd';
import { getMovieDetail } from 'src/types/local';
import { getMovieRatings } from 'src/types/api';
import MovieHeader from 'src/components/MovieHeader';

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
          <MovieHeader
            movie={movie}
            ratingData={ratingData}
            handleMovieRatingApply={handleMovieRatingApply}
            handleMovieRatingRemove={handleMovieRatingRemove}
          />
        </>
      ) : (
        <Alert
          message="Error"
          description="해당 영화 정보를 가져올 수 없습니다."
          type="error"
          showIcon={true}
        />
      )}
    </>
  );
};

export default MoviePresenter;
