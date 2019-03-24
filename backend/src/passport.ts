import passport from 'passport';
import { Strategy, ExtractJwt, VerifiedCallback } from 'passport-jwt';
import { Request, Response, NextFunction } from 'express';
import User from './entity/User';

export interface JWTPayload {
  id: number;
}

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('JWT'),
  secretOrKey: process.env.JSON_WEB_TOKEN || 'DEFAULT_KEY'
};

const verifyUser = async (payload: JWTPayload, done: VerifiedCallback) => {
  try {
    const user = await User.findOne({ id: payload.id });
    if (user !== null) {
      return done(null, user);
    }
    return done(null, false);
  } catch (error) {
    return done(error, false);
  }
};

export const authenticateJwt = (
  req: Request,
  res: Response,
  next: NextFunction
) =>
  passport.authenticate(
    'jwt',
    { session: false },
    (error: Error, user: User | false) => {
      if (user) {
        req.user = user;
      }
      next();
    }
  )(req, res, next);

passport.use(new Strategy(jwtOptions, verifyUser));
passport.initialize();
