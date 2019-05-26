import { NextFunction, Request, Response } from 'express';
import passport from 'passport';
import FacebookTokenStrategy, { VerifyFunction } from 'passport-facebook-token';
import { ExtractJwt, Strategy, VerifiedCallback } from 'passport-jwt';
import User from './entity/User';

export interface JWTPayload {
  id: number;
}

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('JWT'),
  secretOrKey: process.env.JSON_WEB_TOKEN || 'DEFAULT_KEY'
};

const facebookAppId: string = process.env.FACEBOOK_APP_ID || '';
const facebookAppSecret: string = process.env.FACEBOOK_APP_SECRET || '';

const verifyJWTUser = async (payload: JWTPayload, done: VerifiedCallback) => {
  try {
    const user = await User.findOne({ id: payload.id });
    if (user) {
      return done(null, user);
    }
    return done(null, false);
  } catch (error) {
    return done(error, false);
  }
};

const verifyFacebookUser: VerifyFunction = async (
  accessToken,
  refreshToken,
  profile,
  done
) => {
  try {
    let user = await User.findOne({ facebookId: profile.id });
    if (user) {
      return done(null, user);
    }
    user = await User.create({
      email: profile.emails[0].value,
      name: profile.displayName,
      avatar: profile.photos[0].value,
      facebookId: profile.id
    }).save();
    return done(null, user);
  } catch (error) {
    return done(error, false);
  }
};

export const passportAuthenticate = (
  req: Request,
  res: Response,
  next: NextFunction
) =>
  passport.authenticate(
    ['jwt', 'facebook-token'],
    { session: false },
    (error: Error, user: User | false) => {
      if (error) {
        console.log(error);
      }
      if (user) {
        req.user = user;
      }
      next();
    }
  )(req, res, next);

passport.use(new Strategy(jwtOptions, verifyJWTUser));
passport.use(
  new FacebookTokenStrategy(
    {
      clientID: facebookAppId,
      clientSecret: facebookAppSecret
    },
    verifyFacebookUser
  )
);
passport.initialize();
