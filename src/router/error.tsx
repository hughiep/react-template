import { useRouteError, isRouteErrorResponse } from 'react-router-dom'

export default function ErrorBoundary() {
  const error = useRouteError()

  return (
    <div>
      <div>
        <h1>Oops!</h1>
        <p>
          Looks like something went wrong. Don&apos;t worry, we&apos;re on it.
        </p>
      </div>

      <div>
        {isRouteErrorResponse(error) ? (
          <div>
            <h2>{error.status}</h2>
            <p>{error.statusText}</p>
          </div>
        ) : (
          <div>
            <p>
              {(error instanceof Error && error.message) ||
                'An unexpected error occurred.'}
            </p>
          </div>
        )}
      </div>

      <button onClick={() => (window.location.href = '/')}>Go to Home</button>
    </div>
  )
}
