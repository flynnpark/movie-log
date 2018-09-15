import React from 'react';
import Helmet from 'react-helmet';
import MovieList from '../../components/MovieList';

const HomePresenter = () => (
  <React.Fragment>
    <Helmet>
      <title>Home | Movie-log</title>
    </Helmet>
    <MovieList />
    <MovieList />
    <MovieList />
  </React.Fragment>
);

export default HomePresenter;
