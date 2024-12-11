export default function NotFoundPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4 text-center">
      <div>
        <h1 className="text-9xl font-extrabold text-cyan-950">404</h1>
        <p>Page Not Found</p>
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
