import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Query, Mutation, MutationFn } from 'react-apollo';
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

interface IProps extends RouteComponentProps<any> {
  setMovieRating?: MutationFn | null;
}

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
    const {
      match: {
        params: { movieId }
      }
    } = this.props;
    return (
      <MovieDetailQueries query={GET_MOVIE_DETAIL} variables={{ movieId }}>
        {({ data, loading }) =>
          loading ? (
            <Loading />
          ) : (
            <MovieRatingMutation mutation={SET_MOVIE_RATING}>
              {setMovieRatingFn => {
                return (
                  <MoviePresenter
                    data={data}
                    handleRatingClick={setMovieRatingFn}
                  />
                );
              }}
            </MovieRatingMutation>
          )
        }
      </MovieDetailQueries>
    );
  }
}

export default MovieContainer;
