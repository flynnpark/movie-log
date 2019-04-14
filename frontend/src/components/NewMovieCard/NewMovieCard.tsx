import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from 'antd';

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 150%;
  border-radius: 2px;
  transition: all 0.3s;
`;

const ImagePlaceholder = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
  justify-content: center;
  align-items: center;
  font-size: 60px;
  color: #bfbfbf;
  border-radius: 2px;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  border-radius: 2px;
`;

interface IProps {
  id: number;
  poster_path: string | null;
  title: string;
}

const NewMovieCard: React.FunctionComponent<IProps> = ({
  id,
  poster_path,
  title
}) => {
  const [loading, setLoading] = useState(true);
  return (
    <Link to={`/movie/${id}`}>
      <ImageWrapper>
        <ImagePlaceholder>
          <Icon type="picture" />
        </ImagePlaceholder>
        {poster_path ? (
          <Image
            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${poster_path}`}
            alt={title}
            style={loading ? { visibility: 'hidden' } : {}}
            onLoad={() => setLoading(false)}
          />
        ) : (
          <div>No Image</div>
        )}
      </ImageWrapper>
    </Link>
  );
};

export default NewMovieCard;
