import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Input, Avatar } from 'antd';
import styled from 'styled-components';
import { getProfileData } from 'types/api';

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
  width: 480px !important;
`;

const SearchField = styled(Input.Search)`
  display: flex;
  flex-basis: auto;
  flex-grow: 1;
  margin-left: auto;
  margin-right: auto;
  width: 480px !important;
  padding: auto;
`;

const LeftSide = styled.div`
  margin-right: auto;
`;

const RightSide = styled.div`
  margin-left: auto;
`;

interface IProps extends RouteComponentProps<any> {
  data: getProfileData | undefined;
  loading: boolean;
}

const NavigationPresenter: React.FunctionComponent<IProps> = ({
  history,
  data,
  loading
}) => {
  let userId: number | null = null;
  let avatar: string | null = null;
  if (data && data.GetUserProfile && data.GetUserProfile.user) {
    const {
      GetUserProfile: { user }
    } = data;
    userId = user.id;
    avatar = user.avatar;
  }
  return (
    <HeaderContainer>
      <HeaderSide>
        <LeftSide>
          <Link to="/">Movie.log</Link>
        </LeftSide>
      </HeaderSide>
      <HeaderCenter>
        <SearchField
          placeholder="영화 제목을 검색해보세요."
          size="large"
          onSearch={(value: string) => history.push(`/search/${value}`)}
        />
      </HeaderCenter>
      <HeaderSide>
        <RightSide>
          {!loading && userId ? (
            <Link to={`/profile/${userId}`}>
              {avatar ? (
                <Avatar size={32} src={avatar} />
              ) : (
                <Avatar size={32} icon="user" />
              )}
            </Link>
          ) : (
            <Avatar size={32} icon="user" />
          )}
        </RightSide>
      </HeaderSide>
    </HeaderContainer>
  );
};

export default NavigationPresenter;
