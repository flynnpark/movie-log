import React, { Component } from 'react';
import MovieCardListPresenter from './MovieCardListPresenter';
import {
  getHomeData_GetNowPlaying,
  getHomeData_GetPopular,
  getHomeData_GetTopRated,
  findMovie_FindMovie
} from 'src/types/local';

interface IProps {
  title?: string;
  movieList: Array<
    | getHomeData_GetNowPlaying
    | getHomeData_GetPopular
    | getHomeData_GetTopRated
    | findMovie_FindMovie
    | null
  > | null;
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
