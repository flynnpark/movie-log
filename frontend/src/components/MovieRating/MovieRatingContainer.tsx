import React, { Component } from 'react';
import MovieRatingPresenter from './MovieRatingPresenter';

interface IProps {
  rating: number;
  handleClickMovieRating: (rating: number) => void;
}

class MovieRatingContainer extends Component<IProps> {
  public render() {
    const { rating, handleClickMovieRating } = this.props;
    return (
      <MovieRatingPresenter
        rating={rating}
        handleClickMovieRating={handleClickMovieRating}
      />
    );
  }
}

export default MovieRatingContainer;
