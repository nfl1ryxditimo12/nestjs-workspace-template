import { exit } from 'process';
import { Logger, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource, DataSourceOptions } from 'typeorm';
import { addTransactionalDataSource } from 'typeorm-transactional';

import { Environ } from '@common/environ';
import { DatabaseProvider } from '@database/database.provider';
import { UserRepository } from '@database/repository';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: DatabaseProvider,
      dataSourceFactory: async (options?: DataSourceOptions): Promise<DataSource> => {
        if (!options) {
          new Logger(DatabaseModule.name).error('TypeOrmModuleOptions must be set to Mandatory');
          exit(1);
        }

        const dataSource = await addTransactionalDataSource(new DataSource(options)).initialize();
        const queries = (await dataSource.driver.createSchemaBuilder().log()).upQueries;

        if (Environ.NODE_ENV !== 'production' && queries.length > 0) {
          console.log(`${queries.length} schema differences detected in current connection.`);
        }

        return dataSource;
      },
    }),
  ],
  providers: [UserRepository],
  exports: [UserRepository],
})
export class DatabaseModule {}