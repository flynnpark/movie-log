import { GraphQLServer } from 'graphql-yoga';
import cors from 'cors';
import logger from 'morgan';
import helmet from 'helmet';
import schema from './schema';
import './passport';
import { authenticateJwt } from './passport';

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
    express.use(authenticateJwt);
  };
}

export default new App().app;
