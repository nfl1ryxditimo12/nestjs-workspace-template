import { BadRequestException, NotFoundException } from '@nestjs/common';

import { CommonException, ExceptionCode } from '@domain/common';

export class ExceptionStrategy {
  private static getCode = (exception: Error): ExceptionCode => {
    if (exception instanceof BadRequestException) {
      return ExceptionCode.INVALID_INPUT;
    } else if (exception instanceof NotFoundException) {
      return ExceptionCode.API_NOT_FOUND;
    } else {
      return ExceptionCode.UNKNOWN_SERVER_ERROR;
    }
  };

  private static getMessage = (exception: Error): string => {
    if (exception instanceof BadRequestException) {
      const reason = exception.getResponse()['message'][0];
      const target = reason.split(' ')[0];
      return `${target} 입력값이 올바르지 않습니다. 다시 확인해주세요.`;
    } else if (exception instanceof NotFoundException) {
      return 'API Not Found';
    } else {
      return exception.message;
    }
  };

  private static getReason = (exception: Error): string => {
    if (exception instanceof BadRequestException) {
      return exception.getResponse()['message'][0];
    } else if (exception instanceof CommonException) {
      return exception.reason;
    } else {
      return null;
    }
  };

  public static format = (exception: Error): CommonException => {
    if (exception instanceof CommonException) return exception;

    const code = this.getCode(exception);
    const message = this.getMessage(exception);
    const reason = this.getReason(exception);

    return new CommonException(code, {
      stack: exception.stack,
      message: message,
      reason: reason,
      origin: exception instanceof CommonException ? exception.origin : exception,
    });
  };
}
