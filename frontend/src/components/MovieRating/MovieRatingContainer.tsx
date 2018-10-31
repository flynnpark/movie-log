import React, { Component } from 'react';
import MovieRatingPresenter from './MovieRatingPresenter';

interface IProps {
  handleClickMovieRating: (rating: number) => void;
}

class MovieRatingContainer extends Component<IProps> {
  public render() {
    const { handleClickMovieRating } = this.props;
    return (
      <MovieRatingPresenter handleClickMovieRating={handleClickMovieRating} />
    );
  }
}

export default MovieRatingContainer;
