import React from 'react';
import styled from 'styled-components';
import { Card } from 'antd';

const MovieCard = styled(Card)`
  width: 204px;
  margin: 7px;
`;

const MovieCardPresenter = () => (
  <MovieCard hoverable={true}>
    <Card.Meta title="Movie Title" description="Movie Description" />
  </MovieCard>
);

export default MovieCardPresenter;
