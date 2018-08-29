import React from 'react';
import { Layout, Input, Avatar } from 'antd';
import styled from 'styled-components';

const FixedHeader = styled(Layout.Header)`
  position: fixed;
  display: flex;
  background-color: #fff;
  z-index: 1;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const HeaderSearch = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const SearchField = styled(Input.Search)`
  width: 600px;
  margin: 8px 8px 8px 8px;
`;

const Content = styled(Layout.Content)`
  margin-top: 96px;
  padding: 0 50px;
`;

const NavigationPresenter: React.SFC = () => (
  <Layout>
    <FixedHeader>
      <HeaderContainer>
        <div>Movie.log</div>
        <div>
          <Avatar size={32} icon="user" />
        </div>
      </HeaderContainer>
      <HeaderSearch>
        <SearchField placeholder="영화 제목을 검색해보세요." />
      </HeaderSearch>
    </FixedHeader>
    <Content>Home</Content>
  </Layout>
);

export default NavigationPresenter;
