import React from 'react';
import Helmet from 'react-helmet';
import MovieCardList from 'src/components/MovieCardList';
import { findMovie } from 'src/types/local';

interface IProps {
  query: string;
  data: findMovie | undefined;
}

const SearchPresenter: React.FunctionComponent<IProps> = props => {
  const { query, data } = props;
  return (
    <>
      <Helmet>
        <title>'{query}' 검색 결과 | Movie-log</title>
      </Helmet>
      {data && (
        <MovieCardList
          title={`'${query}' 검색 결과`}
          movieList={data.FindMovie}
        />
      )}
    </>
  );
};

export default SearchPresenter;
