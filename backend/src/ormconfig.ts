import { ConnectionOptions } from 'typeorm';

const connectionOptions: ConnectionOptions = {
  type: 'postgres',
  database: 'movielog',
  entities: ['entity/**/*.*'],
  logging: false,
  // synchronize: true,
  host: process.env.DB_ENDPOINT,
  port: 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD
};

export default connectionOptions;
