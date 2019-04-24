import React from 'react';
import { Menu } from 'antd';

const MobileNavigationPresenter: React.FunctionComponent = () => (
  <Menu mode="horizontal">
    <Menu.Item>홈</Menu.Item>
    <Menu.Item>찾아보기</Menu.Item>
    <Menu.Item>프로필</Menu.Item>
  </Menu>
);

export default MobileNavigationPresenter;
