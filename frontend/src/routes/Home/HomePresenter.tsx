import React from 'react';
import Helmet from 'react-helmet';
import MovieCardList from 'src/components/MovieCardList';

const HomePresenter = () => (
  <React.Fragment>
    <Helmet>
      <title>Home | Movie-log</title>
    </Helmet>
    <MovieCardList withTitle={true} />
    <MovieCardList withTitle={true} />
    <MovieCardList withTitle={true} />
    <MovieCardList withTitle={true} />
    <MovieCardList withTitle={true} />
  </React.Fragment>
);

export default HomePresenter;
