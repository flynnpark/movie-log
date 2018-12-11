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

interface IParams {
  movieId: string;
}

interface IProps extends RouteComponentProps<IParams> {
  setMovieRating?: MutationFn | null;
}

class MovieDetailQueries extends Query<getMovieDetail> {}

class MovieRatingMutation extends Mutation<
  setMovieRating,
  setMovieRatingVariables
> {}

export class MovieContainer extends Component<IProps> {
  private setMovieRatingFn: MutationFn;

  constructor(props: IProps) {
    super(props);
  }

  public handleClickMovieRating = (rating: number) => {
    const { match } = this.props;
    if (match) {
      const {
        params: { movieId }
      } = match;
      this.setMovieRatingFn({
        variables: { movieId, rating },
        update: (store, { data: { SetMovieRating } }) => {
          const data = store.readQuery({
            query: GET_MOVIE_DETAIL,
            variables: { movieId }
          });
          const newData = {
            ...data,
            GetMovieRating: SetMovieRating
          };
          store.writeQuery({
            query: GET_MOVIE_DETAIL,
            variables: { movieId },
            data: newData
          });
        }
      });
    }
  };

  public render() {
    const { match } = this.props;
    if (match) {
      const {
        params: { movieId }
      } = match;
      return (
        <MovieDetailQueries query={GET_MOVIE_DETAIL} variables={{ movieId }}>
          {({ data, loading }) =>
            loading ? (
              <Loading />
            ) : (
              <MovieRatingMutation mutation={SET_MOVIE_RATING}>
                {setMovieRatingFn => {
                  this.setMovieRatingFn = setMovieRatingFn;
                  return (
                    <MoviePresenter
                      data={data}
                      handleClickMovieRating={this.handleClickMovieRating}
                    />
                  );
                }}
              </MovieRatingMutation>
            )
          }
        </MovieDetailQueries>
      );
    }
    return null;
  }
}

export default MovieContainer;
