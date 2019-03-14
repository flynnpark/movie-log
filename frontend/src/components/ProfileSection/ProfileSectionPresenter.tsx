import React from 'react';
import styled from 'styled-components';
import { Card, Avatar, Statistic, Button } from 'antd';
import {
  getProfileData_GetUserProfile_user,
  getProfileData_GetUserInfo_countInfo
} from 'src/types/api';

const ProfileCard = styled(Card)`
  background-color: transparent;
  border: none;
  margin-bottom: 20px;
`;

const AvatarWrapper = styled.div`
  margin-right: 24px;
`;

const NameWrapper = styled.div`
  font-size: 32px;
  display: flex;
  align-items: center;
`;

const Name = styled.span`
  display: inline-block;
  margin-right: 10px;
  justify-content: center;
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

const SmallStatistic = styled(Statistic)`
  margin-right: 16px;
  :last-child {
    margin-right: 0;
  }
`;

interface IProps {
  userData: getProfileData_GetUserProfile_user;
  countData: getProfileData_GetUserInfo_countInfo | null;
}

const ProfileSectionPresenter: React.FunctionComponent<IProps> = ({
  userData: { avatar, name, shortBio, isMe },
  countData
}) => (
  <ProfileCard>
    <Card.Meta
      avatar={
        <AvatarWrapper>
          {avatar ? (
            <Avatar size={128} src={avatar} />
          ) : (
            <Avatar size={128} icon="user" />
          )}
        </AvatarWrapper>
      }
      title={
        <NameWrapper>
          <Name>{name}</Name>
          {isMe && <Button shape="circle" icon="setting" />}
        </NameWrapper>
      }
      description={
        <InfoWrapper>
          <SimpleBioWrapper>{shortBio}</SimpleBioWrapper>
          <MovieInfoWrapper>
            {countData && (
              <>
                <SmallStatistic
                  title="시청한 영화"
                  value={countData.watchedMovieCount}
                  suffix="작품"
                />
                <SmallStatistic
                  title="평가한 횟수"
                  value={countData.movieRatingCount}
                  suffix="번"
                />
              </>
            )}
          </MovieInfoWrapper>
        </InfoWrapper>
      }
    />
  </ProfileCard>
);

export default ProfileSectionPresenter;
