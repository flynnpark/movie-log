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

const ProfileSectionPresenter = () => (
  <ProfileCard>
    <Card.Meta
      avatar={<Avatar size={128} icon={'user'} />}
      title={<NameWrapper>Flynn</NameWrapper>}
      description={
        <InfoWrapper>
          <SimpleBioWrapper>Simple Profile Text</SimpleBioWrapper>
          <MovieInfoWrapper>영화 2,304개</MovieInfoWrapper>
        </InfoWrapper>
      }
    />
  </ProfileCard>
);

export default ProfileSectionPresenter;
