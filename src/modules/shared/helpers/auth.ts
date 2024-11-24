import { storageKey } from '../constants/storage'

export const getAccessToken = () =>
  window.localStorage.getItem(storageKey.auth.acessToken)
export const getRefreshToken = () =>
  window.localStorage.getItem(storageKey.auth.refreshToken)

export const setAccessToken = (accessToken: string) =>
  window.localStorage.set(storageKey.auth.acessToken, accessToken)

export const setRefreshToken = (refreshToken: string) =>
  window.localStorage.set(storageKey.auth.refreshToken, refreshToken)
