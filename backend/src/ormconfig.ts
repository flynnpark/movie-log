import { ConnectionOptions } from "typeorm";

const connectionOptions: ConnectionOptions = {
  type: "postgres",
  database: "movielog",
  port: 5432,
  host: process.env.DB_ENDPOINT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  synchronize: true,
  logging: true,
  entities: ["entity/**/*.ts"],
  migrations: ["migration/**/*.ts"],
  cli: {
    entitiesDir: "entity",
    migrationsDir: "migration"
  }
};

export default connectionOptions;
