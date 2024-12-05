import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

import { AuthorizationEntity } from '@database/entity';

@Injectable()
export class AuthorizationRepository extends Repository<AuthorizationEntity> {
  constructor(datasource: DataSource) {
    super(AuthorizationEntity, datasource.createEntityManager());
  }
}
