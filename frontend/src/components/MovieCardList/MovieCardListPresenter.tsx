import React from 'react';
import styled from 'styled-components';
import { List } from 'antd';
import { MovieItem } from 'src/types/local';
import MovieCard from 'src/components/MovieCard';
import Loading from 'src/components/Loading';
import MiniMovieCard from '../MiniMovieCard';

const MovieCardContainer = styled.div`
  margin-bottom: 30px;
`;

interface IProps {
  loading: boolean;
  size?: 'mini' | 'normal';
  title?: React.ReactNode;
  movieList?: MovieItem[];
}

const MovieCardListPresenter: React.FunctionComponent<IProps> = ({
  loading,
  size = 'normal',
  title,
  movieList
}) => (
  <MovieCardContainer>
    {title && title}
    {loading && !movieList ? (
      <Loading />
    ) : (
      <List
        grid={
          size === 'mini'
            ? { gutter: 16, column: 6 }
            : { gutter: 16, column: 4 }
        }
        dataSource={movieList}
        renderItem={(item: MovieItem, index: number) => (
          <List.Item>
            {size === 'mini' ? (
              <MiniMovieCard key={item.id} {...item} />
            ) : (
              <MovieCard key={index} {...item} />
            )}
          </List.Item>
        )}
      />
    )}
    {loading && movieList && <Loading />}
  </MovieCardContainer>
);

export default MovieCardListPresenter;
