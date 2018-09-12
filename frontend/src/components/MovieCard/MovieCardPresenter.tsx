import React from 'react';
import styled from 'styled-components';
import { Card } from 'antd';

const MovieCard = styled(Card)`
  width: 204px;
  margin: 7px;
`;

const MovieCardPresenter = () => (
  <MovieCard
    hoverable={true}
    cover={
      <img
        src="https://image.tmdb.org/t/p/w1280/kmP6viwzcEkZeoi1LaVcQemcvZh.jpg"
        alt="Poster"
      />
    }
  >
    <Card.Meta title="Movie Title" description="Movie Description" />
  </MovieCard>
);

export default MovieCardPresenter;
