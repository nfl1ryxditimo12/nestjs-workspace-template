import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

import { ProductCategory } from '@domain/product';
import { BaseEntity, CartEntity, OrderEntity, UserEntity } from '@database/entity';

@Entity('products')
export class ProductEntity extends BaseEntity {
  @Column({ name: 'user_id', type: 'bigint' })
  userId: string;

  @Column({ type: 'enum', enum: ProductCategory })
  category: ProductCategory;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  description: string;

  @OneToMany(() => CartEntity, (cartEntity) => cartEntity.userEntity)
  cartEntities: ProductEntity[];

  @OneToMany(() => OrderEntity, (orderEntity) => orderEntity.userEntity)
  orderEntities: ProductEntity[];

  @ManyToOne(() => UserEntity, (userEntity) => userEntity.productEntities)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id', foreignKeyConstraintName: 'fk_products_user_id' })
  userEntity: UserEntity;
}
