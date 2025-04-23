import { storageKeys } from '../constants/storage'

export const getAccessToken = () =>
  window.localStorage.getItem(storageKeys.auth.acessToken)

export const getRefreshToken = () =>
  window.localStorage.getItem(storageKeys.auth.refreshToken)

export const setAccessToken = (accessToken: string): void => {
  window.localStorage.setItem(storageKeys.auth.acessToken, accessToken)
}

export const setRefreshToken = (refreshToken: string): void => {
  window.localStorage.setItem(storageKeys.auth.refreshToken, refreshToken)
}

export const removeTokens = (): void => {
  window.localStorage.removeItem(storageKeys.auth.acessToken)
  window.localStorage.removeItem(storageKeys.auth.refreshToken)
}
