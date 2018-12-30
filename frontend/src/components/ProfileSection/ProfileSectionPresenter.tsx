import React from 'react';
import styled from 'styled-components';
import { Card, Avatar } from 'antd';
import { getProfileData_GetUserProfile_user } from 'src/types/api';

const ProfileCard = styled(Card)`
  background-color: transparent;
  border: none;
  margin-bottom: 20px;
`;

const NameWrapper = styled.div`
  font-size: 24px;
`;

const InfoWrapper = styled.div``;

const SimpleBioWrapper = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

const MovieInfoWrapper = styled.div`
  display: flex;
`;

interface IProps {
  userData: getProfileData_GetUserProfile_user;
}

const ProfileSectionPresenter: React.FunctionComponent<IProps> = ({
  userData: { avatar, name, shortBio }
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
          <MovieInfoWrapper>영화 2,304개</MovieInfoWrapper>
        </InfoWrapper>
      }
    />
  </ProfileCard>
);

export default ProfileSectionPresenter;
