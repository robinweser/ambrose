export default function debounce(handler, delay) {
  let timeout

  return () => {
    clearTimeout(timeout)
    timeout = setTimeout(handler, delay)
  }
}
