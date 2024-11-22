import { IResponse } from '../types/response'

const UNAUTHORIZED_HTTP_STATUS = 401

const _lockedRequests = [] as {
  options: RequestInit
  reject: (reason: unknown) => void
  resolve: (value: any) => void
  url: string
  data?: FormData | object
}[]

let isTryingToRefresh = false

const authorizationHeader = (
  additionalHeaders: HeadersInit = {},
): HeadersInit => {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...additionalHeaders,
  }
  const token = getAccessToken()
  if (token) {
    Object.assign(headers, {
      Authorization: `Bearer ${token}`,
    })
  }
  return headers
}

const request = async <TData>(
  endpoint: string,
  method: RequestInit['method'],
  data?: FormData | object, // Need to specify in options
  options: Omit<RequestInit, 'method'> = {},
): Promise<IResponse<TData>> => {
  // Automatically determine if data is FormData or JSON

  const headers = authorizationHeader(options.headers)
  const body = options.body

  // if (data !== undefined) {
  //   if (data instanceof FormData) {
  //     delete header
  //   }

  //   body = data instanceof FormData ? data : JSON.stringify(data)
  // }

  // Remove Content-Type header if data is FormData because when FormData is used,
  // the browser automatically sets the Content-Type to multipart/form-data and generates a unique boundary string

  const reqOptions = {
    ...options,
    body,
    headers,
    method,
  }

  const url = `${API_BASE_URL}${endpoint}`
  const response = await fetch(url, reqOptions)

  if (
    endpoint !== REFRESH_TOKEN_API &&
    response.status === STATUS_CODE_UNAUTHORIZED
  ) {
    if (!isTryingToRefresh) {
      // Lock all other requests until the access token is refreshed
      isTryingToRefresh = true

      try {
        const tokens = await tryRefreshAccessToken()
        setAccessToken(tokens.accessToken)
        setRefreshToken(tokens.refreshToken)

        // Unlock all locked requests and execute them
        lockedRequests.forEach((lockedRequest) => {
          // eslint-disable-next-line @typescript-eslint/no-shadow
          const { options, resolve, url, data } = lockedRequest
          void request(url, method, data, {
            ...options,
          })
            .then(resolve)
            .catch(lockedRequest.reject)
        })

        lockedRequests.length = 0

        // Retry the original request
        return await request(endpoint, method, data, options)
      } catch (error) {
        lockedRequests.forEach((lockedRequest) => {
          lockedRequest.reject(error)
        })
        lockedRequests.length = 0
        deleteAuthTokens()
        setTimeout(() => {
          window.location.href = '/login'
        }, TIME_OUT_BEFORE_REDIRECT)
      } finally {
        isTryingToRefresh = false
      }
    } else {
      // When the access token is being refreshed, lock the request and wait for the access token to be refreshed
      return new Promise((resolve, reject) => {
        lockedRequests.push({
          data,
          options: reqOptions,
          reject,
          resolve,
          url,
        })
      })
    }
  }

  const resData = await response.json()
  if (!response.ok) {
    throw new APIError(resData.message, resData.code, response)
  }

  return resData as IResponse<TData>
}

const get = <TResponse = any>(
  url: string,
  params?: Record<string, any>,
  options?: RequestInit,
) => {
  const formatParams = (paramsObj: Record<string, any>) => {
    const searchParams = new URLSearchParams()
    Object.entries(paramsObj).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        // Append each array element as a separate query parameter
        value.forEach((val) => {
          searchParams.append(key, val)
        })
      } else {
        searchParams.append(key, String(value))
      }
    })

    return searchParams
  }
  const queryString = params ? `?${formatParams(params).toString()}` : ''
  const fullUrl = `${url}${queryString}`
  return request<TResponse>(fullUrl, 'GET', undefined, options)
}

const del = <TResponse extends object>(
  url: string,
  data?: object,
  options?: RequestInit,
) => request<TResponse>(url, 'DELETE', data, options)

const post = <TResponse = any>(
  url: string,
  data?: object,
  options?: RequestInit,
) => request<TResponse>(url, 'POST', data, options)

const put = <TResponse = any>(
  url: string,
  data?: object,
  options?: RequestInit,
) => request<TResponse>(url, 'PUT', data, options)

const patch = <TResponse = any>(
  url: string,
  data?: object,
  options?: RequestInit,
) => request<TResponse>(url, 'PATCH', data, options)

export { get, del, post, put, patch }
