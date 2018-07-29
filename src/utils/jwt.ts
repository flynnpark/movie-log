import jwt from 'jsonwebtoken';
import User from '../entity/User';

const TOKEN_KEY = process.env.JSON_WEB_TOKEN || 'DEFAULT_KEY';

const createJWT = (id: number): string => {
  const token = jwt.sign({ id }, TOKEN_KEY);
  return token;
};

const decodeJWT = async (token: string): Promise<User | undefined> => {
  try {
    const decoded: any = jwt.verify(token, TOKEN_KEY);
    const { id } = decoded;
    const user = await User.findOne({ id });
    return user;
  } catch (e) {
    return undefined;
  }
};

export { createJWT, decodeJWT };
