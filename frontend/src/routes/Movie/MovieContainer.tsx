import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Query, Mutation, MutationFn } from 'react-apollo';
import { OperationVariables, ApolloQueryResult } from 'apollo-boost';
import {
  setMovieRating,
  setMovieRatingVariables,
  removeMovieRating,
  removeMovieRatingVariables,
  getMovieRatings
} from 'src/types/api';
import MoviePresenter from './MoviePresenter';
import { GET_MOVIE_DETAIL, GET_RELATED_MOVIES } from './MovieQueries.local';
import {
  GET_MOVIE_RATINGS,
  SET_MOVIE_RATING,
  REMOVE_MOVIE_RATING
} from './MovieQueries';
import Loading from 'src/components/Loading';
import { getMovieDetail, getRelatedMovies } from 'src/types/local';

interface IParams {
  movieId: string;
}

interface IProps extends RouteComponentProps<IParams> {
  setMovieRating: MutationFn | null;
  removeMovieRating: MutationFn | null;
}

class MovieDetailQueries extends Query<getMovieDetail> {}

class MovieRatingsQueries extends Query<getMovieRatings> {}

class RelatedMoviesQueries extends Query<getRelatedMovies> {}

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
  private refetchMovieRatings: (
    variables?: OperationVariables | undefined
  ) => Promise<ApolloQueryResult<getMovieRatings>>;

  constructor(props: IProps) {
    super(props);
  }

  public handleMovieRatingApply = async (
    rating: number,
    watchDate: string
  ): Promise<void> => {
    const { match } = this.props;
    if (match) {
      const {
        params: { movieId }
      } = match;
      await this.setMovieRatingFn({
        variables: { movieId: Number(movieId), rating, watchDate }
      });
      if (this.refetchMovieRatings) {
        await this.refetchMovieRatings();
      }
    }
  };

  public handleMovieRatingRemove = async (id: number): Promise<void> => {
    await this.removeMovieRatingFn({ variables: { id } });
    if (this.refetchMovieRatings) {
      await this.refetchMovieRatings();
    }
  };

  public render() {
    const { match } = this.props;
    if (match) {
      const {
        params: { movieId }
      } = match;
      return (
        <MovieDetailQueries
          query={GET_MOVIE_DETAIL}
          variables={{ movieId: Number(movieId) }}
        >
          {({ data: movieData, loading: movieLoading }) => (
            <MovieRatingsQueries
              query={GET_MOVIE_RATINGS}
              variables={{ movieId: Number(movieId) }}
            >
              {({
                data: ratingData,
                loading: ratingLoading,
                refetch: refetchMovieRatings
              }) => {
                this.refetchMovieRatings = refetchMovieRatings;
                return (
                  <>
                    {movieLoading || ratingLoading ? (
                      <Loading />
                    ) : (
                      <RelatedMoviesQueries
                        query={GET_RELATED_MOVIES}
                        variables={{ movieId: Number(movieId) }}
                      >
                        {({
                          data: relatedMoviesData,
                          loading: relatedMoviesLoading
                        }) => (
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
                                          relatedMoviesLoading={
                                            relatedMoviesLoading
                                          }
                                          relatedMoviesData={relatedMoviesData}
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
                        )}
                      </RelatedMoviesQueries>
                    )}
                  </>
                );
              }}
            </MovieRatingsQueries>
          )}
        </MovieDetailQueries>
      );
    }
    return null;
  }
}

export default MovieContainer;
