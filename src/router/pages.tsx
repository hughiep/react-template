import loadable from '@loadable/component'

const LoginPage = loadable(() => import('@/modules/auth'))

export { LoginPage }
