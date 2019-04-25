import React, { Component } from 'react';
import { getMovieRatings } from 'types/api';
import { getMovieDetail_GetMovieDetail_movie } from 'types/local';
import MovieHeaderPresenter from './MovieHeaderPresenter';

interface IProps {
  movie: getMovieDetail_GetMovieDetail_movie;
  ratingData: getMovieRatings | undefined;
  handleMovieRatingApply: (rating: number, watchDate: string) => void;
  handleMovieRatingRemove: (id: number) => void;
}

class MovieHeaderContainer extends Component<IProps, any> {
  public render() {
    const {
      movie,
      ratingData,
      handleMovieRatingApply,
      handleMovieRatingRemove
    } = this.props;
    return (
      <MovieHeaderPresenter
        movie={movie}
        ratingData={ratingData}
        handleMovieRatingApply={handleMovieRatingApply}
        handleMovieRatingRemove={handleMovieRatingRemove}
      />
    );
  }
}

export default MovieHeaderContainer;
