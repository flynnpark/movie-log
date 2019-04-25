import React, { Component } from 'react';
import moment from 'moment-timezone';
import { getMovieRatings_GetMovieRatings_movieRatings } from 'types/api';
import MovieRatingPresenter from './MovieRatingPresenter';

interface IProps {
  movieRating?: getMovieRatings_GetMovieRatings_movieRatings;
  handleMovieRatingApply?: (rating: number, watchDate: string) => void;
  handleMovieRatingRemove?: (id: number) => void;
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

  public setMovieRating = async (): Promise<void> => {
    const { rating, watchDate } = this.state;
    const { handleMovieRatingApply } = this.props;
    if (handleMovieRatingApply) {
      await handleMovieRatingApply(rating, watchDate);
    }
    this.setState({
      rating: 0,
      watchDate: new Date().toString()
    });
  };

  public removeMovieRating = async (): Promise<void> => {
    const { movieRating, handleMovieRatingRemove } = this.props;
    if (movieRating && handleMovieRatingRemove) {
      const { id } = movieRating;
      await handleMovieRatingRemove(id);
    }
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
          removeMovieRating={this.removeMovieRating}
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
        setMovieRating={this.setMovieRating}
      />
    );
  }
}

export default MovieRatingContainer;
