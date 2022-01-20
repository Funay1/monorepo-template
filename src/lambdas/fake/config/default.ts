import { ConnectionOptions } from 'typeorm';
import { join } from 'path';
import { ConnectOptions } from 'mongoose';
import { MenupostgresqlEntity } from '../entities/postgresql/MenuPostgresqlEntity';

const postgressConfig: ConnectionOptions = {
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: +process.env.DB_PORT! || 5432,
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    database: process.env.DB_NAME || 'postgres',
    entities: [MenupostgresqlEntity],
    migrations: [join(__dirname, '.', 'migrations/*.ts')],
    cli: {
        migrationsDir: join(__dirname, '.', 'migrations/'),
    },
    // synchronize: true,
} as ConnectionOptions;

const mongoOptions: ConnectOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
} as ConnectOptions;

const mongoConnectionData = {
    DB_USER: 'app_user',
    DB_PASS: 'app_password',
    DB_HOST: 'localhost',
    DB_PORT: 27017,
    DB_NAME: 'admin',
};

const MONGO_URI = `mongodb://${mongoConnectionData.DB_USER}:${mongoConnectionData.DB_PASS}@${mongoConnectionData.DB_HOST}:${mongoConnectionData.DB_PORT}/${mongoConnectionData.DB_NAME}`;

const mongoConfig = {
    uri: MONGO_URI,
    options: mongoOptions,
};

const config = {
    database: {
        postgress: postgressConfig,
        mongo: mongoConfig,
    },
};

export { config };
