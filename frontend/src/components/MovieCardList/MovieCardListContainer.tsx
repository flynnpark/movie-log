import React, { Component } from 'react';
import MovieCardListPresenter from './MovieCardListPresenter';

interface IMovieCardListProps {
  title?: string;
  movieList?: [];
}

class MovieCardListContainer extends Component<IMovieCardListProps, any> {
  public render() {
    return <MovieCardListPresenter {...this.props} />;
  }
}

export default MovieCardListContainer;
