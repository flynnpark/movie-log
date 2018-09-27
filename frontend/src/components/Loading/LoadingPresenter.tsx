import React from 'react';
import styled from 'styled-components';
import { Spin } from 'antd';

const LoadingWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 300px;
  align-items: center;
  justify-content: center;
`;

const LoadingPresenter = () => {
  return (
    <LoadingWrapper>
      <Spin size="large" />
    </LoadingWrapper>
  );
};

export default LoadingPresenter;
