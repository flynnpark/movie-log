import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Card } from 'antd';

const MovieCard = styled(Card)`
  width: 204px;
  margin: 7px;
`;

const MovieCardPresenter = ({ id, poster, title, releaseYear }) => (
  <Link to={`/movie/${id}`}>
    <MovieCard
      hoverable={true}
      cover={
        <img
          src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${poster}`}
          alt={title}
        />
      }
    >
      <Card.Meta title={title} description={<div>{releaseYear}</div>} />
    </MovieCard>
  </Link>
);

export default MovieCardPresenter;
