import React, { Component } from 'react';
import MovieCardListPresenter from './MovieCardListPresenter';
import { MovieItem } from 'src/types/local';

interface IProps {
  title?: React.ReactNode;
  movieList: MovieItem[] | null;
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
