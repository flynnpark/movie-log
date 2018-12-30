import React, { FunctionComponent } from 'react';
import { Alert } from 'antd';
import ProfileSection from '../../components/ProfileSection';
import { getProfileData } from 'src/types/api';

interface IProps {
  data: getProfileData;
}

const ProfilePresenter: FunctionComponent<IProps> = ({ data }) => {
  const {
    GetUserProfile: { ok, user }
  } = data;
  return (
    <>
      {ok && user ? (
        <>
          <ProfileSection userData={user} />
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
