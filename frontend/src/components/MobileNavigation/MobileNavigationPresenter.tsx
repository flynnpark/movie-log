import React from 'react';
import { Icon } from 'antd';
import { TabBar } from 'antd-mobile';
import styled from 'styled-components';

const TabBarContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  bottom: 0;
`;

const MobileNavigationPresenter: React.FunctionComponent = () => (
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
        selected={true}
      />
      <TabBar.Item
        title="Search"
        key="Search"
        icon={<Icon type="search" />}
        selectedIcon={<Icon type="search" />}
      />
      <TabBar.Item
        title="Profile"
        key="Profile"
        icon={<Icon type="user" />}
        selectedIcon={<Icon type="user" />}
      />
    </TabBar>
  </TabBarContainer>
);

export default MobileNavigationPresenter;
