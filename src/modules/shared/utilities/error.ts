export class BaseError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'BaseError'
    this.message = message

    if (process.env.NODE_ENV === 'development') {
      Object.setPrototypeOf(this, new.target.prototype) // restore prototype chain
      // This is necessary for the correct instanceof checks
      Error.captureStackTrace(this, this.constructor)
    }
  }
}

const handleError = (error: Error) => {
  if (process.env.NODE_ENV === 'development') {
    console.error(`Unhandled Application Error:`, error)
  } else {
    console.error(`Unexpected Application Error Occurred`)
  }
}

window.onerror = (_message, _source, _lineno, _colno, error) => {
  if (error) handleError(error)
  return false
}

export { handleError }
