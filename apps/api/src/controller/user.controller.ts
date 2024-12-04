import { Controller } from '@nestjs/common';

import { UserFacade } from '@api/facade';

@Controller('user')
export class UserController {
  constructor(private readonly userFacade: UserFacade) {}
}
