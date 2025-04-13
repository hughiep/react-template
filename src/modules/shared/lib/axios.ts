/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'

import {
  getAccessToken,
  getRefreshToken,
  setAccessToken,
  setRefreshToken,
} from '../../auth/helpers/storage'

const UNAUTHORIZED_STATUS_CODE = 401
const REFRESH_TOKEN_API = '/refresh-token'

/**
 * Indicate wheather or not accessToken is refreshing
 */
let isRefreshing = false

/**
 * When access token is refreshing by refresh token, queue 401 axios requests
 */
let failedRequestsQueue: {
  request: any
  resolve: (value: any) => void
  reject: (reason?: unknown) => void
}[] = []

/**
 * After refreshing, resolve or reject requests in queue if there is error or not
 */
const processQueue = (newAccessToken?: string, error?: unknown) => {
  failedRequestsQueue.forEach((prom) => {
    if (prom.request._retry && error) {
      prom.reject(error)
    } else {
      prom.request.headers.Authorization = `Bearer ${newAccessToken}`
      prom.resolve(axiosClient(prom.request))
    }
  })

  failedRequestsQueue = []
}

export const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 30_000,
  headers: {
    'Content-Type': 'application/json',
  },
})

axiosClient.interceptors.request.use(
  (config) => {
    const accessToken = getAccessToken()
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

axiosClient.interceptors.response.use(
  (response) => {
    return response.data
  },
  async (error) => {
    const originalRequest = error.config

    if (
      !originalRequest?._retry &&
      originalRequest?.url !== REFRESH_TOKEN_API &&
      error.response?.status === UNAUTHORIZED_STATUS_CODE
    ) {
      const refreshToken = getRefreshToken()
      if (!refreshToken) {
        return Promise.reject(error)
      }

      if (!isRefreshing) {
        isRefreshing = true

        try {
          const tokenData = await refreshAccessToken(refreshToken)
          setAccessToken(tokenData.accessToken)
          setRefreshToken(tokenData.refreshToken)

          isRefreshing = false
          processQueue(tokenData.accessToken)
          return await axiosClient(originalRequest)
        } catch {
          isRefreshing = false
          failedRequestsQueue.length = 0
          window.location.href = '/login'
        }
      } else {
        originalRequest._retry = true

        return new Promise((resolve, reject) =>
          failedRequestsQueue.push({
            request: originalRequest,
            resolve,
            reject,
          }),
        )
      }
    }

    return Promise.reject(error)
  },
)

async function refreshAccessToken(refreshToken: string) {
  const tokenData = await axiosClient.post<
    { refreshToken: string },
    { accessToken: string; refreshToken: string }
  >(REFRESH_TOKEN_API, { refreshToken })

  return tokenData
}
