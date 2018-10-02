import React from 'react';
import { Alert } from 'antd';
import ProfileSection from '../../components/ProfileSection';
import MovieCardList from 'src/components/MovieCardList';

const ProfilePresenter = ({ data }) => {
  const {
    GetUserProfile: { ok, user }
  } = data;
  return (
    <>
      {ok ? (
        <>
          <ProfileSection userData={user} />
          <MovieCardList />
        </>
      ) : (
        <Alert
          message="Error"
          description="해당 유저의 프로필을 가져올 수 없습니다."
          type="error"
          showIcon={true}
        />
      )}
    </>
  );
};

export default ProfilePresenter;
