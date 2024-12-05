import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

import { ProductEntity } from '@database/entity';

@Injectable()
export class ProductRepository extends Repository<ProductEntity> {
  constructor(datasource: DataSource) {
    super(ProductEntity, datasource.createEntityManager());
  }
}
