import { ConnectionOptions } from 'typeorm';

const connectionOptions: ConnectionOptions = {
  type: 'postgres',
  database: 'movielog',
  port: 5432,
  host: process.env.DB_ENDPOINT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  synchronize: true,
  logging: true,
  entities: [__dirname + '/entity/*{.ts,.js}'],
  migrations: [__dirname + '/migration/*{.ts,.js}'],
  cli: {
    entitiesDir: 'entity',
    migrationsDir: 'migration'
  }
};

export default connectionOptions;
