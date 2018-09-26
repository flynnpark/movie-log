import React, { Component } from 'react';
import MovieCardPresenter from './MovieCardPresenter';

interface IMovieCardProps {
  poster: string;
  title: string;
}

class MovieCardContainer extends Component<IMovieCardProps, any> {
  public render() {
    const { poster, title } = this.props;
    return <MovieCardPresenter poster={poster} title={title} />;
  }
}

export default MovieCardContainer;
