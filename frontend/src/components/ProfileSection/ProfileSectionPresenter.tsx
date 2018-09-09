import React from 'react';
import styled from 'styled-components';
import { Avatar, Divider } from 'antd';

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const ProfileDetail = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 60px;
`;

const Name = styled.div`
  font-size: 32px;
`;

const ProfileSectionPresenter = () => (
  <React.Fragment>
    <ProfileWrapper>
      <Avatar size={128} icon="user" />
      <ProfileDetail>
        <Name>Flynn</Name>
      </ProfileDetail>
    </ProfileWrapper>
    <Divider />
  </React.Fragment>
);

export default ProfileSectionPresenter;
