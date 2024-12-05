import { Module } from '@nestjs/common';

import { FacadeModule } from '@api/facade/facade.module';

import { UserController } from '@api/controller';

@Module({
  imports: [FacadeModule],
  controllers: [UserController],
})
export class ControllerModule {}
