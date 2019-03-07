import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';

interface IProps {
  id: number;
  poster_path: string | null;
  title: string;
  releaseYear: number;
}

const MovieCardPresenter: React.FunctionComponent<IProps> = ({
  id,
  poster_path,
  title,
  releaseYear
}) => (
  <Link to={`/movie/${id}`}>
    <Card
      hoverable={true}
      cover={
        <img
          src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${poster_path}`}
          alt={title}
        />
      }
    >
      <Card.Meta title={title} description={<div>{releaseYear}</div>} />
    </Card>
  </Link>
);

export default MovieCardPresenter;
