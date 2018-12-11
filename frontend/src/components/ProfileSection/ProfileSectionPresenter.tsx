import React from 'react';
import styled from 'styled-components';
import { Card, Avatar } from 'antd';

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
  userData: {
    id: number;
    avatar: string | null;
    email: string;
    name: string;
    shortBio: string;
    createdAt: string;
  };
}

const ProfileSectionPresenter: React.FunctionComponent<IProps> = ({
  userData: { id, avatar, email, name, shortBio, createdAt }
}) => (
  <ProfileCard>
    <Card.Meta
      avatar={
        avatar ? (
          <Avatar size={128} src={avatar} />
        ) : (
          <Avatar size={128} icon={'user'} />
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
