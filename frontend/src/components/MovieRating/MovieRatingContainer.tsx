import React, { Component } from 'react';
import MovieRatingPresenter from './MovieRatingPresenter';
import { MutationFn } from 'react-apollo';

interface IProps {
  handleRatingClick: MutationFn;
}

class MovieRatingContainer extends Component<IProps> {
  public render() {
    const { handleRatingClick } = this.props;
    return <MovieRatingPresenter handleRatingClick={handleRatingClick} />;
  }
}

export default MovieRatingContainer;
