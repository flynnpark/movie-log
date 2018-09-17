import React, { Component } from 'react';
import MovieCardListPresenter from './MovieCardListPresenter';

interface IMovieCardListProps {
  withTitle?: boolean;
}

class MovieCardListContainer extends Component<IMovieCardListProps, any> {
  public render() {
    const { withTitle } = this.props;
    return <MovieCardListPresenter withTitle={withTitle} />;
  }
}

export default MovieCardListContainer;
