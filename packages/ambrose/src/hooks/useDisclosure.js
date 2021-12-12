import { useState, useEffect, useCallback } from 'react'

export default function useDisclosure({ id, defaultExpanded }) {
  const [isExpanded, setExpanded] = useState(
    typeof defaultExpanded !== 'undefined' ? defaultExpanded : false
  )

  useEffect(() => {
    if (typeof defaultExpanded !== 'undefined') {
      setExpanded(defaultExpanded)
    }
  }, [defaultExpanded])

  const toggle = useCallback(() => setExpanded((expanded) => !expanded), [])

  const toggleProps = {
    id: id + '-toggle',
    onClick: toggle,
    type: 'button',
    'aria-expanded': isExpanded,
    'aria-controls': id + '-content',
  }
  const contentProps = {
    id: id + '-content',
    'aria-hidden': !isExpanded,
    'aria-labelledby': id + '-toggle',
  }

  return {
    toggleProps,
    contentProps,
    isExpanded,
    toggle,
  }
}
