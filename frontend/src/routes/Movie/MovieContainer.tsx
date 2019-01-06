import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Query, Mutation, MutationFn } from 'react-apollo';
import {
  setMovieRating,
  setMovieRatingVariables,
  removeMovieRating,
  removeMovieRatingVariables,
  getMovieRatings,
  getMovieRatings_GetMovieRatings_movieRatings
} from 'src/types/api';
import MoviePresenter from './MoviePresenter';
import { GET_MOVIE_DETAIL } from './MovieQueries.local';
import {
  GET_MOVIE_RATINGS,
  SET_MOVIE_RATING,
  REMOVE_MOVIE_RATING
} from './MovieQueries';
import Loading from 'src/components/Loading';
import { getMovieDetail } from 'src/types/local';

interface IParams {
  movieId: string;
}

interface IProps extends RouteComponentProps<IParams> {
  setMovieRating: MutationFn | null;
  removeMovieRating: MutationFn | null;
}

class MovieDetailQueries extends Query<getMovieDetail> {}

class MovieRatingsQueries extends Query<getMovieRatings> {}

class SetMovieRatingMutation extends Mutation<
  setMovieRating,
  setMovieRatingVariables
> {}

class RemoveMovieRatingMutation extends Mutation<
  removeMovieRating,
  removeMovieRatingVariables
> {}

class MovieContainer extends Component<IProps> {
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
          const prevData: getMovieRatings | null = store.readQuery({
            query: GET_MOVIE_RATINGS,
            variables: { movieId }
          });
          if (
            prevData &&
            prevData.GetMovieRatings &&
            prevData.GetMovieRatings.movieRatings
          ) {
            const newData = {
              ...prevData,
              GetMovieRatings: {
                ...prevData.GetMovieRatings,
                movieRatings: [
                  SetMovieRating.movieRating,
                  ...prevData.GetMovieRatings.movieRatings
                ]
              }
            };
            store.writeQuery({
              query: GET_MOVIE_RATINGS,
              variables: { movieId },
              data: newData
            });
          }
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
        update: (store, { data: { RemoveMovieRating } }) => {
          const prevData: getMovieRatings | null = store.readQuery({
            query: GET_MOVIE_DETAIL,
            variables: { movieId }
          });
          if (
            prevData &&
            prevData.GetMovieRatings &&
            prevData.GetMovieRatings.movieRatings
          ) {
            const newData = {
              ...prevData,
              GetMovieRatings: {
                ...prevData.GetMovieRatings,
                movieRatings: prevData.GetMovieRatings.movieRatings.filter(
                  (movieRating: getMovieRatings_GetMovieRatings_movieRatings) =>
                    movieRating.id !== RemoveMovieRating.movieRating.id
                )
              }
            };
            store.writeQuery({
              query: GET_MOVIE_DETAIL,
              variables: { movieId },
              data: newData
            });
          }
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
          {({ data: movieData, loading: movieLoading }) => (
            <MovieRatingsQueries
              query={GET_MOVIE_RATINGS}
              variables={{ movieId }}
            >
              {({ data: ratingData, loading: ratingLoading }) =>
                movieLoading || ratingLoading ? (
                  <Loading />
                ) : (
                  <SetMovieRatingMutation mutation={SET_MOVIE_RATING}>
                    {setMovieRatingFn => {
                      this.setMovieRatingFn = setMovieRatingFn;
                      return (
                        <RemoveMovieRatingMutation
                          mutation={REMOVE_MOVIE_RATING}
                        >
                          {removeMovieRatingFn => {
                            this.removeMovieRatingFn = removeMovieRatingFn;
                            return (
                              movieData && (
                                <MoviePresenter
                                  movieData={movieData}
                                  ratingData={ratingData}
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
            </MovieRatingsQueries>
          )}
        </MovieDetailQueries>
      );
    }
    return null;
  }
}

export default MovieContainer;
