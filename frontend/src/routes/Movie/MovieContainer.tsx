import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Query, Mutation } from 'react-apollo';
import {
  getMovieDetail,
  setMovieRating,
  setMovieRatingVariables
} from 'src/types/api';
import MoviePresenter from './MoviePresenter';
import { GET_MOVIE_DETAIL, SET_MOVIE_RATING } from './MovieQueries';
import Loading from 'src/components/Loading';

interface IState {
  rating: number;
}

interface IProps extends RouteComponentProps<any> {}

class MovieDetailQueries extends Query<getMovieDetail> {}

class MovieRatingMutation extends Mutation<
  setMovieRating,
  setMovieRatingVariables
> {}

export class MovieContainer extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      rating: 0
    };
  }

  public render() {
    const { rating } = this.state;
    const {
      match: {
        params: { movieId }
      }
    } = this.props;
    return (
      <MovieDetailQueries query={GET_MOVIE_DETAIL} variables={{ movieId }}>
        {({ data, loading }) => (
          <MovieRatingMutation
            mutation={SET_MOVIE_RATING}
            variables={{ movieId, rating }}
          >
            {(mutation, { data, loading }) => {
              return (
                <>{loading ? <Loading /> : <MoviePresenter data={data} />}</>
              );
            }}
          </MovieRatingMutation>
        )}
      </MovieDetailQueries>
    );
  }
}

export default MovieContainer;
