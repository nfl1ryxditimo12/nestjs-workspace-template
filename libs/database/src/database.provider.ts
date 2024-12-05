import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

import { Environ } from '@common/util';
import { AuthorizationEntity, CartEntity, OrderEntity, ProductEntity, UserEntity } from '@database/entity';

@Injectable()
export class DatabaseProvider implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    const isDebugMode = Environ.NODE_ENV === 'local' || Environ.NODE_ENV === 'test';

    return {
      type: 'mysql',
      host: Environ.DATABASE_HOST,
      port: Environ.DATABASE_PORT,
      database: Environ.DATABASE_DATABASE,
      username: Environ.DATABASE_USER,
      password: Environ.DATABASE_PASSWORD,
      synchronize: isDebugMode,
      logging: isDebugMode ? 'all' : ['error'],
      logger: isDebugMode ? 'advanced-console' : 'file', // todo: Add custom logger (https://orkhan.gitbook.io/typeorm/docs/logging)
      entities: [UserEntity, AuthorizationEntity, ProductEntity, CartEntity, OrderEntity],
      charset: 'utf8mb4_general_ci',
      timezone: 'Z',
    } as TypeOrmModuleOptions;
  }
}
