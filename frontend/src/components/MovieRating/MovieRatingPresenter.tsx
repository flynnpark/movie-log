import React from 'react';
import styled from 'styled-components';
import { Icon, DatePicker, Button } from 'antd';
import moment from 'moment';
import { getMovieDetail_GetMovieRatings_movieRatings } from 'src/types/api';

const MovieRatingContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 8px;
`;

const RatingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const RatingTitle = styled.div`
  display: flex;
`;

const StarButtonContainer = styled.div`
  display: flex;
  margin-top: 8px;
`;

const StarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StarButton = styled(Icon)`
  color: ${props => (props.theme === 'filled' ? '#fadb14' : '#8c8c8c')};
  font-size: 30px;
  cursor: pointer;
  margin-right: 4px;
  :last-child {
    margin-right: 0;
  }
`;

const StarIcon = styled(Icon)`
  color: ${props => (props.theme === 'filled' ? '#fadb14' : '#8c8c8c')};
  font-size: 26px;
  margin-right: 4px;
  :last-child {
    margin-right: 0;
  }
`;

const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  justify-content: center;
`;

const DateTitle = styled.div`
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
  margin-left: 10px;
  align-items: flex-end;
  justify-content: center;
`;

interface IProps {
  movieRating?: getMovieDetail_GetMovieRatings_movieRatings;
  handleClickMovieRating: (rating: number) => void;
}

const dateFormat = 'YYYY/MM/DD';

const MovieRatingPresenter: React.FunctionComponent<IProps> = ({
  movieRating,
  handleClickMovieRating
}) => (
  <MovieRatingContainer>
    {movieRating ? (
      <>
        <RatingWrapper>
          <StarContainer>
            {[1, 2, 3, 4, 5].map(ratignNumber => (
              <StarIcon
                key={ratignNumber}
                type="star"
                theme={
                  movieRating && movieRating.rating >= ratignNumber
                    ? 'filled'
                    : 'outlined'
                }
              />
            ))}
          </StarContainer>
        </RatingWrapper>
        <DateWrapper>
          <DateContainer>
            {moment(new Date(movieRating.watchDate)).format(dateFormat)}
          </DateContainer>
        </DateWrapper>
        <ButtonWrapper>
          <Button type="dashed" shape="circle" icon="delete" />
        </ButtonWrapper>
      </>
    ) : (
      <>
        <RatingWrapper>
          <RatingTitle>평가해주세요</RatingTitle>
          <StarButtonContainer>
            {[1, 2, 3, 4, 5].map(ratingNumber => (
              <StarButton
                key={ratingNumber}
                type="star"
                theme={'outlined'}
                onClick={() => handleClickMovieRating(ratingNumber)}
              />
            ))}
          </StarButtonContainer>
        </RatingWrapper>
        <DateWrapper>
          <DateTitle>언제 보셨나요?</DateTitle>
          <DatePickerContainer>
            <DatePicker
              defaultValue={moment(new Date(), dateFormat)}
              format={dateFormat}
            />
          </DatePickerContainer>
        </DateWrapper>
        <ButtonWrapper>
          <Button type="dashed" shape="circle" icon="check" />
        </ButtonWrapper>
      </>
    )}
  </MovieRatingContainer>
);

export default MovieRatingPresenter;
