import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { Spin } from 'antd';
import { getHomeData } from 'src/types/api';
import HomePresenter from './HomePresenter';
import { GET_HOME_DATA } from './HomeQueries';

class NowPlayingQueries extends Query<getHomeData> {}

class HomeContainer extends Component {
  public handleNowPlayingRequest = (data: getHomeData) => {
    const { GetNowPlaying, GetPopular, GetTopRated } = data;
    if (GetNowPlaying) {
      console.log(GetNowPlaying);
    }
    if (GetPopular) {
      console.log(GetPopular);
    }
    if (GetTopRated) {
      console.log(GetTopRated);
    }
  };

  public render() {
    return (
      <NowPlayingQueries
        query={GET_HOME_DATA}
        onCompleted={this.handleNowPlayingRequest}
      >
        {({ data, loading }) => (
          <React.Fragment>
            {loading ? <Spin size="large" /> : <HomePresenter data={data} />}
          </React.Fragment>
        )}
      </NowPlayingQueries>
    );
  }
}

export default HomeContainer;
