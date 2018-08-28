import React from 'react';
import { Menu, Input } from 'antd';

const NavigationPresenter: React.SFC = () => (
  <Menu mode="horizontal">
    <Menu.Item key="logo">Movie.log</Menu.Item>
    <Menu.Item key="search">
      <Input.Search placeholder="영화 제목을 검색해보세요." />
    </Menu.Item>
  </Menu>
);

export default NavigationPresenter;
