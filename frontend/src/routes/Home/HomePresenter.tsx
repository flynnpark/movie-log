import React from 'react';
import Helmet from 'react-helmet';
import MovieCardList from 'src/components/MovieCardList';

const HomePresenter = ({ loading, data }) => {
  console.log(data);
  const { GetNowPlaying, GetPopular, GetTopRated } = data;
  return (
    <React.Fragment>
      <Helmet>
        <title>Home | Movie-log</title>
      </Helmet>
      <MovieCardList withTitle={true} movieList={GetNowPlaying} />
      <MovieCardList withTitle={true} movieList={GetPopular} />
      <MovieCardList withTitle={true} movieList={GetTopRated} />
    </React.Fragment>
  );
};

export default HomePresenter;
