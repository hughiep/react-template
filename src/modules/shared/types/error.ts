class APIError extends Error {
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

const handleError = (error: Error) => {
  if (process.env.NODE_ENV === 'development') {
    if (error instanceof APIError) {
      console.error(`Unhandled API Error:`, error)
    } else {
      console.error(`Unhandled Application Error:`, error)
    }
  } else {
    console.error(`Unexpected Application Error Occurred`)
  }
}

window.onerror = (_message, _source, _lineno, _colno, error) => {
  if (error) handleError(error)
  return false
}

export const ErrorCode = {
  NETWORK_ERROR: 'NETWORK_ERROR',
}

export { APIError, handleError }
