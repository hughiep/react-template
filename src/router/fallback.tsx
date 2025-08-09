// https://reactrouter.com/upgrading/v6#v7_partialhydration
// Replacement for the fallbackElement, which is depricated in v7
// Useful in case our loaders take long time to resolve
export default function FallbackElement() {
  return <div>Fallback...</div>
}
