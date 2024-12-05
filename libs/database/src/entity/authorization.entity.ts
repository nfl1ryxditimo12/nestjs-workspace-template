import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { BaseEntity, UserEntity } from '@database/entity';

@Entity('authorizations')
export class AuthorizationEntity extends BaseEntity {
  @Column({ name: 'user_id', type: 'bigint' })
  userId: string;

  @Column({ type: 'varchar' })
  token: string;

  @ManyToOne(() => UserEntity, (userEntity) => userEntity.authorizationEntities)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id', foreignKeyConstraintName: 'fk_authorizations_user_id' })
  userEntity: UserEntity;
}
