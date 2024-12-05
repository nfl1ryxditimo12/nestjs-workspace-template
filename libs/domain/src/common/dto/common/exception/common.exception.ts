import { HttpStatus } from '@nestjs/common';

import {
  ExceptionCode,
  ExceptionConfig,
  ExceptionDefinition,
  ExceptionIdentifier,
  ExceptionPayload,
} from '@domain/common';

export class CommonException extends Error implements ExceptionPayload {
  status: HttpStatus;
  code: ExceptionCode;
  message: string;
  identifier?: ExceptionIdentifier;
  reason?: string;
  stack?: string;
  origin?: Error;
  occuredAt: string;

  constructor(code: ExceptionCode, options?: ExceptionConfig) {
    super();

    const excpetion = ExceptionDefinition.get(code) || ExceptionDefinition.get(ExceptionCode.UNKNOWN_SERVER_ERROR);
    this.status = excpetion.status;
    this.code = excpetion.code;
    this.name = excpetion.identifier;
    this.identifier = excpetion.identifier;
    this.stack = options?.stack || this.stack;
    this.message = options?.message || excpetion.message;
    this.reason = options?.reason || excpetion.reason;
    this.origin = options?.origin;
    this.occuredAt = new Date().toISOString();
  }

  public to = (): ExceptionPayload => {
    return {
      status: this.status,
      code: this.code,
      identifier: this.identifier,
      message: this.message,
      reason: this.reason,
      occuredAt: this.occuredAt,
    };
  };

  public static to = (code: ExceptionCode, options?: ExceptionConfig): ExceptionPayload => {
    return new CommonException(code, options).to();
  };
}
