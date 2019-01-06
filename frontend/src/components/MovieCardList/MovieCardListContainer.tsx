import React, { Component } from 'react';
import MovieCardListPresenter from './MovieCardListPresenter';
import {
  getHomeData_GetNowPlaying,
  getHomeData_GetPopular,
  getHomeData_GetTopRated
} from 'src/types/local';

interface IProps {
  title?: string;
  movieList?: Array<
    | getHomeData_GetNowPlaying
    | getHomeData_GetPopular
    | getHomeData_GetTopRated
    | null
  >;
}

class MovieCardListContainer extends Component<IProps, any> {
  public render() {
    const { movieList } = this.props;
    return movieList && <MovieCardListPresenter {...this.props} />;
  }
}

export default MovieCardListContainer;
