import { HttpStatus } from '@nestjs/common';

import { ExceptionCode, ExceptionIdentifier } from '@domain/common';

export interface ExceptionPayload {
  status: HttpStatus;
  code: ExceptionCode;
  message?: string;
  identifier?: ExceptionIdentifier;
  reason?: string;
  occuredAt?: string;
}
