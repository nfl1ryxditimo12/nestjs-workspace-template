import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

import { CartEntity } from '@database/entity';

@Injectable()
export class CartRepository extends Repository<CartEntity> {
  constructor(datasource: DataSource) {
    super(CartEntity, datasource.createEntityManager());
  }
}
