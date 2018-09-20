import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { getNowPlaying } from 'src/types/api';
import HomePresenter from './HomePresenter';
import { GET_NOW_PLAYING } from './HomeQueries';

class NowPlayingQueries extends Query<getNowPlaying> {}

class HomeContainer extends Component {
  public handleNowPlayingRequest = (data: getNowPlaying) => {
    console.log(data);
    const { GetNowPlaying } = data;
    if (GetNowPlaying.ok) {
      const { movies } = GetNowPlaying;
      this.setState({
        nowPlayingMovies: movies
      });
    }
  };

  public render() {
    return (
      <NowPlayingQueries
        query={GET_NOW_PLAYING}
        onCompleted={this.handleNowPlayingRequest}
      >
        {data => <HomePresenter />}
      </NowPlayingQueries>
    );
  }
}

export default HomeContainer;
