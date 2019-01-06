import React from 'react';
import Helmet from 'react-helmet';
import MovieCardList from 'src/components/MovieCardList';
import { getHomeData } from 'src/types/local';

interface IProps {
  data: getHomeData | undefined;
}

const HomePresenter: React.FunctionComponent<IProps> = ({ data }) => {
  if (data) {
    const { GetNowPlaying, GetPopular, GetTopRated } = data;
    const nowPlayingList = GetNowPlaying && GetNowPlaying.slice(0, 12);
    const popularList = GetPopular && GetPopular.slice(0, 12);
    const topRatedList = GetTopRated && GetTopRated.slice(0, 12);
    return (
      <>
        <Helmet>
          <title>Home | Movie-log</title>
        </Helmet>
        {nowPlayingList && (
          <MovieCardList title="현재 상영작" movieList={nowPlayingList} />
        )}
        {popularList && (
          <MovieCardList title="인기작" movieList={popularList} />
        )}
        {topRatedList && (
          <MovieCardList title="최고 순위" movieList={topRatedList} />
        )}
      </>
    );
  }
  return null;
};

export default HomePresenter;
