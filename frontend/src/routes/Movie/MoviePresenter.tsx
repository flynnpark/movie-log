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

const TitleContainer = styled.div``;

const Title = styled.div`
  display: flex;
  font-size: 42px;
`;

const OriginTitle = styled.div`
  display: flex;
  font-size: 24px;
  color: #8c8c8c;

  ::before {
    content: ' ';
  }
`;

const Tagline = styled.div`
  display: flex;
  color: #8c8c8c;
`;

const CardBodyStyle = {
  padding: 0
};

const MoviePresenter = ({ data }) => {
  const {
    GetMovieDetail: { ok, movie }
  } = data;
  console.log(movie);
  return (
    <>
      {ok ? (
        <MovieInfoCard bodyStyle={CardBodyStyle}>
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
              <TitleContainer>
                <Title>{movie.title}</Title>
                <OriginTitle>{movie.original_title}</OriginTitle>
                <Tagline>{movie.tagline}</Tagline>
              </TitleContainer>
            }
            description={
              <React.Fragment>
                <div>{movie.genres.map(genre => genre.name)}</div>
                <div>개봉일 {movie.release_date}</div>
              </React.Fragment>
            }
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
