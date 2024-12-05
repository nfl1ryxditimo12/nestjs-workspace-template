import { Module } from '@nestjs/common';

import { ControllerModule } from '@api/controller/controller.module';
import { FacadeModule } from '@api/facade/facade.module';
import { ServiceModule } from '@api/service/service.module';
import { DatabaseModule } from '@database/database.module';

@Module({
  imports: [ControllerModule, FacadeModule, ServiceModule, DatabaseModule],
})
export class AppModule {}
