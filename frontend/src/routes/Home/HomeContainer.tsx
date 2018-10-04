import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { getHomeData } from 'src/types/api';
import HomePresenter from './HomePresenter';
import { GET_HOME_DATA } from './HomeQueries';
import Loading from 'src/components/Loading';

class NowPlayingQueries extends Query<getHomeData> {}

class HomeContainer extends Component {
  public render() {
    return (
      <NowPlayingQueries query={GET_HOME_DATA}>
        {({ data, loading }) => (
          <React.Fragment>
            {loading ? <Loading /> : <HomePresenter data={data} />}
          </React.Fragment>
        )}
      </NowPlayingQueries>
    );
  }
}

export default HomeContainer;
