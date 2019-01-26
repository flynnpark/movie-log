import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { getHomeData } from 'src/types/local';
import HomePresenter from './HomePresenter';
import { GET_HOME_DATA } from './HomeQueries.local';

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
