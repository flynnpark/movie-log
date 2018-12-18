import React, { Component } from 'react';
import moment from 'moment-timezone';
import MovieRatingPresenter from './MovieRatingPresenter';
import { getMovieDetail_GetMovieRatings_movieRatings } from 'src/types/api';

interface IProps {
  movieRating?: getMovieDetail_GetMovieRatings_movieRatings;
  handleClickMovieRating: (rating: number) => void;
}

interface IState {
  rating: number;
  watchDate: string;
}

class MovieRatingContainer extends Component<IProps, IState> {
  public state = {
    rating: 0,
    watchDate: new Date().toString()
  };

  public setRatingState = async (rating: number): Promise<void> => {
    await this.setState({
      rating
    });
  };

  public setWatchDateState = async (
    date: moment.Moment,
    dateString: string
  ): Promise<void> => {
    await this.setState({
      watchDate: date.toDate().toString()
    });
  };

  public render() {
    const { movieRating } = this.props;
    if (movieRating) {
      const {
        rating: databaseRating,
        watchDate: databaseWatchDate
      } = movieRating;
      return (
        <MovieRatingPresenter
          rating={databaseRating}
          watchDate={databaseWatchDate}
        />
      );
    }
    const { rating, watchDate } = this.state;
    return (
      // 점수 등록
      <MovieRatingPresenter
        rating={rating}
        watchDate={watchDate}
        handleClickRating={this.setRatingState}
        handleClickWatchDate={this.setWatchDateState}
      />
    );
  }
}

export default MovieRatingContainer;
