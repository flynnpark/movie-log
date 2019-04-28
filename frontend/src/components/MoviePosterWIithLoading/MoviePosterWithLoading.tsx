import React, { useState } from 'react';
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
  title: string;
  posterPath: string | null;
}

const MoviePosterWithLoading: React.FC<IProps> = ({ title, posterPath }) => {
  const [loading, setLoading] = useState(true);
  return (
    <ImageWrapper>
      <ImagePlaceholder>
        <Icon type="picture" />
        <Image
          src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${posterPath}`}
          alt={title}
          style={loading ? { visibility: 'hidden' } : {}}
          onLoad={() => setLoading(false)}
        />
      </ImagePlaceholder>
    </ImageWrapper>
  );
};

export default MoviePosterWithLoading;
