import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import MovieCardList from 'src/components/MovieCardList';
import { getHomeData } from 'src/types/local';

const MovieListTitle = styled.h1`
  font-size: 32px;
  margin-bottom: 25px;
`;

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
          <MovieCardList
            title={<MovieListTitle>현재 상영</MovieListTitle>}
            movieList={nowPlayingList}
          />
        )}
        {popularList && (
          <MovieCardList
            title={<MovieListTitle>인기작</MovieListTitle>}
            movieList={popularList}
          />
        )}
        {topRatedList && (
          <MovieCardList
            title={<MovieListTitle>최고 순위</MovieListTitle>}
            movieList={topRatedList}
          />
        )}
      </>
    );
  }
  return null;
};

export default HomePresenter;
