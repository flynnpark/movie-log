import React from 'react';
import styled from 'styled-components';
import { Alert, Card } from 'antd';

const MovieInfoCard = styled(Card)`
  background-color: transparent;
  border: none;
  margin-bottom: 20px;
`;

const Poster = styled.div`
  margin-right: 12px;
`;

const TitleWrapper = styled.div`
  font-size: 48px;
`;

const OriginTitle = styled.span`
  font-size: 32px;
  color: #888;

  ::before {
    content: ' ';
  }
`;

const MoviePresenter = ({ data }) => {
  console.log(data);
  const {
    GetMovieDetail: { ok, movie }
  } = data;
  return (
    <>
      {ok ? (
        <MovieInfoCard>
          <Card.Meta
            avatar={
              <Poster>
                <img
                  src={`https://image.tmdb.org/t/p/w200_and_h300_bestv2${
                    movie.poster_path
                  }`}
                />
              </Poster>
            }
            title={
              <TitleWrapper>
                {movie.title}
                <OriginTitle>{movie.original_title}</OriginTitle>
              </TitleWrapper>
            }
            description={<div>개봉일 {movie.release_date}</div>}
          />
        </MovieInfoCard>
      ) : (
        <Alert
          message="Error"
          description="해당 영화 정보를 가져올 수 없습니다."
          type="error"
          showIcon={true}
        />
      )}
    </>
  );
};

export default MoviePresenter;
