import { useRouteError, isRouteErrorResponse } from 'react-router-dom'

export default function ErrorBoundary() {
  const error = useRouteError()

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4 text-center">
      <div>
        <h1 className="text-9xl font-extrabold text-zinc-900">Oops!</h1>
        <p className="italic">
          Looks like something went wrong. Don&apos;t worry, we&apos;re on it.
        </p>
      </div>

      <div className="font-medium text-red-800">
        {isRouteErrorResponse(error) ? (
          <div>
            <h2>{error.status}</h2>
            <p>{error.statusText}</p>
            {error.data?.message && <p>{error.data.message}</p>}
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

      <button
        onClick={() => (window.location.href = '/')}
        className="underline"
      >
        Go to Home
      </button>
    </div>
  )
}
