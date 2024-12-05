import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { OrderStatus } from '@domain/order';
import { BaseEntity, ProductEntity, UserEntity } from '@database/entity';

@Entity('orders')
export class OrderEntity extends BaseEntity {
  @Column({ name: 'user_id', type: 'bigint' })
  userId: string;

  @Column({ name: 'product_id', type: 'bigint' })
  productId: string;

  @Column({ type: 'enum', enum: OrderStatus })
  status: OrderStatus;

  @ManyToOne(() => UserEntity, (userEntity) => userEntity.orderEntities)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id', foreignKeyConstraintName: 'fk_orders_user_id' })
  userEntity: UserEntity;

  @ManyToOne(() => ProductEntity, (productEntity) => productEntity.orderEntities)
  @JoinColumn({ name: 'product_id', referencedColumnName: 'id', foreignKeyConstraintName: 'fk_orders_product_id' })
  productEntity: ProductEntity;
}
