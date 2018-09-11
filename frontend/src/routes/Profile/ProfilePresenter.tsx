import React from 'react';
import styled from 'styled-components';
import ProfileSection from '../../components/ProfileSection';
import MovieCard from '../../components/MovieCard';

const MovieCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: -7px;
`;

const ProfilePresenter = () => (
  <React.Fragment>
    <ProfileSection />
    <MovieCardContainer>
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </MovieCardContainer>
  </React.Fragment>
);

export default ProfilePresenter;
