import * as React from 'react'

import VisuallyHidden from '../components/visuallyHidden'

export default function useIconLink(title, url) {
  const linkProps = {
    title,
    href: url,
  }

  const iconProps = {
    'aria-hidden': true,
    focusable: false,
  }

  const label = <VisuallyHidden>{title}</VisuallyHidden>

  return {
    linkProps,
    iconProps,
    label,
  }
}
