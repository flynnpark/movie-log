import React, { Component } from 'react';
import MovieRatingPresenter from './MovieRatingPresenter';

interface IProps {
  movieRatingData: {
    GetMovieRating: {
      movieRating: { rating: number } | null;
    };
  };
  handleClickMovieRating: (rating: number) => void;
}

class MovieRatingContainer extends Component<IProps> {
  public getRating = () => {
    const { movieRatingData } = this.props;
    if (movieRatingData === null || movieRatingData === undefined) {
      return 0;
    } else if (
      movieRatingData.GetMovieRating === null ||
      movieRatingData.GetMovieRating === undefined
    ) {
      return 0;
    } else if (movieRatingData.GetMovieRating.movieRating === null) {
      return 0;
    }
    return movieRatingData.GetMovieRating.movieRating.rating;
  };

  public render() {
    const { handleClickMovieRating } = this.props;
    return (
      <MovieRatingPresenter
        rating={this.getRating()}
        handleClickMovieRating={handleClickMovieRating}
      />
    );
  }
}

export default MovieRatingContainer;
