import React, { Component } from 'react';
import MovieCardPresenter from './MovieCardPresenter';

interface IProps {
  id: number;
  poster_path: string;
  title: string;
  release_date: string;
}

class MovieCardContainer extends Component<IProps, any> {
  public render() {
    const { id, poster_path, title, release_date } = this.props;
    return (
      <MovieCardPresenter
        id={id}
        poster={poster_path}
        title={title}
        releaseYear={this.getReleasedYear(release_date)}
      />
    );
  }

  private getReleasedYear = (releaseDateStr: string) => {
    const releaseDate = new Date(releaseDateStr);
    return releaseDate.getFullYear();
  };
}

export default MovieCardContainer;
