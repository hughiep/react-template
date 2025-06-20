export default function NotFoundPage() {
  return (
    <div>
      <div>
        <h1>404</h1>
        <p>Page Not Found</p>
      </div>

      <button onClick={() => (window.location.href = '/')}>Go to Home</button>
    </div>
  )
}
