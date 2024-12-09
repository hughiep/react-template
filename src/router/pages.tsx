import loadable from '@loadable/component'

const LoginPage = loadable(() => import('@/modules/auth'), {
  fallback: <div>Loading...</div>,
})

export { LoginPage }
