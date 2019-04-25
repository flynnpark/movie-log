import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import QueueAnim from 'rc-queue-anim';
import { findMovie } from 'types/local';
import MovieCardList from 'components/MovieCardList';

const MovieListTitle = styled.h1`
  font-size: 32px;
  margin-bottom: 25px;
`;

interface IProps {
  loading: boolean;
  query: string;
  data: findMovie | undefined;
}

const SearchPresenter: React.FunctionComponent<IProps> = ({
  loading,
  query,
  data
}) => (
  <QueueAnim>
    <Helmet>
      <title>'{query}' 검색 결과 | Movie-log</title>
    </Helmet>
    {data && (
      <MovieCardList
        key="search"
        loading={loading}
        title={<MovieListTitle>'{query}' 검색 결과</MovieListTitle>}
        movieList={data.FindMovie}
      />
    )}
  </QueueAnim>
);

export default SearchPresenter;
