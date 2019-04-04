import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import QueueAnim from 'rc-queue-anim';
import { getHomeData } from 'src/types/local';
import MovieCardList from 'src/components/MovieCardList';

const MovieListTitle = styled.h1`
  font-size: 32px;
  margin-bottom: 25px;
`;

interface IProps {
  loading: boolean;
  data: getHomeData | undefined;
}

const HomePresenter: React.FunctionComponent<IProps> = ({ loading, data }) => {
  if (data) {
    const { GetNowPlaying, GetPopular, GetTopRated } = data;
    const nowPlayingList = GetNowPlaying && GetNowPlaying.slice(0, 12);
    const popularList = GetPopular && GetPopular.slice(0, 12);
    const topRatedList = GetTopRated && GetTopRated.slice(0, 12);
    return (
      <QueueAnim type={['right', 'left']}>
        <Helmet>
          <title>Home | Movie-log</title>
        </Helmet>
        <MovieCardList
          key="nowPlaying"
          loading={loading}
          title={<MovieListTitle>현재 상영</MovieListTitle>}
          movieList={nowPlayingList}
        />
        <MovieCardList
          key="popular"
          loading={loading}
          title={<MovieListTitle>인기작</MovieListTitle>}
          movieList={popularList}
        />
        <MovieCardList
          key="topRated"
          loading={loading}
          title={<MovieListTitle>최고 순위</MovieListTitle>}
          movieList={topRatedList}
        />
      </QueueAnim>
    );
  }
  return null;
};

export default HomePresenter;
