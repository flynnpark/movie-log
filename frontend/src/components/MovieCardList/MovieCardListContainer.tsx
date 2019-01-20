import React, { Component } from 'react';
import MovieCardListPresenter from './MovieCardListPresenter';
import { MovieItem, findMovie_FindMovie } from 'src/types/local';

interface IProps {
  title?: string;
  movieList: Array<MovieItem | findMovie_FindMovie | null> | null;
}

class MovieCardListContainer extends Component<IProps, any> {
  public render() {
    const { title, movieList } = this.props;
    return (
      movieList && <MovieCardListPresenter title={title} {...this.props} />
    );
  }
}

export default MovieCardListContainer;
