import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { Alert, Card } from 'antd';
import MovieRating from 'src/components/MovieRating';
import { getMovieDetail } from 'src/types/api';

const MovieInfoContinaer = styled.div`
  background-color: #fff;
  padding: 24px;
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

const Title = styled.div`
  display: flex;
  font-size: 42px;
  line-height: 110%;
  white-space: pre-wrap;
`;

const OriginTitle = styled.div`
  display: flex;
  font-size: 24px;
  line-height: 110%;
  color: #8c8c8c;
  white-space: pre-wrap;
  margin-top: 16px;
`;

const Tagline = styled.div`
  display: flex;
  color: #262626;
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
  data: getMovieDetail;
  handleMovieRatingApply: (rating: number, watchDate: string) => void;
}

const MoviePresenter: React.FunctionComponent<IProps> = ({
  data,
  handleMovieRatingApply
}) => {
  const {
    GetMovieDetail: { ok, movie },
    GetMovieRatings: { ok: ratingOk, movieRatings }
  } = data;
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
                      src={`https://image.tmdb.org/t/p/w200_and_h300_bestv2${
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
                      {movie.genres.map(genre => genre && genre.name).join(' ')}
                    </GenreWrapper>
                    <div>{movie.release_date.replace(/-/gi, '. ')}</div>
                    <MovieRating
                      handleMovieRatingApply={handleMovieRatingApply}
                    />
                    {ratingOk &&
                      movieRatings &&
                      movieRatings.map(
                        movieRating =>
                          movieRating && (
                            <MovieRating
                              key={movieRating.id}
                              movieRating={movieRating}
                              handleMovieRatingApply={handleMovieRatingApply}
                            />
                          )
                      )}
                  </React.Fragment>
                }
              />
            </MovieInfoCard>
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
