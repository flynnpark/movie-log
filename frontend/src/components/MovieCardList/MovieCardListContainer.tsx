import React, { Component } from 'react';
import MovieCardListPresenter from './MovieCardListPresenter';

interface IMovieCardListProps {
  title?: string;
  movieList?: [];
}

class MovieCardListContainer extends Component<IMovieCardListProps, any> {
  public render() {
    const { title, movieList } = this.props;
    return <MovieCardListPresenter title={title} movieList={movieList} />;
  }
}

export default MovieCardListContainer;
