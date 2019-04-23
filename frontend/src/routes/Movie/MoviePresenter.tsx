import React from 'react';
import Helmet from 'react-helmet';
import { Alert, Divider } from 'antd';
import styled from 'styled-components';
import QueueAnim from 'rc-queue-anim';
import { getMovieDetail, getRelatedMovies } from 'src/types/local';
import { getMovieRatings } from 'src/types/api';
import MovieHeader from 'src/components/MovieHeader';
import MovieInfo from 'src/components/MovieInfo';
import MovieCardList from 'src/components/MovieCardList';

const MovieInfoContainer = styled.div`
  @media (max-width: 718px) {
    padding: 24px;
  }
  background-color: #fff;
  padding: 36px;
  border-radius: 4px;
  box-shadow: 0 1px 4px #e8e8e8;
`;

const MovieListTitle = styled.h4`
  display: flex;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 14px;
`;

interface IProps {
  movieData: getMovieDetail;
  ratingData: getMovieRatings | undefined;
  relatedMoviesLoading: boolean;
  relatedMoviesData: getRelatedMovies | undefined;
  handleMovieRatingApply: (rating: number, watchDate: string) => void;
  handleMovieRatingRemove: (id: number) => void;
}

const MoviePresenter: React.FunctionComponent<IProps> = ({
  movieData,
  ratingData,
  relatedMoviesLoading,
  relatedMoviesData,
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
          <QueueAnim>
            <MovieInfoContainer key="container">
              <QueueAnim>
                <div key="movieHeader">
                  <MovieHeader
                    movie={movie}
                    ratingData={ratingData}
                    handleMovieRatingApply={handleMovieRatingApply}
                    handleMovieRatingRemove={handleMovieRatingRemove}
                  />
                </div>
                <Divider />
                <MovieInfo key="movieInfo" movie={movie} />
                <Divider />
                {relatedMoviesData && (
                  <MovieCardList
                    key="recommended"
                    loading={relatedMoviesLoading}
                    size="mini"
                    title={<MovieListTitle>추천 영화</MovieListTitle>}
                    movieList={
                      relatedMoviesData.GetMovieRecommendations &&
                      relatedMoviesData.GetMovieRecommendations.slice(0, 12)
                    }
                  />
                )}
                <Divider />
                {relatedMoviesData && (
                  <MovieCardList
                    key="similar"
                    loading={relatedMoviesLoading}
                    size="mini"
                    title={<MovieListTitle>비슷한 영화</MovieListTitle>}
                    movieList={
                      relatedMoviesData.GetMovieSimilar &&
                      relatedMoviesData.GetMovieSimilar.slice(0, 12)
                    }
                  />
                )}
              </QueueAnim>
            </MovieInfoContainer>
          </QueueAnim>
        </>
      ) : (
        <>
          <Helmet>
            <title>정보가 존재하지 않습니다. | Movie-log</title>
          </Helmet>
          <QueueAnim>
            <Alert
              key="alert"
              message="Error"
              description="해당 영화 정보를 가져올 수 없습니다."
              type="error"
              showIcon={true}
            />
          </QueueAnim>
        </>
      )}
    </>
  );
};

export default MoviePresenter;
