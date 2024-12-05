import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { initializeTransactionalContext } from 'typeorm-transactional';

import { AppModule } from '@api/app.module';

import { Environ, GlobalExceptionFilter, TrimPipe } from '@common/util';

(async () => {
  initializeTransactionalContext();

  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');
  app.useGlobalFilters(new GlobalExceptionFilter());
  app.useGlobalPipes(
    new TrimPipe(),
    new ValidationPipe({ transform: true, whitelist: true, forbidNonWhitelisted: true }),
  );

  await app.listen(Environ.SERVER_PORT, () => {
    console.log(`======= NODE ENV: ${Environ.NODE_ENV} =======`);
    console.log(`🚀 API server launched`);
    console.log(`🚀 App listening on the port ${Environ.SERVER_PORT}`);
  });
})();
