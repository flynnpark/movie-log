import React, { Component } from 'react';
import MovieCardPresenter from './MovieCardPresenter';

interface IMovieCardProps {
  poster: string;
}

class MovieCardContainer extends Component<IMovieCardProps, any> {
  public render() {
    return <MovieCardPresenter />;
  }
}

export default MovieCardContainer;
