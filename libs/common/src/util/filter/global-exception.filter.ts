import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Response } from 'express';

import { Environ, ExceptionStrategy } from '@common/util';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter<Error> {
  constructor() {}

  catch = async (exception: Error, host: ArgumentsHost) => {
    const response: Response = host.switchToHttp().getResponse();
    const formattedException = ExceptionStrategy.format(exception);

    if (Environ.NODE_ENV === 'production') {
      delete formattedException.identifier;
      delete formattedException.reason;
    }

    response.status(formattedException.status).json(formattedException.to());
  };
}
