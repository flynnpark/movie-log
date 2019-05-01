import React from 'react';
import styled from 'styled-components';
import moment from 'moment-timezone';
import { DatePicker, Button, Rate, Popconfirm } from 'antd';

const MovieRatingContainer = styled.div`
  @media (min-width: 719px) {
    flex-direction: row;
  }
  flex-direction: column;
  display: flex;
  margin-top: 8px;
`;

const RatingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const RatingTitle = styled.div`
  @media (max-width: 718px) {
    font-size: 13px;
  }
  display: flex;
`;

const StarButtonContainer = styled.div`
  display: flex;
`;

const StarRate = styled(Rate)`
  li {
    width: calc(20% - 8px);
  }
`

const StarContainer = styled.div`
  @media (max-width: 480px) {
    justify-content: left;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DateWrapper = styled.div`
  @media (min-width: 719px) {
    margin-left: 10px;
  }
  display: flex;
  max-width: 170px;
  flex-direction: column;
  justify-content: center;
`;

const DateTitle = styled.div`
  @media (max-width: 718px) {
    font-size: 13px;
    margin-top: 4px;
  }
  display: flex;
`;

const DatePickerContainer = styled.div`
  display: flex;
  margin-top: 8px;
`;

const DateContainer = styled.div`
  display: flex;
`;

const ButtonWrapper = styled.div`
  display: flex;
  max-width: 30px;
  margin-left: 10px;
  align-items: flex-end;
  justify-content: center;
`;

const UserFeedbackWrapper = styled.div`
  @media (max-width: 480px) {
    flex-direction: column;
  }
  display: flex;
  flex-direction: row;
`

const RightWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

interface IProps {
  rating: number;
  watchDate: string;
  handleClickRating?: (rating: number) => void;
  handleClickWatchDate?: (date: moment.Moment, dateString: string) => void;
  setMovieRating?: () => void;
  removeMovieRating?: () => void;
}

const dateFormat = 'YYYY/MM/DD';

const MovieRatingPresenter: React.FunctionComponent<IProps> = ({
  rating,
  watchDate,
  handleClickRating,
  handleClickWatchDate,
  setMovieRating,
  removeMovieRating
}) => (
  <MovieRatingContainer>
    {handleClickRating && handleClickWatchDate && setMovieRating ? (
      <>
        <RatingWrapper>
          <RatingTitle>영화는 어땠나요?</RatingTitle>
          <StarButtonContainer>
            <StarRate
              allowHalf={true}
              style={{ fontSize: '26px' }}
              value={rating}
              onChange={handleClickRating}
            />
          </StarButtonContainer>
        </RatingWrapper>
        <DateWrapper>
          <DateTitle>언제 보셨나요?</DateTitle>
          <DatePickerContainer>
            <DatePicker
              defaultValue={moment(new Date(), dateFormat)}
              format={dateFormat}
              onChange={handleClickWatchDate}
            />
            <ButtonWrapper>
              <Button
                type="dashed"
                shape="circle"
                icon="check"
                onClick={setMovieRating}
              />
            </ButtonWrapper>
          </DatePickerContainer>
        </DateWrapper>
      </>
    ) : (
      <UserFeedbackWrapper>
        <RatingWrapper>
          <StarContainer>
            <Rate
              disabled={true}
              allowHalf={true}
              defaultValue={rating}
              style={{ fontSize: '24px' }}
            />
          </StarContainer>
        </RatingWrapper>
        <RightWrapper>
          <DateWrapper>
            <DateContainer>
              {moment(new Date(Number(watchDate))).format(dateFormat)}
            </DateContainer>
          </DateWrapper>
          <ButtonWrapper>
            <Popconfirm title="이 점수를 지울까요?" onConfirm={removeMovieRating}>
              <Button type="dashed" shape="circle" icon="delete" />
            </Popconfirm>
          </ButtonWrapper>
        </RightWrapper>
      </UserFeedbackWrapper>
    )}
  </MovieRatingContainer>
);

export default MovieRatingPresenter;
