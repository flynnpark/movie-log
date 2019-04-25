import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Query, Mutation, MutationFn } from 'react-apollo';
import { OperationVariables, ApolloQueryResult } from 'apollo-boost';
import Helmet from 'react-helmet';
import { Alert } from 'antd';
import {
  setMovieRating,
  setMovieRatingVariables,
  removeMovieRating,
  removeMovieRatingVariables,
  getMovieRatings
} from 'types/api';
import { getMovieDetail, getRelatedMovies } from 'types/local';
import Loading from 'components/Loading';
import { GET_MOVIE_DETAIL, GET_RELATED_MOVIES } from './MovieQueries.local';
import {
  GET_MOVIE_RATINGS,
  SET_MOVIE_RATING,
  REMOVE_MOVIE_RATING
} from './MovieQueries';
import MoviePresenter from './MoviePresenter';

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
    if (match.params.movieId) {
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
    return (
      <>
        <Helmet>
          <title>정보가 존재하지 않습니다. | Movie-log</title>
        </Helmet>
        <Alert
          message="Error"
          description="영화 정보를 가져올 수 없습니다."
          type="error"
          showIcon={true}
        />
      </>
    );
  }
}

export default MovieContainer;
