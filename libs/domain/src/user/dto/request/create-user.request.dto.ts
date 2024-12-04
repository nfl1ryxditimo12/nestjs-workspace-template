import { IsEnum, IsNotEmpty, IsString, Length } from 'class-validator';

import { AccountRole, CreateUserDto } from '@domain/user';

export class CreateUserRequestDto implements CreateUserDto {
  @IsNotEmpty({ message: 'Username is required' })
  @IsString({ message: 'Username must be a string' })
  @Length(1, 20, { message: 'Username must be between 1 and 20 characters' })
  username: string;

  @IsNotEmpty({ message: 'Password is required' })
  @IsString({ message: 'Password must be a string' })
  @Length(8, 20, { message: 'Password must be between 8 and 20 characters' })
  password: string;

  @IsNotEmpty({ message: 'Role is required' })
  @IsEnum(AccountRole, { message: 'Invalid role' })
  role: AccountRole;
}
