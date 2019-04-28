import React from 'react';
import { Icon } from 'antd';
import { TabBar } from 'antd-mobile';
import styled from 'styled-components';
import { getProfileData } from 'types/api';

const TabBarContainer = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0;
`;

interface IProps {
  handleClick: (path: string) => void;
  pathname: string;
  loading: boolean;
  data: getProfileData | undefined;
}

const MobileNavigationPresenter: React.FunctionComponent<IProps> = ({
  handleClick,
  loading,
  data
}) => {
  let userId;
  if (data && data.GetUserProfile && data.GetUserProfile.user) {
    const {
      GetUserProfile: { user }
    } = data;
    userId = user.id;
  }
  return (
    <TabBarContainer>
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
        tabBarPosition="bottom"
      >
        <TabBar.Item
          title="Home"
          key="Home"
          icon={<Icon type="home" />}
          selectedIcon={<Icon type="home" />}
          onPress={() => {
            handleClick('/');
          }}
        />
        <TabBar.Item
          title="Search"
          key="Search"
          icon={<Icon type="search" />}
          selectedIcon={<Icon type="search" />}
          onPress={() => {
            handleClick('/');
          }}
        />
        <TabBar.Item
          title="Profile"
          key="Profile"
          icon={<Icon type="user" />}
          selectedIcon={<Icon type="user" />}
          onPress={() => {
            if (userId) {
              handleClick(`/profile/${userId}`);
            } else {
              handleClick('/');
            }
          }}
        />
      </TabBar>
    </TabBarContainer>
  );
};

export default MobileNavigationPresenter;
