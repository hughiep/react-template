import { BaseError } from '../utilities/error'

export class APIError extends BaseError {
  code: string
  cause: Error

  constructor(message: string, code: string, cause: Error) {
    super(message)
    this.name = 'APIError'
    this.message = message
    this.code = code
    this.cause = cause
  }
}

export const ErrorCode = {
  NETWORK_ERROR: 'NETWORK_ERROR',
}
