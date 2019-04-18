import React, { FunctionComponent } from 'react';
import Helmet from 'react-helmet';
import { ApolloQueryResult } from 'apollo-boost';
import styled from 'styled-components';
import { Alert, Divider, Tabs } from 'antd';
import QueueAnim from 'rc-queue-anim';
import { getProfileData, getRatedMovies } from 'src/types/api';
import { getMovieList, MovieItem } from 'src/types/local';
import ProfileSection from 'src/components/ProfileSection';
import MovieCardList from 'src/components/MovieCardList';
import Loading from 'src/components/Loading';

const MovieListTitle = styled.h1`
  font-size: 20px;
  margin-bottom: 14px;
`;

const DividerWrapper = styled.div`
  margin-bottom: 30px;
`;

const CardContainer = styled.div`
  & .ant-tabs-card > .ant-tabs-content {
    margin-top: -16px;
  }

  & .ant-tabs-card > .ant-tabs-content > .ant-tabs-tabpane {
    background: #fff;
    padding: 16px;
    border-radius: 0 5px 5px 5px;
  }

  & .ant-tabs-card > .ant-tabs-bar {
    border-color: #fff;
  }

  & .ant-tabs-card > .ant-tabs-bar .ant-tabs-tab {
    border-color: transparent;
    background: transparent;
  }

  & .ant-tabs-card > .ant-tabs-bar .ant-tabs-tab-active {
    border-color: #fff;
    background: #fff;
  }
`;

interface IProps {
  profileData: getProfileData | undefined;
  ratedMovieData: getRatedMovies | undefined;
  ratedMoviesLoading: boolean;
  movieListData: getMovieList | undefined;
  movieListLoading: boolean;
  onLoadMore: () => Promise<ApolloQueryResult<getRatedMovies>>;
}

const ProfilePresenter: FunctionComponent<IProps> = ({
  profileData,
  ratedMoviesLoading,
  movieListData,
  movieListLoading,
  onLoadMore
}) => {
  if (profileData) {
    const {
      GetUserProfile: { ok: profileOk, user },
      GetUserInfo: { countInfo }
    } = profileData;
    let movieList: MovieItem[] = new Array<MovieItem>();
    if (
      movieListData &&
      movieListData.GetMovieList &&
      movieListData.GetMovieList.movieList
    ) {
      movieList = movieListData.GetMovieList.movieList;
    }
    if (profileOk && user) {
      return (
        <QueueAnim>
          <Helmet>
            <title>'{user.name}'님의 프로필 | Movie-log</title>
          </Helmet>
          <div key="profileSection">
            <ProfileSection userData={user} countData={countInfo} />
          </div>
          <CardContainer key="cardContainer">
            <Tabs type="card">
              <Tabs.TabPane tab="목록" key="list">
                <MovieCardList
                  key="movieCardList"
                  loading={ratedMoviesLoading || movieListLoading}
                  title={<MovieListTitle>시청한 영화</MovieListTitle>}
                  movieList={movieList}
                />
                {countInfo && countInfo.movieRatingCount > movieList.length && (
                  <DividerWrapper key="divider">
                    <Divider>
                      <a onClick={onLoadMore}>더 불러오기</a>
                    </Divider>
                  </DividerWrapper>
                )}
              </Tabs.TabPane>
              {/* <Tabs.TabPane tab="타임라인" key="timeline">
                <div>Timeline Here</div>
              </Tabs.TabPane> */}
            </Tabs>
          </CardContainer>
        </QueueAnim>
      );
    }
    // 프로필이 존재하지 않을 때
    return (
      <>
        <Helmet>
          <title>정보가 존재하지 않습니다. | Movie-log</title>
        </Helmet>
        <QueueAnim>
          <Alert
            key="alert"
            message="Error"
            description="해당 유저의 프로필을 가져올 수 없습니다."
            type="error"
            showIcon={true}
          />
        </QueueAnim>
      </>
    );
  }
  return <Loading />;
};

export default ProfilePresenter;
