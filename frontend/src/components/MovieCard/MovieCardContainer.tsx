import React, { Component } from 'react';
import MovieCardPresenter from './MovieCardPresenter';

interface IMovieCardProps {
  poster_path: string;
  title: string;
}

class MovieCardContainer extends Component<IMovieCardProps, any> {
  public render() {
    const { poster_path, title } = this.props;
    return <MovieCardPresenter poster={poster_path} title={title} />;
  }
}

export default MovieCardContainer;
