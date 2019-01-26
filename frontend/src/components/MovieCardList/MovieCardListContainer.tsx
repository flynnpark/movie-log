import React, { Component } from 'react';
import { MovieItem } from 'src/types/local';
import MovieCardListPresenter from './MovieCardListPresenter';

interface IProps {
  loading: boolean;
  title?: React.ReactNode;
  movieList: MovieItem[] | null;
}

class MovieCardListContainer extends Component<IProps, any> {
  public render() {
    const { loading, title, movieList } = this.props;
    return (
      <MovieCardListPresenter
        title={title}
        loading={loading}
        movieList={movieList}
      />
    );
  }
}

export default MovieCardListContainer;
