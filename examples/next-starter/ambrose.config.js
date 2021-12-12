import * as React from 'react'
import NextLink from 'next/link'

import core from './themes/core'
import light from './themes/light'
import dark from './themes/dark'

export default {
  forms: {
    defaultRequiredErrorMessage: 'This field is required.',
  },
  theming: {
    defaultTheme: 'light',
    core,
    variants: {
      light,
      dark,
    },
  },
  linkComponent: ({ children, href, ...linkProps }) => {
    if (!href) {
      return <p {...linkProps}>{children}</p>
    }

    if (typeof href === 'object' || href.startsWith('/')) {
      return (
        <NextLink href={href}>
          <a {...linkProps}>{children}</a>
        </NextLink>
      )
    }
    return (
      <a href={href} {...linkProps}>
        {children}
      </a>
    )
  },
}
