import React from 'react';
import { Card } from 'antd';
import { MovieItem } from 'src/types/local';

const MiniMovieCard: React.FunctionComponent<MovieItem> = ({
  poster_path,
  title
}) => (
  <Card
    cover={
      <img
        src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${poster_path}`}
        alt={title}
        width={100}
      />
    }
    bodyStyle={{ display: 'none' }}
  />
);

export default MiniMovieCard;
