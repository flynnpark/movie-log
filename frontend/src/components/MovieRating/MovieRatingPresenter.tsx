import React from 'react';
import styled from 'styled-components';
import { Icon, DatePicker } from 'antd';
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
`;

const RatingTitle = styled.div`
  display: flex;
`;

const StarContainer = styled.div`
  display: flex;
  margin-top: 8px;
`;

const StarButton = styled(Icon)`
  color: ${props => (props.theme === 'filled' ? '#fadb14' : '#8c8c8c')};
  font-size: 32px;
  cursor: pointer;
  margin-right: 4px;
  :last-child {
    margin-right: 0;
  }
`;

const StarIcon = styled(Icon)`
  color: ${props => (props.theme === 'filled' ? '#fadb14' : '#8c8c8c')};
  font-size: 24px;
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
  movieRating?: getMovieDetail_GetMovieRatings_movieRatings;
  handleClickMovieRating: (rating: number) => void;
}

const dateFormat = 'YYYY/MM/DD';

const MovieRatingPresenter: React.FunctionComponent<IProps> = ({
  modifyAvailable,
  movieRating,
  handleClickMovieRating
}) => (
  <MovieRatingContainer>
    <RatingWrapper>
      {modifyAvailable ? (
        <>
          <RatingTitle>평가해주세요</RatingTitle>
          <StarContainer>
            {[1, 2, 3, 4, 5].map(ratingNumber => (
              <StarButton
                key={ratingNumber}
                type="star"
                theme={
                  movieRating && movieRating.rating >= ratingNumber
                    ? 'filled'
                    : 'outlined'
                }
                onClick={() => handleClickMovieRating(ratingNumber)}
              />
            ))}
          </StarContainer>
        </>
      ) : (
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
      )}
    </RatingWrapper>
    <DateWrapper>
      {modifyAvailable ? (
        <>
          <DateTitle>언제 보셨나요?</DateTitle>
          <DateContainer>
            <DatePicker
              defaultValue={moment(new Date(), dateFormat)}
              format={dateFormat}
            />
          </DateContainer>
        </>
      ) : (
        <div>
          {movieRating && <>{new Date(movieRating.watchDate).toString()}</>}
        </div>
      )}
    </DateWrapper>
  </MovieRatingContainer>
);

export default MovieRatingPresenter;
