import { useState, useEffect } from 'react'

import debounce from '../utils/debounce'

import useConfig from '../config/useConfig'

let scrollPosition = 0

export default function useScrollBlockingOverlay(
  defaultVisible = false,
  maxWidth
) {
  const { activeOverlayCount, setActiveOverlayCount } = useConfig()
  const [overlayVisible, setOverlayVisible] = useState(defaultVisible)

  function setVisible(value) {
    if (!maxWidth || window.innerWidth <= maxWidth) {
      setActiveOverlayCount((count) => Math.max(0, count + (value ? 1 : -1)))
      setOverlayVisible(value)
    }
  }

  useEffect(() => {
    if (!maxWidth || window.innerWidth <= maxWidth) {
      setActiveOverlayCount((count) => (count + defaultVisible ? 1 : 0))

      setOverlayVisible(defaultVisible)
    }
  }, [defaultVisible])

  useEffect(() => {
    const scrollContainer = document.body

    if (activeOverlayCount > 0 && scrollContainer.style.position !== 'fixed') {
      scrollPosition = window.pageYOffset

      scrollContainer.style.overflowY = 'scroll'
      scrollContainer.style.position = 'fixed'
      scrollContainer.style.top = `-${scrollPosition}px`
      scrollContainer.style.width = '100%'
    } else if (
      activeOverlayCount === 0 &&
      scrollContainer.style.position === 'fixed'
    ) {
      scrollContainer.style.removeProperty('overflow-y')
      scrollContainer.style.removeProperty('position')
      scrollContainer.style.removeProperty('top')
      scrollContainer.style.removeProperty('width')
      window.scrollTo(0, scrollPosition)
    }

    if (overlayVisible && maxWidth !== undefined) {
      const handleResize = debounce(() => {
        if (window.innerWidth > maxWidth) {
          setVisible(false)
        }
      }, 250)

      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [overlayVisible])

  return [overlayVisible, setVisible]
}
