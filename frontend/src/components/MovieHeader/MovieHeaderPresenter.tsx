import React from 'react';
import styled from 'styled-components';
import { Card, Divider } from 'antd';
import { getMovieDetail_GetMovieDetail_movie } from 'types/local';
import { getMovieRatings } from 'types/api';
import MovieRating from 'components/MovieRating';
import MoviePosterWithLoading from 'components/MoviePosterWIithLoading';

const MovieInfoCard = styled(Card)`
  background-color: transparent;
  border: none;
  margin-bottom: 20px;
`;

const LeftContainer = styled.div`
  @media (min-width: 719px) {
    margin-right: 12px;
    width: 300px;
  }
  margin-right: 6px;
  width: 130px;
`;

const TitleContainer = styled.div``;

const Title = styled.h1`
  @media (min-width: 719px) {
    font-size: 42px;
  }
  display: flex;
  font-size: 22px;
  line-height: 110%;
  white-space: pre-wrap;
`;

const OriginTitle = styled.h2`
  @media (min-width: 719px) {
    font-size: 24px;
  }
  display: flex;
  font-size: 14px;
  line-height: 110%;
  color: #8c8c8c;
  white-space: pre-wrap;
  margin-top: 4px;
`;

const Tagline = styled.div`
  @media (min-width: 719px) {
    font-size: 18px;
  }
  display: flex;
  color: #262626;
  font-size: 13px;
  margin-top: 16px;
`;

const GenreWrapper = styled.div`
  @media (min-width: 719px) {
    font-size: 16px;
  }
  font-size: 13px;
  margin-top: 14px;
`;

const MiddleDivider = styled(Divider)`
  @media (max-width: 718px) {
    margin: 12px 0;
  }
`;

const CardBodyStyle = {
  padding: 0
};

interface IProps {
  movie: getMovieDetail_GetMovieDetail_movie;
  ratingData: getMovieRatings | undefined;
  handleMovieRatingApply: (rating: number, watchDate: string) => void;
  handleMovieRatingRemove: (id: number) => void;
}

const MovieHeaderPresenter: React.FunctionComponent<IProps> = ({
  movie,
  ratingData,
  handleMovieRatingApply,
  handleMovieRatingRemove
}) => (
  <MovieInfoCard bodyStyle={CardBodyStyle}>
    <Card.Meta
      avatar={
        <LeftContainer>
          <MoviePosterWithLoading
            title={movie.title}
            posterPath={movie.poster_path}
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
          <MiddleDivider />
          <MovieRating handleMovieRatingApply={handleMovieRatingApply} />
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
);

export default MovieHeaderPresenter;
