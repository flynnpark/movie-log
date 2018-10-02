import React from 'react';
import ProfileSection from '../../components/ProfileSection';
import MovieCardList from 'src/components/MovieCardList';

const ProfilePresenter = ({ data }) => {
  const {
    GetUserProfile: { user }
  } = data;
  return (
    <React.Fragment>
      <ProfileSection userData={user} />
      <MovieCardList />
    </React.Fragment>
  );
};

export default ProfilePresenter;
