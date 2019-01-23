import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';

interface IProps {
  id: number;
  poster: string | null;
  title: string;
  releaseYear: number;
}

const MovieCardPresenter: React.FunctionComponent<IProps> = ({
  id,
  poster,
  title,
  releaseYear
}) => (
  <Link to={`/movie/${id}`}>
    <Card
      hoverable={true}
      cover={
        <img
          src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${poster}`}
          alt={title}
        />
      }
    >
      <Card.Meta title={title} description={<div>{releaseYear}</div>} />
    </Card>
  </Link>
);

export default MovieCardPresenter;
