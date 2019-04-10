import React from 'react';
import { Card, Tooltip } from 'antd';
import { MovieItem } from 'src/types/local';
import { Link } from 'react-router-dom';

const MiniMovieCard: React.FunctionComponent<MovieItem> = ({
  id,
  poster_path,
  title
}) => (
  <Link to={`/movie/${id}`}>
    <Tooltip title={title}>
      <Card
        cover={
          <img
            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${poster_path}`}
            alt={title}
          />
        }
        bodyStyle={{ display: 'none' }}
      />
    </Tooltip>
  </Link>
);

export default MiniMovieCard;
