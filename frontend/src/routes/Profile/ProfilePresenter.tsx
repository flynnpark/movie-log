import React from 'react';
import ProfileSection from '../../components/ProfileSection';
import MovieCardList from 'src/components/MovieCardList';

const ProfilePresenter = () => (
  <React.Fragment>
    <ProfileSection />
    <MovieCardList />
  </React.Fragment>
);

export default ProfilePresenter;
