import React from 'react';
import styled from 'styled-components';
import { Card, Avatar } from 'antd';

const ProfileCard = styled(Card)`
  background-color: transparent;
  border: none;
  margin-bottom: 20px;
`;

const ProfileSectionPresenter = () => (
  <ProfileCard>
    <Card.Meta
      avatar={<Avatar size={128} icon={'user'} />}
      title="Flynn"
      description="Simple Profile Text"
    />
  </ProfileCard>
);

export default ProfileSectionPresenter;
