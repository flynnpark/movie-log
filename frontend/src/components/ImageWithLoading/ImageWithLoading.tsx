import React, { useState } from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
  display: flex;
  margin-right: 5px;
  justify-content: center;
`;

const Image = styled.img`
  display: flex;
`;

interface IProps {
  imageURL: string;
  alt: string | undefined;
}

const ImageWithLoading: React.FunctionComponent<IProps> = ({
  imageURL,
  alt
}) => {
  const [loading, setLoading] = useState(true);
  return (
    <ImageContainer>
      {loading && <div>Loading...</div>}
      <Image src={imageURL} alt={alt} onLoad={() => setLoading(false)} />
    </ImageContainer>
  );
};

export default ImageWithLoading;
