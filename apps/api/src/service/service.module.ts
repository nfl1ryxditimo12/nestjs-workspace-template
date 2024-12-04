import { Module } from '@nestjs/common';

import { UserService } from '@api/service';

@Module({
  imports: [],
  providers: [UserService],
  exports: [UserService],
})
export class ServiceModule {}
