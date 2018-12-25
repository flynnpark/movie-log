import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Query, Mutation, MutationFn } from 'react-apollo';
import {
  getMovieDetail,
  setMovieRating,
  setMovieRatingVariables,
  removeMovieRating,
  removeMovieRatingVariables
} from 'src/types/api';
import MoviePresenter from './MoviePresenter';
import {
  GET_MOVIE_DETAIL,
  SET_MOVIE_RATING,
  REMOVE_MOVIE_RATING
} from './MovieQueries';
import Loading from 'src/components/Loading';

interface IParams {
  movieId: string;
}

interface IProps extends RouteComponentProps<IParams> {
  setMovieRating: MutationFn | null;
  removeMovieRating: MutationFn | null;
}

class MovieDetailQueries extends Query<getMovieDetail> {}

class SetMovieRatingMutation extends Mutation<
  setMovieRating,
  setMovieRatingVariables
> {}

class RemoveMovieRatingMutation extends Mutation<
  removeMovieRating,
  removeMovieRatingVariables
> {}

export class MovieContainer extends Component<IProps> {
  private setMovieRatingFn: MutationFn;
  private removeMovieRatingFn: MutationFn;

  constructor(props: IProps) {
    super(props);
  }

  public handleMovieRatingApply = (rating: number, watchDate: string): void => {
    const { match } = this.props;
    if (match) {
      const {
        params: { movieId }
      } = match;
      this.setMovieRatingFn({
        variables: { movieId, rating, watchDate },
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

  public handleMovieRatingRemove = (id: number): void => {
    const { match } = this.props;
    if (match) {
      const {
        params: { movieId }
      } = match;
      this.removeMovieRatingFn({
        variables: { id },
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
              <SetMovieRatingMutation mutation={SET_MOVIE_RATING}>
                {setMovieRatingFn => {
                  this.setMovieRatingFn = setMovieRatingFn;
                  return (
                    <RemoveMovieRatingMutation mutation={REMOVE_MOVIE_RATING}>
                      {removeMovieRatingFn => {
                        this.removeMovieRatingFn = removeMovieRatingFn;
                        return (
                          data && (
                            <MoviePresenter
                              data={data}
                              handleMovieRatingApply={
                                this.handleMovieRatingApply
                              }
                              handleMovieRatingRemove={
                                this.handleMovieRatingRemove
                              }
                            />
                          )
                        );
                      }}
                    </RemoveMovieRatingMutation>
                  );
                }}
              </SetMovieRatingMutation>
            )
          }
        </MovieDetailQueries>
      );
    }
    return null;
  }
}

export default MovieContainer;
