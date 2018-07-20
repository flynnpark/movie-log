import { GraphQLServer } from 'graphql-yoga';

class App {
  public app: GraphQLServer;

  constructor() {
    this.app = new GraphQLServer({});
  }
}

export default new App().app;
