import React from 'react';
import ProfileSection from '../../components/ProfileSection';
import MovieCard from '../../components/MovieCard';

const ProfilePresenter = () => (
  <React.Fragment>
    <ProfileSection />
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </div>
  </React.Fragment>
);

export default ProfilePresenter;
