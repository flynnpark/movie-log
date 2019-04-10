import React, { useState } from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div<{ width: number; height: number }>`
  display: flex;
  margin-right: 5px;
  justify-content: center;
  ${props => `width: ${props.width}; height: ${props.height}`}
`;

const Image = styled.img`
  display: flex;
`;

interface IProps {
  imageURL: string;
  alt: string | undefined;
  width: number;
}

const ImageWithLoading: React.FunctionComponent<IProps> = ({
  imageURL,
  alt,
  width
}) => {
  const [loading, setLoading] = useState(true);
  const height = (width / 3) * 4.3;
  return (
    <ImageContainer width={width} height={height}>
      {loading && <div>Loading...</div>}
      <Image src={imageURL} alt={alt} onLoad={() => setLoading(false)} />
    </ImageContainer>
  );
};

export default ImageWithLoading;
