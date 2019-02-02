import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { Alert, Card, Divider } from 'antd';
import MovieRating from 'src/components/MovieRating';
import { getMovieDetail } from 'src/types/local';
import { getMovieRatings } from 'src/types/api';

const MovieInfoContinaer = styled.div`
  background-color: #fff;
  padding: 36px;
  border-radius: 4px;
  box-shadow: 0 1px 4px #e8e8e8;
`;

const MovieInfoCard = styled(Card)`
  background-color: transparent;
  border: none;
  margin-bottom: 20px;
`;

const LeftContainer = styled.div`
  margin-right: 12px;
`;

const TitleContainer = styled.div``;

const Title = styled.h1`
  display: flex;
  font-size: 42px;
  line-height: 110%;
  white-space: pre-wrap;
`;

const OriginTitle = styled.h2`
  display: flex;
  font-size: 24px;
  line-height: 110%;
  color: #8c8c8c;
  white-space: pre-wrap;
  margin-top: 4px;
`;

const Tagline = styled.div`
  display: flex;
  color: #262626;
  font-size: 18px;
  margin-top: 16px;
`;

const GenreWrapper = styled.div`
  font-size: 16px;
  margin-top: 14px;
`;

const CardBodyStyle = {
  padding: 0
};

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
            <MovieInfoCard bodyStyle={CardBodyStyle}>
              <Card.Meta
                avatar={
                  <LeftContainer>
                    <img
                      src={`https://image.tmdb.org/t/p/w300${
                        movie.poster_path
                      }`}
                    />
                  </LeftContainer>
                }
                title={
                  <TitleContainer>
                    <Title>{movie.title}</Title>
                    <OriginTitle>{movie.original_title}</OriginTitle>
                    {movie.tagline && <Tagline>{movie.tagline}</Tagline>}
                  </TitleContainer>
                }
                description={
                  <React.Fragment>
                    <GenreWrapper>
                      {new Date(movie.release_date).getFullYear()}
                      {' · '}
                      {movie.genres.map(genre => genre && genre.name).join(' ')}
                    </GenreWrapper>
                    <Divider />
                    <MovieRating
                      handleMovieRatingApply={handleMovieRatingApply}
                    />
                    {ratingData &&
                      ratingData.GetMovieRatings.ok &&
                      ratingData.GetMovieRatings.movieRatings &&
                      ratingData.GetMovieRatings.movieRatings.map(
                        movieRating =>
                          movieRating && (
                            <MovieRating
                              key={movieRating.id}
                              movieRating={movieRating}
                              handleMovieRatingRemove={handleMovieRatingRemove}
                            />
                          )
                      )}
                  </React.Fragment>
                }
              />
            </MovieInfoCard>
            <Card>
              <Card.Meta title={'기본 정보'} description={movie.overview} />
            </Card>
          </MovieInfoContinaer>
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
