import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Query } from 'react-apollo';
import { findMovie } from 'src/types/local';
import SearchPresenter from './SearchPresenter';
import { FIND_MOVIE } from './SearchQueries.local';

class FindMovieQueries extends Query<findMovie> {}

interface IParams {
  query: string;
}

interface IProps extends RouteComponentProps<IParams> {}

class SearchContainer extends Component<IProps> {
  public render() {
    const { match } = this.props;
    if (match) {
      const {
        params: { query }
      } = match;
      return (
        <FindMovieQueries query={FIND_MOVIE} variables={{ query }}>
          {({ data, loading }) => (
            <SearchPresenter loading={loading} query={query} data={data} />
          )}
        </FindMovieQueries>
      );
    }
    return null;
  }
}

export default SearchContainer;
