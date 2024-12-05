import { Module } from '@nestjs/common';

import { ServiceModule } from '@api/service/service.module';

import { UserFacade } from '@api/facade';

@Module({
  imports: [ServiceModule],
  providers: [UserFacade],
  exports: [UserFacade],
})
export class FacadeModule {}
