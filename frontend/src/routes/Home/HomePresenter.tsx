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
      <MovieCardList title="현재 상영작" movieList={GetNowPlaying} />
      <MovieCardList title="인기작" movieList={GetPopular} />
      <MovieCardList title="최고 순위" movieList={GetTopRated} />
    </React.Fragment>
  );
};

export default HomePresenter;
