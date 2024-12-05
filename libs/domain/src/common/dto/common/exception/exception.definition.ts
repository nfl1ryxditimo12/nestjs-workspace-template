import { HttpStatus } from '@nestjs/common';

import { ExceptionCode, ExceptionPayload } from '@domain/common';

export const ExceptionDefinition: Map<ExceptionCode, ExceptionPayload> = new Map();

/** Common Error */
ExceptionDefinition.set(ExceptionCode.INVALID_INPUT, {
  status: HttpStatus.BAD_REQUEST,
  code: ExceptionCode.INVALID_INPUT,
  message: '잘못된 입렵입니다.',
  identifier: 'INVALID_INPUT',
  reason: null,
});
ExceptionDefinition.set(ExceptionCode.FORBIDDEN, {
  status: HttpStatus.FORBIDDEN,
  code: ExceptionCode.FORBIDDEN,
  message: '금지된 접근입니다.',
  identifier: 'FORBIDDEN',
  reason: null,
});
ExceptionDefinition.set(ExceptionCode.API_NOT_FOUND, {
  status: HttpStatus.NOT_FOUND,
  code: ExceptionCode.API_NOT_FOUND,
  message: 'API를 찾을 수 없습니다.',
  identifier: 'API_NOT_FOUND',
  reason: null,
});
ExceptionDefinition.set(ExceptionCode.UNKNOWN_SERVER_ERROR, {
  status: HttpStatus.INTERNAL_SERVER_ERROR,
  code: ExceptionCode.UNKNOWN_SERVER_ERROR,
  message: '알 수 없는 서버 오류입니다. 잠시 후 다시 시도해주세요.',
  identifier: 'UNKNOWN_SERVER_ERROR',
  reason: null,
});

/** Auth Error */
ExceptionDefinition.set(ExceptionCode.AUTHORIZATION_FAILED, {
  status: HttpStatus.UNAUTHORIZED,
  code: ExceptionCode.AUTHORIZATION_FAILED,
  message: '사용자 인증에 실패하였습니다. 다시 시도해주세요.',
  identifier: 'AUTHORIZATION_FAILED',
  reason: null,
});
ExceptionDefinition.set(ExceptionCode.INVALID_ACCESS_TOKEN, {
  status: HttpStatus.UNAUTHORIZED,
  code: ExceptionCode.INVALID_ACCESS_TOKEN,
  message: '액세스 토큰이 유효하지 않습니다. 다시 발급해주세요.',
  identifier: 'INVALID_ACCESS_TOKEN',
  reason: null,
});
ExceptionDefinition.set(ExceptionCode.INVALID_REFRESH_TOKEN, {
  status: HttpStatus.UNAUTHORIZED,
  code: ExceptionCode.INVALID_REFRESH_TOKEN,
  message: '로그인 정보가 만료되었습니다. 다시 로그인해주세요.',
  identifier: 'INVALID_REFRESH_TOKEN',
  reason: null,
});

/** User Error */
ExceptionDefinition.set(ExceptionCode.NOT_FOUND_USER, {
  status: HttpStatus.NOT_FOUND,
  code: ExceptionCode.NOT_FOUND_USER,
  message: '존재하지 않는 사용자입니다',
  identifier: 'NOT_FOUND_USER',
  reason: null,
});
ExceptionDefinition.set(ExceptionCode.DUPLICATED_USERNAME, {
  status: HttpStatus.BAD_REQUEST,
  code: ExceptionCode.DUPLICATED_USERNAME,
  message: '이미 사용중인 아이디입니다. 다른 아이디를 사용해주세요.',
  identifier: 'DUPLICATED_USERNAME',
  reason: null,
});
ExceptionDefinition.set(ExceptionCode.INSUFFICIENT_AUTHORITY, {
  status: HttpStatus.BAD_REQUEST,
  code: ExceptionCode.INSUFFICIENT_AUTHORITY,
  message: '접근 권한이 부족합니다.',
  identifier: 'INSUFFICIENT_AUTHORITY',
  reason: null,
});

/** Product Error */
ExceptionDefinition.set(ExceptionCode.NOT_FOUND_PRODUCT, {
  status: HttpStatus.NOT_FOUND,
  code: ExceptionCode.NOT_FOUND_PRODUCT,
  message: '존재하지 않는 상품입니다.',
  identifier: 'NOT_FOUND_PRODUCT',
  reason: null,
});
