import React, { Component } from 'react';
import MovieRatingPresenter from './MovieRatingPresenter';
import { getMovieDetail_GetMovieRatings_movieRatings } from 'src/types/api';

interface IProps {
  movieRating?: getMovieDetail_GetMovieRatings_movieRatings;
  handleClickMovieRating: (rating: number) => void;
}

class MovieRatingContainer extends Component<IProps> {
  public render() {
    const { movieRating, handleClickMovieRating } = this.props;
    if (movieRating) {
      return (
        <MovieRatingPresenter
          movieRating={movieRating}
          handleClickMovieRating={handleClickMovieRating}
        />
      );
    }
    return (
      // 점수 등록
      <MovieRatingPresenter handleClickMovieRating={handleClickMovieRating} />
    );
  }
}

export default MovieRatingContainer;
