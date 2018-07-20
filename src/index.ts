import { Options } from 'graphql-yoga';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import connectionOptions from './ormconfig';
import app from './app';

const PORT: number | string = process.env.PORT || 4000;
const PLAYGROUND_ENDPOINT: string = '/playground';
const GRAPHQL_ENDPOINT: string = '/graphql';

const appOptions: Options = {
  port: PORT,
  playground: PLAYGROUND_ENDPOINT,
  endpoint: GRAPHQL_ENDPOINT
};

const handleAppStart = () => console.log(`Listening on port ${PORT}`);

// createConnection(connectionOptions)
//   .then(async connection => {})
//   .catch(error => console.log(error));

app.start(appOptions, handleAppStart);
