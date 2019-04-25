import React, { Component } from 'react';
import { MovieItem } from 'types/local';
import MovieCardListPresenter from './MovieCardListPresenter';

interface IProps {
  loading: boolean;
  size?: 'mini' | 'normal';
  title?: React.ReactNode;
  movieList: MovieItem[];
}

class MovieCardListContainer extends Component<IProps, any> {
  public render() {
    const { loading, size, title, movieList } = this.props;
    return (
      <MovieCardListPresenter
        title={title}
        size={size}
        loading={loading}
        movieList={movieList}
      />
    );
  }
}

export default MovieCardListContainer;
