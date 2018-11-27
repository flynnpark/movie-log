import React, { Component } from 'react';
import MovieRatingPresenter from './MovieRatingPresenter';
import { getMovieDetail_GetMovieRatings_movieRatings } from 'src/types/api';

interface IProps {
  movieRating: getMovieDetail_GetMovieRatings_movieRatings;
  handleClickMovieRating: (rating: number) => void;
}

class MovieRatingContainer extends Component<IProps> {
  public render() {
    const { movieRating, handleClickMovieRating } = this.props;
    const { createdAt } = movieRating;
    const now = new Date();
    const created = new Date(createdAt);
    const modifyAvailable =
      now.getTime() - created.setHours(created.getHours() + 24) > 0;
    console.log(modifyAvailable);
    return (
      <MovieRatingPresenter
        rating={movieRating.rating}
        handleClickMovieRating={handleClickMovieRating}
      />
    );
  }
}

export default MovieRatingContainer;
