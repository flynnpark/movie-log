import React from 'react';
import Helmet from 'react-helmet';
import MovieCardList from 'src/components/MovieCardList';

interface IProps {
  query: string;
  data: any;
}

const SearchPresenter: React.FunctionComponent<IProps> = props => {
  const {
    query,
    data: { FindMovie }
  } = props;
  return (
    <>
      <Helmet>
        <title>'{query}' 검색 결과 | Movie-log</title>
      </Helmet>
      <MovieCardList title={`'${query}' 검색 결과`} movieList={FindMovie} />
    </>
  );
};

export default SearchPresenter;
