import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Query } from 'react-apollo';
import { findMovie } from 'src/types/api';
import SearchPresenter from './SearchPresenter';
import { FIND_MOVIE } from './SearchQueries';
import Loading from 'src/components/Loading';

class FindMovieQueries extends Query<findMovie> {}

interface IProps extends RouteComponentProps<any> {}

class SearchContainer extends Component<IProps> {
  public render() {
    const {
      match: {
        params: { query }
      }
    } = this.props;
    return (
      <FindMovieQueries query={FIND_MOVIE} variables={{ query }}>
        {({ data, loading }) => (
          <>
            {loading ? (
              <Loading />
            ) : (
              <SearchPresenter query={query} data={data} />
            )}
          </>
        )}
      </FindMovieQueries>
    );
  }
}

export default SearchContainer;
