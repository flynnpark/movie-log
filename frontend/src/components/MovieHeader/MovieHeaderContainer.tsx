import React, { Component } from 'react';
import MovieHeaderPresenter from './MovieHeaderPresenter';
import { getMovieDetail_GetMovieDetail_movie } from 'src/types/local';

class MovieHeaderContainer extends Component<
  getMovieDetail_GetMovieDetail_movie,
  any
> {
  public render() {
    console.log(this.props);
    return <MovieHeaderPresenter />;
  }
}

export default MovieHeaderContainer;
