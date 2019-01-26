import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { findMovie } from 'src/types/local';
import MovieCardList from 'src/components/MovieCardList';

const MovieListTitle = styled.h1`
  font-size: 32px;
  margin-bottom: 25px;
`;

interface IProps {
  loading: boolean;
  query: string;
  data: findMovie | undefined;
}

const SearchPresenter: React.FunctionComponent<IProps> = props => {
  const { loading, query, data } = props;
  return (
    <>
      <Helmet>
        <title>'{query}' 검색 결과 | Movie-log</title>
      </Helmet>
      {data && (
        <MovieCardList
          loading={loading}
          title={<MovieListTitle>'{query}' 검색 결과</MovieListTitle>}
          movieList={data.FindMovie}
        />
      )}
    </>
  );
};

export default SearchPresenter;
