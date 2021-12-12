import * as React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider as BaseThemeProvider, useFela } from 'react-fela'

import getThemeColors from './getThemeColors'
import getVariables from './getVariables'

import El from '../components/el'

import useConfig from '../config/useConfig'

export default function ThemeProvider({ theme, children }) {
  const { renderer } = useFela()
  const { theming } = useConfig()

  const { core, defaultTheme, variants } = theming

  const themeName = theme || defaultTheme

  if (!variants[themeName]) {
    throw new Error(
      `The theme variant "${themeName}" could not be found. Please provide it as part of the "theming" configuration.`
    )

    return null
  }

  const { tokens = {}, colors = {}, ...rest } = variants[themeName]

  const appliedTheme = {
    typography: {},
    ...core,
    ...rest,
    colors: {
      ...getThemeColors(core.colors),
      ...getThemeColors(colors),
    },
    tokens: {
      ...core.tokens,
      ...getThemeColors(tokens, 't-'),
    },
  }

  if (renderer) {
    renderer.renderStatic(
      {
        ...getVariables(core.colors),
        ...getVariables(colors),
        ...getVariables(tokens, 't-'),
      },
      '.' + themeName + '-theme'
    )
  }

  return (
    <BaseThemeProvider theme={appliedTheme}>
      <El className={themeName + '-theme'} extend={{ display: 'contents' }}>
        {children}
      </El>
    </BaseThemeProvider>
  )
}

ThemeProvider.propTypes = {
  theme: PropTypes.string,
}
