import React from 'react';
import { Link } from 'react-router-dom';
import { Input, Avatar } from 'antd';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const HeaderSide = styled.div`
  display: flex;
  width: 50%;
`;

const HeaderCenter = styled.div`
  display: flex;
  width: 640px !important;
`;

const SearchField = styled(Input.Search)`
  display: flex;
  flex-basis: auto;
  flex-grow: 1;
  margin-left: auto;
  margin-right: auto;
  width: 640px !important;
  padding: auto;
`;

const LeftSide = styled.div`
  margin-right: auto;
`;

const RightSide = styled.div`
  margin-left: auto;
`;

const NavigationPresenter: React.SFC = () => (
  <React.Fragment>
    <HeaderContainer>
      <HeaderSide>
        <LeftSide>
          <Link to="/">Movie.log</Link>
        </LeftSide>
      </HeaderSide>
      <HeaderCenter>
        <SearchField placeholder="영화 제목을 검색해보세요." size="large" />
      </HeaderCenter>
      <HeaderSide>
        <RightSide>
          <Link to="/profile">
            <Avatar size={32} icon="user" />
          </Link>
        </RightSide>
      </HeaderSide>
    </HeaderContainer>
  </React.Fragment>
);

export default NavigationPresenter;
