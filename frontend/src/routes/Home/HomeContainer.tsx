import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { getHomeData } from 'types/local';
import { GET_HOME_DATA } from './HomeQueries.local';
import HomePresenter from './HomePresenter';

class NowPlayingQueries extends Query<getHomeData> {}

class HomeContainer extends Component {
  public render() {
    return (
      <NowPlayingQueries query={GET_HOME_DATA}>
        {({ data, loading }) => <HomePresenter loading={loading} data={data} />}
      </NowPlayingQueries>
    );
  }
}

export default HomeContainer;
