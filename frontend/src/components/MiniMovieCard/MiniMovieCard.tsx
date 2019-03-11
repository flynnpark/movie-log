import React from 'react';
import { Card } from 'antd';
import { MovieItem } from 'src/types/local';
import { Link } from 'react-router-dom';

const MiniMovieCard: React.FunctionComponent<MovieItem> = ({
  id,
  poster_path,
  title
}) => (
  <Link to={`/movie/${id}`}>
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
  </Link>
);

export default MiniMovieCard;
