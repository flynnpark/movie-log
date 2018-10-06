import React, { Component } from 'react';
import MovieCardListPresenter from './MovieCardListPresenter';

interface IProps {
  title?: string;
  movieList?: [];
}

class MovieCardListContainer extends Component<IProps, any> {
  public render() {
    return <MovieCardListPresenter {...this.props} />;
  }
}

export default MovieCardListContainer;
