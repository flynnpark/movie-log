import React, { FunctionComponent } from 'react';
import { ApolloQueryResult } from 'apollo-boost';
import styled from 'styled-components';
import { Alert, Button } from 'antd';
import { getProfileData, getRatedMovies } from 'src/types/api';
import { getMovieList, MovieItem } from 'src/types/local';
import ProfileSection from 'src/components/ProfileSection';
import MovieCardList from 'src/components/MovieCardList';
import Loading from 'src/components/Loading';

const MovieListTitle = styled.h1`
  font-size: 20px;
  margin-bottom: 14px;
`;

interface IProps {
  profileData: getProfileData | undefined;
  profileLoading: boolean;
  ratedMovieData: getRatedMovies | undefined;
  ratedMoviesLoading: boolean;
  movieListData: getMovieList | undefined;
  movieListLoading: boolean;
  onLoadMore: () => Promise<ApolloQueryResult<getRatedMovies>>;
}

const ProfilePresenter: FunctionComponent<IProps> = ({
  profileData,
  profileLoading,
  ratedMovieData,
  ratedMoviesLoading,
  movieListData,
  movieListLoading,
  onLoadMore
}) => {
  if (!profileLoading && profileData) {
    const {
      GetUserProfile: { ok: profileOk, user },
      GetUserInfo: { countInfo }
    } = profileData;
    let movieList: MovieItem[] | null = null;
    if (
      movieListData &&
      movieListData.GetMovieList &&
      movieListData.GetMovieList.movieList
    ) {
      movieList = movieListData.GetMovieList.movieList;
    }
    if (profileOk && user) {
      return (
        <>
          <ProfileSection userData={user} countData={countInfo} />
          {
            <>
              <MovieCardList
                loading={ratedMoviesLoading || movieListLoading}
                title={<MovieListTitle>시청한 영화</MovieListTitle>}
                movieList={movieList}
              />
              <Button onClick={onLoadMore}>더 불러오기</Button>
            </>
          }
        </>
      );
    }
    // 프로필이 존재하지 않을 때
    return (
      <Alert
        message="Error"
        description="해당 유저의 프로필을 가져올 수 없습니다."
        type="error"
        showIcon={true}
      />
    );
  }
  return <Loading />;
};

export default ProfilePresenter;
