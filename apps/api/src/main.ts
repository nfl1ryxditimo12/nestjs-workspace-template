import { NestFactory } from '@nestjs/core';

import { AppModule } from '@api/app.module';

import { Environ } from '@common/environ';

(async () => {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  await app.listen(Environ.SERVER_PORT, () => {
    console.log(`======= NODE ENV: ${Environ.NODE_ENV} =======`);
    console.log(`🚀 API server launched`);
    console.log(`🚀 App listening on the port ${Environ.SERVER_PORT}`);
  });
})();
