import { GraphQLServer } from 'graphql-yoga';
import cors from 'cors';
import logger from 'morgan';
import helmet from 'helmet';

class App {
  public app: GraphQLServer;

  constructor() {
    this.app = new GraphQLServer({});
  }

  private setMiddlewares = (): void => {
    this.app.express.use(cors());
    this.app.express.use(logger('dev'));
    this.app.express.use(helmet);
  };
}

export default new App().app;
