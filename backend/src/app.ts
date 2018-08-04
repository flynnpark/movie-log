import { NextFunction, Response } from 'express';
import { GraphQLServer } from 'graphql-yoga';
import cors from 'cors';
import logger from 'morgan';
import helmet from 'helmet';
import schema from './schema';
import { decodeJWT } from './utils/jwt';

class App {
  public app: GraphQLServer;

  constructor() {
    this.app = new GraphQLServer({
      schema,
      context: req => {
        return {
          req: req.request,
        };
      },
    });
    this.setMiddlewares();
  }

  private setMiddlewares = (): void => {
    this.app.express.use(cors());
    this.app.express.use(logger('dev'));
    this.app.express.use(helmet());
    this.app.express.use(this.jwt);
  };

  private jwt = async (
    req,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const token = req.get('X-JWT');
    if (token) {
      const user = await decodeJWT(token);
      if (user) {
        req.user = user;
      } else {
        req.user = undefined;
      }
    }
    next();
  };
}

export default new App().app;
