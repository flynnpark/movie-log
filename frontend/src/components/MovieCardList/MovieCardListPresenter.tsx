import React from 'react';
import styled from 'styled-components';
import { List } from 'antd';
import { MovieItem } from 'src/types/local';
import MovieCard from 'src/components/MovieCard';
import Loading from 'src/components/Loading';

const MovieCardContainer = styled.div`
  margin-bottom: 30px;
`;

interface IProps {
  loading: boolean;
  title?: React.ReactNode;
  movieList?: MovieItem[] | null;
}

const MovieCardListPresenter: React.FunctionComponent<IProps> = ({
  loading,
  title,
  movieList
}) => (
  <MovieCardContainer>
    {title && title}
    {loading && !movieList ? (
      <Loading />
    ) : (
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={movieList}
        renderItem={(item, index) => (
          <List.Item>
            <MovieCard key={index} {...item} />
          </List.Item>
        )}
      />
    )}
    {loading && movieList && <Loading />}
  </MovieCardContainer>
);

export default MovieCardListPresenter;
