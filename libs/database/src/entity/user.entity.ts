import { Column, Entity, OneToMany } from 'typeorm';

import { AccountRole } from '@domain/user';
import { AuthorizationEntity, BaseEntity, CartEntity, OrderEntity, ProductEntity } from '@database/entity';

@Entity('users')
export class UserEntity extends BaseEntity {
  @Column({ type: 'varchar', unique: true })
  username: string;

  @Column({ type: 'varchar' })
  password: string;

  @Column({ type: 'enum', enum: AccountRole })
  role: AccountRole;

  @OneToMany(() => AuthorizationEntity, (authorizationEntity) => authorizationEntity.userEntity)
  authorizationEntities: AuthorizationEntity[];

  @OneToMany(() => ProductEntity, (productEntity) => productEntity.userEntity)
  productEntities: ProductEntity[];

  @OneToMany(() => CartEntity, (cartEntity) => cartEntity.userEntity)
  cartEntities: ProductEntity[];

  @OneToMany(() => OrderEntity, (orderEntity) => orderEntity.userEntity)
  orderEntities: ProductEntity[];
}
