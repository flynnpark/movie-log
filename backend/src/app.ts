import cors from 'cors';
import { GraphQLServer } from 'graphql-yoga';
import helmet from 'helmet';
import logger from 'morgan';
import './passport';
import { passportAuthenticate } from './passport';
import schema from './schema';

class App {
  public app: GraphQLServer;

  constructor() {
    this.app = new GraphQLServer({
      schema,
      context: req => {
        return {
          req: req.request
        };
      }
    });
    this.setMiddlewares();
  }

  private setMiddlewares = (): void => {
    const { express } = this.app;
    express.use(cors());
    express.use(logger('dev'));
    express.use(helmet());
    express.use(passportAuthenticate);
  };
}

export default new App().app;
