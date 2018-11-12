import React, { Component } from "react";
import MovieRatingPresenter from "./MovieRatingPresenter";

interface IProps {
  rating: number;
  handleClickMovieRating: (rating: number) => void;
}

interface IState {
  rating: number;
}

class MovieRatingContainer extends Component<IProps, IState> {
  public updateTimeout: any;

  constructor(props) {
    super(props);

    this.state = {
      rating: 0
    };
  }

  public componentDidMount() {
    this.getRating();
  }

  public render() {
    const { rating } = this.state;
    return <MovieRatingPresenter rating={rating} handleChangeRating={this.handleChangeRating} />;
  }

  public getRating = () => {
    const { rating } = this.props;

    if (rating === null) {
      this.setState({ rating: 0 });
    } else {
      this.setState({ rating });
    }
  };

  public handleChangeRating = (rating: number) => {
    clearTimeout(this.updateTimeout);
    const { handleClickMovieRating } = this.props;
    this.setState({ rating });

    this.updateTimeout = setTimeout(() => handleClickMovieRating(rating), 1500);
  };
}

export default MovieRatingContainer;
