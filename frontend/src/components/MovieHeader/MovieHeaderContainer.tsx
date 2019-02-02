import React, { Component } from 'react';
import MovieHeaderPresenter from './MovieHeaderPresenter';
import { getMovieDetail_GetMovieDetail_movie } from 'src/types/local';
import { getMovieRatings } from 'src/types/api';

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
