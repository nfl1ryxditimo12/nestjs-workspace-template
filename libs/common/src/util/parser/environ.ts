import { exit } from 'process';
import { Logger } from '@nestjs/common';
import { path } from 'app-root-path';

import dotenv = require('dotenv');

export type NODE_ENVIRON = 'production' | 'development' | 'local' | 'test';

const logger = new Logger('Environ');
const environ = process.env.NODE_ENV as NODE_ENVIRON;

if (environ === 'production') {
  dotenv.config({ path: `${path}/env/.env` });
} else if (environ === 'development') {
  dotenv.config({ path: `${path}/env/.env.dev` });
} else if (environ === 'local') {
  dotenv.config({ path: `${path}/env/.env.local` });
} else if (environ === 'test') {
  dotenv.config({ path: `${path}/env/.env.test` });
} else {
  logger.error('NODE_ENV must be set to Mandatory.');
}

export const Environ = {
  // Server Config
  NODE_ENV: environ as NODE_ENVIRON,
  SERVER_PORT: +process.env.SERVER_PORT || 3000,
  SERVICE_NAME: 'nuvilab_test',

  // Auth Config
  JWT_SECRET: process.env.JWT_SECRET,

  // Database Config
  DATABASE_HOST: process.env.DATABASE_HOST,
  DATABASE_PORT: +process.env.DATABASE_PORT,
  DATABASE_DATABASE: process.env.DATABASE_DATABASE,
  DATABASE_USER: process.env.DATABASE_USER,
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,

  // Redis Config
  REDIS_HOST: process.env.REDIS_HOST,
  REDIS_PORT: +process.env.REDIS_PORT,
} as const;
export type Environ = (typeof Environ)[keyof typeof Environ];

for (const key in Environ) {
  if (!Environ[key]) {
    logger.error(`Required properties [${key}] is missing.`);
    exit(1);
  }
}
