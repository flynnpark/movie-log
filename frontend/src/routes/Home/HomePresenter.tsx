import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import { Layout } from 'antd';
import Navigation from '../../components/Navigation';

const FixedHeader = styled(Layout.Header)`
  position: fixed;
  display: flex;
  background-color: #fff;
  z-index: 1;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const Content = styled(Layout.Content)`
  padding-top: 96px;
`;

const HomePresenter = () => (
  <Layout>
    <Helmet>
      <title>Home | Movie-log</title>
    </Helmet>
    <FixedHeader>
      <Navigation />
    </FixedHeader>
    <Content>Home</Content>
  </Layout>
);

export default HomePresenter;
