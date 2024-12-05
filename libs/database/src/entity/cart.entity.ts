import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { BaseEntity, ProductEntity, UserEntity } from '@database/entity';

@Entity('carts')
export class CartEntity extends BaseEntity {
  @Column({ name: 'user_id', type: 'bigint' })
  userId: string;

  @Column({ name: 'product_id', type: 'bigint' })
  productId: string;

  @ManyToOne(() => UserEntity, (userEntity) => userEntity.cartEntities)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id', foreignKeyConstraintName: 'fk_carts_user_id' })
  userEntity: UserEntity;

  @ManyToOne(() => ProductEntity, (productEntity) => productEntity.cartEntities)
  @JoinColumn({ name: 'product_id', referencedColumnName: 'id', foreignKeyConstraintName: 'fk_carts_product_id' })
  productEntity: ProductEntity;
}
