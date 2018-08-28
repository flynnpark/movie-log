import React from 'react';
import Helmet from 'react-helmet';
import Navigation from '../../components/Navigation';

const HomePresenter = () => (
  <React.Fragment>
    <Helmet>
      <title>Home | Movie-log</title>
    </Helmet>
    <Navigation />
    Home Screen
  </React.Fragment>
);

export default HomePresenter;
