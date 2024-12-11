/**
 * JWT api mock promise
 */
const access = 'access'
export const jwtMock = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        access,
      })
    }, 1000)
  })
}

/**
 * JWT api mock promise
 */
const accessRefresh = ''

export const jwtMockRefresh = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        access: accessRefresh,
      })
    }, 1000)
  })
}

/**
 * JWT get me mock promise
 */

export const getMe = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        email: '',
      })
    }, 1000)
  })
}
