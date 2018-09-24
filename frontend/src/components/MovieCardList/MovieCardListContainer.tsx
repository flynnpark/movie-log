import React, { Component } from 'react';
import MovieCardListPresenter from './MovieCardListPresenter';

interface IMovieCardListProps {
  withTitle?: boolean;
  movieList?: [];
}

class MovieCardListContainer extends Component<IMovieCardListProps, any> {
  public render() {
    const { withTitle, movieList } = this.props;
    return (
      <MovieCardListPresenter withTitle={withTitle} movieList={movieList} />
    );
  }
}

export default MovieCardListContainer;
