import { useState, useEffect } from 'react'
import { useFela } from 'react-fela'

import debounce from '../utils/debounce'

export default function useBreakpoint(breakpoint, delay = 250) {
  const [isMatching, setMatching] = useState(false)
  const { theme } = useFela()

  const query = theme.breakpoints[breakpoint].substr(7)

  useEffect(() => {
    const handleResize = debounce(
      () => setMatching(window.matchMedia(query).matches),
      delay
    )

    // initial check
    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return isMatching
}
