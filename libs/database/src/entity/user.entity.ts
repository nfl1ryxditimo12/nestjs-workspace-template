import { Column, Entity } from 'typeorm';

import { AccountRole } from '@domain/user';
import { BaseEntity } from '@database/entity';

@Entity('users')
export class UserEntity extends BaseEntity {
  @Column({ type: 'varchar' })
  username: string;

  @Column({ type: 'varchar' })
  password: string;

  @Column({ type: 'enum', enum: AccountRole })
  role: AccountRole;
}
