import React from 'react';
import styled from 'styled-components';
import { Icon } from 'antd';

const ScoreWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
`;

const ScoreTitle = styled.div`
  display: flex;
`;

const StarContainer = styled.div`
  display: flex;
  margin-top: 8px;
`;

const Star = styled(Icon)`
  font-size: 32px;
  margin-right: 4px;
  :last-child {
    margin-right: 0;
  }
`;

const MovieRatingPresenter: React.SFC = () => (
  <ScoreWrapper>
    <ScoreTitle>평가해주세요</ScoreTitle>
    <StarContainer>
      <Star type="star" theme="outlined" />
      <Star type="star" theme="outlined" />
      <Star type="star" theme="outlined" />
      <Star type="star" theme="outlined" />
      <Star type="star" theme="outlined" />
    </StarContainer>
  </ScoreWrapper>
);

export default MovieRatingPresenter;
