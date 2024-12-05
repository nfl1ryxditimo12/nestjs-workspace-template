import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

import { OrderEntity } from '@database/entity';

@Injectable()
export class OrderRepository extends Repository<OrderEntity> {
  constructor(datasource: DataSource) {
    super(OrderEntity, datasource.createEntityManager());
  }
}
