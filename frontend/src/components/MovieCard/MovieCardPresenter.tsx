import React from 'react';
import { Card } from 'antd';

const MovieCardPresenter = () => (
  <Card hoverable={true} style={{ width: 205 }}>
    <Card.Meta title="Movie Title" description="Movie Description" />
  </Card>
);

export default MovieCardPresenter;
