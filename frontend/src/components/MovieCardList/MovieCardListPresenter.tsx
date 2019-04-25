import React from 'react';
import styled from 'styled-components';
import { List } from 'antd';
import { MovieItem } from 'types/local';
import NewMovieCard from 'components/MovieCard';

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
    <List
      grid={
        size === 'mini'
          ? { gutter: 16, xs: 4, md: 6 }
          : { gutter: 16, xs: 3, md: 4 }
      }
      loading={loading}
      dataSource={movieList}
      renderItem={(item: MovieItem, index: number) => (
        <List.Item>
          <NewMovieCard
            key={index}
            size={size}
            id={item.id}
            title={item.title}
            posterPath={item.poster_path}
          />
        </List.Item>
      )}
    />
    {/* {loading && movieList === undefined && <Loading />} */}
  </MovieCardContainer>
);

export default MovieCardListPresenter;
