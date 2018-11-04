import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Query, Mutation, MutationFn } from 'react-apollo';
import {
  getMovieDetail,
  setMovieRating,
  setMovieRatingVariables,
  getMovieRating
} from 'src/types/api';
import MoviePresenter from './MoviePresenter';
import {
  GET_MOVIE_DETAIL,
  SET_MOVIE_RATING,
  GET_MOVIE_RATING
} from './MovieQueries';
import Loading from 'src/components/Loading';

interface IState {
  rating: number;
}

interface IProps extends RouteComponentProps<any> {
  setMovieRating?: MutationFn | null;
}

class MovieDetailQueries extends Query<getMovieDetail> {}

class MovieRatingQueries extends Query<getMovieRating> {}

class MovieRatingMutation extends Mutation<
  setMovieRating,
  setMovieRatingVariables
> {}

export class MovieContainer extends Component<IProps, IState> {
  private setMovieRating;

  constructor(props: IProps) {
    super(props);
    this.state = {
      rating: 0
    };
  }

  public handleClickMovieRating = (rating: number) => {
    const {
      match: {
        params: { movieId }
      }
    } = this.props;
    this.setMovieRating({ variables: { movieId, rating } });
  };

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
                this.setMovieRating = setMovieRatingFn;
                return (
                  <MovieRatingQueries
                    query={GET_MOVIE_RATING}
                    variables={{ movieId }}
                  >
                    {({ data: movieRating }) => (
                      <MoviePresenter
                        data={data}
                        movieRating={movieRating}
                        handleClickMovieRating={this.handleClickMovieRating}
                      />
                    )}
                  </MovieRatingQueries>
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
