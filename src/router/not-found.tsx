export default function NotFoundPage() {
  return (
    <div className="">
      <div>
        <h1 className="">404</h1>
        <p>Page Not Found</p>
      </div>

      <button onClick={() => (window.location.href = '/')} className="">
        Go to Home
      </button>
    </div>
  )
}
