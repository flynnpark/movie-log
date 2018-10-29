import React from 'react';
import Helmet from 'react-helmet';
import MovieCardList from 'src/components/MovieCardList';

const HomePresenter = ({ data }) => {
  const { GetNowPlaying, GetPopular, GetTopRated } = data;
  return (
    <React.Fragment>
      <Helmet>
        <title>Home | Movie-log</title>
      </Helmet>
      <MovieCardList
        title="현재 상영작"
        movieList={GetNowPlaying.slice(0, 12)}
      />
      <MovieCardList title="인기작" movieList={GetPopular.slice(0, 12)} />
      <MovieCardList title="최고 순위" movieList={GetTopRated.slice(0, 12)} />
    </React.Fragment>
  );
};

export default HomePresenter;
