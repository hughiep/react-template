/**
 * Base response interface for API responses.
 * It includes a generic type parameter T for the data type.
 * The metadata object contains pagination and request information.
 */
export interface IResponse<T> {
  data: T
  metadata: {
    limit: number
    page: number
    timestamp: number
    total: number
    totalPage: number
  }
}
