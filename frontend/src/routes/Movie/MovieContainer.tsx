import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Query } from 'react-apollo';
import { getMovieDetail } from 'src/types/api';
import MoviePresenter from './MoviePresenter';
import { GET_MOVIE_DETAIL } from './MovieQueries';
import Loading from 'src/components/Loading';

interface IProps extends RouteComponentProps<any> {}

class MovieDetailQueries extends Query<getMovieDetail> {}

export class MovieContainer extends Component<IProps, any> {
  public render() {
    const {
      match: {
        params: { movieId }
      }
    } = this.props;
    return (
      <MovieDetailQueries query={GET_MOVIE_DETAIL} variables={{ movieId }}>
        {({ data, loading }) => (
          <>{loading ? <Loading /> : <MoviePresenter data={data} />}</>
        )}
      </MovieDetailQueries>
    );
  }
}

export default MovieContainer;
