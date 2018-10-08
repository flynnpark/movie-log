import React from 'react';
import { Alert } from 'antd';

const MoviePresenter = () => {
  return (
    <Alert
      message="Error"
      description="해당 영화 정보를 가져올 수 없습니다."
      type="error"
      showIcon={true}
    />
  );
};

export default MoviePresenter;
