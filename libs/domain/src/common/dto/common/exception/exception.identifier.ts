export type ExceptionIdentifier =
  // Common Error
  | 'INVALID_INPUT'
  | 'FORBIDDEN'
  | 'API_NOT_FOUND'
  | 'UNKNOWN_SERVER_ERROR'

  // Auth Error
  | 'AUTHORIZATION_FAILED'
  | 'INVALID_ACCESS_TOKEN'
  | 'INVALID_REFRESH_TOKEN'

  // User Error
  | 'NOT_FOUND_USER'
  | 'DUPLICATED_USERNAME'
  | 'INSUFFICIENT_AUTHORITY'

  // Product Error
  | 'NOT_FOUND_PRODUCT';
