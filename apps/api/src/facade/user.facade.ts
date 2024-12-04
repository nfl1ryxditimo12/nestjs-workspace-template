import { Injectable } from '@nestjs/common';

import { UserService } from '@api/service';

@Injectable()
export class UserFacade {
  constructor(private readonly userService: UserService) {}
}
