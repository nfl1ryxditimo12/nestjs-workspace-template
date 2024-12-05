import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import * as bcrypt from 'bcrypt';
import { Strategy } from 'passport-local';

import { CommonException, ExceptionCode } from '@domain/common';
import { UserRepository } from '@database/repository';

@Injectable()
export class LocalAuthStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userRepository: UserRepository) {
    super();
  }

  validate = async (username: string, password: string): Promise<any> => {
    const user = await this.userRepository.findOneBy({ username });

    if (!user) {
      throw CommonException.to(ExceptionCode.NOT_FOUND_USER);
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw CommonException.to(ExceptionCode.AUTHORIZATION_FAILED);
    }

    return user;
  };
}
