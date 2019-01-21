import React from 'react';
import styled from 'styled-components';
import { Card, Avatar } from 'antd';
import {
  getProfileData_GetUserProfile_user,
  getProfileData_GetUserInfo_countInfo
} from 'src/types/api';

const ProfileCard = styled(Card)`
  background-color: transparent;
  border: none;
  margin-bottom: 20px;
`;

const NameWrapper = styled.div`
  font-size: 32px;
`;

const InfoWrapper = styled.div``;

const SimpleBioWrapper = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

const MovieInfoWrapper = styled.div`
  display: flex;
  font-size: 16px;
`;

interface IProps {
  userData: getProfileData_GetUserProfile_user;
  countData: getProfileData_GetUserInfo_countInfo | null;
}

const ProfileSectionPresenter: React.FunctionComponent<IProps> = ({
  userData: { avatar, name, shortBio },
  countData
}) => (
  <ProfileCard>
    <Card.Meta
      avatar={
        avatar ? (
          <Avatar size={128} src={avatar} />
        ) : (
          <Avatar size={128} icon="user" />
        )
      }
      title={<NameWrapper>{name}</NameWrapper>}
      description={
        <InfoWrapper>
          <SimpleBioWrapper>{shortBio}</SimpleBioWrapper>
          <MovieInfoWrapper>
            {countData && (
              <>
                시청한 영화 {countData.watchedMovieCount}개, 평가한 횟수{' '}
                {countData.movieRatingCount}개
              </>
            )}
          </MovieInfoWrapper>
        </InfoWrapper>
      }
    />
  </ProfileCard>
);

export default ProfileSectionPresenter;
