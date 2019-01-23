import React from 'react';
import styled from 'styled-components';
import { List } from 'antd';
import MovieCard from 'src/components/MovieCard';
import { MovieItem } from 'src/types/local';

const MovieCardContainer = styled.div`
  margin-bottom: 30px;
`;

interface IProps {
  title?: React.ReactNode;
  movieList?: MovieItem[] | null;
}

const MovieCardListPresenter: React.FunctionComponent<IProps> = ({
  title,
  movieList
}) => (
  <MovieCardContainer>
    {title && title}
    <List
      grid={{ gutter: 16, column: 4 }}
      dataSource={movieList}
      renderItem={(item, index) => (
        <List.Item>
          <MovieCard key={index} {...item} />
        </List.Item>
      )}
    />
  </MovieCardContainer>
);

export default MovieCardListPresenter;
