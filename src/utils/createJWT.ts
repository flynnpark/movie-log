import jwt from 'jsonwebtoken';

const createJWT = (id: number): string => {
  const token = jwt.sign(
    {
      id,
    },
    process.env.JSON_WEB_TOKEN || 'DEFAULT_TOKEN'
  );
  return token;
};

export default createJWT;
