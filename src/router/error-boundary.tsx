import { useRouteError } from 'react-router'

export default function ErrorBoundary() {
  const error = useRouteError()

  console.error(error)
  // Uncaught ReferenceError: path is not defined
  return <div>Dang!</div>
}
