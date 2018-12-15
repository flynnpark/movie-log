import React, { Component } from 'react';
import MovieRatingPresenter from './MovieRatingPresenter';
import { getMovieDetail_GetMovieRatings_movieRatings } from 'src/types/api';

interface IProps {
  movieRating?: getMovieDetail_GetMovieRatings_movieRatings;
  handleClickMovieRating: (rating: number) => void;
}

class MovieRatingContainer extends Component<IProps> {
  /**
   * 별 버튼 클릭시 컴포넌트 자체 rating 숫자만 변경되어야 함
   * 별점과 날짜 정한 후 Check 버튼을 누를 경우에 저장하도록 수정해야 함
   */
  public render() {
    const { movieRating, handleClickMovieRating } = this.props;
    if (movieRating) {
      return (
        <MovieRatingPresenter
          movieRating={movieRating}
          handleClickMovieRating={handleClickMovieRating}
        />
      );
    }
    return (
      // 점수 등록
      <MovieRatingPresenter handleClickMovieRating={handleClickMovieRating} />
    );
  }
}

export default MovieRatingContainer;
