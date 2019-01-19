import React, { FunctionComponent } from 'react';
import { Alert } from 'antd';
import ProfileSection from '../../components/ProfileSection';
import { getProfileData, getRatedMovies } from 'src/types/api';
import { getMovieList } from 'src/types/local';
import Loading from 'src/components/Loading';

interface IProps {
  profileData: getProfileData | undefined;
  profileLoading: boolean;
  ratedMovieData: getRatedMovies | undefined;
  ratedMoviesLoading: boolean;
  movieListData: getMovieList | undefined;
  movieListLoading: boolean;
}

const ProfilePresenter: FunctionComponent<IProps> = ({
  profileData,
  profileLoading,
  ratedMovieData,
  ratedMoviesLoading,
  movieListData,
  movieListLoading
}) => {
  if (!profileLoading && profileData) {
    if (profileData) {
      const {
        GetUserProfile: { ok: profileOk, user },
        GetUserInfo: { countInfo }
      } = profileData;
      if (profileOk && user) {
        return <ProfileSection userData={user} countData={countInfo} />;
      }
      return (
        <Alert
          message="Error"
          description="해당 유저의 프로필을 가져올 수 없습니다."
          type="error"
          showIcon={true}
        />
      );
    } else {
      return <Loading />;
    }
  }
  return <Loading />;
};

export default ProfilePresenter;
