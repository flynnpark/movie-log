import React from 'react';
import styled from 'styled-components';
import { Icon, DatePicker } from 'antd';
import moment from 'moment';

const MovieRatingContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 8px;
`;

const RatingWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const RatingTitle = styled.div`
  display: flex;
`;

const StarContainer = styled.div`
  display: flex;
  margin-top: 8px;
`;

const Star = styled(Icon)`
  color: ${props => (props.theme === 'filled' ? '#fadb14' : '#8c8c8c')};
  font-size: 32px;
  cursor: pointer;
  margin-right: 4px;
  :last-child {
    margin-right: 0;
  }
`;

const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const DateTitle = styled.div`
  display: flex;
`;

const DateContainer = styled.div`
  display: flex;
  margin-top: 8px;
`;

interface IProps {
  modifyAvailable: boolean;
  rating?: number;
  handleClickMovieRating: (rating: number) => void;
}

const dateFormat = 'YYYY/MM/DD';

const MovieRatingPresenter: React.SFC<IProps> = ({
  rating,
  handleClickMovieRating
}) => (
  <MovieRatingContainer>
    <RatingWrapper>
      <RatingTitle>평가해주세요</RatingTitle>
      <StarContainer>
        {[1, 2, 3, 4, 5].map(ratingNumber => (
          <Star
            key={ratingNumber}
            type="star"
            theme={rating && rating >= ratingNumber ? 'filled' : 'outlined'}
            onClick={() => handleClickMovieRating(ratingNumber)}
          />
        ))}
      </StarContainer>
    </RatingWrapper>
    <DateWrapper>
      <DateTitle>언제 보셨나요?</DateTitle>
      <DateContainer>
        <DatePicker
          defaultValue={moment(new Date(), dateFormat)}
          format={dateFormat}
        />
      </DateContainer>
    </DateWrapper>
  </MovieRatingContainer>
);

export default MovieRatingPresenter;
