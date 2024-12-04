import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

import { CreateUserDto } from '@domain/user';
import { UserEntity } from '@database/entity';

@Injectable()
export class UserRepository extends Repository<UserEntity> {
  constructor(datasource: DataSource) {
    super(UserEntity, datasource.createEntityManager());
  }

  async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    return await this.save(this.create(createUserDto));
  }
}
