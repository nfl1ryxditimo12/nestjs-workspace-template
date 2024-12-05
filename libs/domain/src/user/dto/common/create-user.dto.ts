import { AccountRole } from '@domain/user';

export interface CreateUserDto {
  username: string;
  password: string;
  role: AccountRole;
}
