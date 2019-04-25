import React, { useState } from 'react';
import styled from 'styled-components';
import { Card, Avatar, Statistic, Button } from 'antd';
import {
  getProfileData_GetUserProfile_user,
  getProfileData_GetUserInfo_countInfo
} from 'types/api';
import Setting from 'components/Setting';

const ProfileCard = styled(Card)`
  background-color: transparent;
  border: none;
  margin-bottom: 20px;
`;

const AvatarWithMargin = styled(Avatar)`
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

const ProfileSection: React.FunctionComponent<IProps> = ({
  userData: { avatar, name, shortBio, isMe },
  countData
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <ProfileCard>
      <Card.Meta
        avatar={
          <>
            {avatar ? (
              <AvatarWithMargin size={128} src={avatar} />
            ) : (
              <AvatarWithMargin size={128} icon="user" />
            )}
          </>
        }
        title={
          <NameWrapper>
            <Name>{name}</Name>
            {isMe && (
              <Button
                shape="circle"
                icon="setting"
                onClick={() => setModalVisible(!modalVisible)}
              />
            )}
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
                    suffix="회"
                  />
                </>
              )}
            </MovieInfoWrapper>
          </InfoWrapper>
        }
      />
      <Setting visible={modalVisible} setVisible={setModalVisible} />
    </ProfileCard>
  );
};

export default ProfileSection;
