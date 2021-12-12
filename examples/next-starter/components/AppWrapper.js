import * as React from 'react'
import { StyleProvider, ThemeProvider, ConfigProvider } from 'ambrose'
import { arrayEach } from 'fast-loops'

import createFelaRenderer from '../styling/createFelaRenderer'

import config from '../ambrose.config'

const staticStyle = [
  {
    selector: '*',
    style: {
      margin: 0,
      padding: 0,
    },
  },
  {
    selector: 'html',
    style: {
      WebkitTextSizeAdjust: '100%',
    },
  },
  {
    selector: '#__next, html, body',
    style: {
      minHeight: '100vh',
    },
  },
  {
    selector: 'body',
    style: {
      overflowY: 'scroll',
    },
  },
]

const clientRenderer = createFelaRenderer()

export default function AppWrapper({ renderer = clientRenderer, children }) {
  if (renderer) {
    arrayEach(staticStyle, ({ selector, style }) =>
      renderer.renderStatic(style, selector)
    )
  }

  return (
    <ConfigProvider config={config}>
      <StyleProvider renderer={renderer}>
        <ThemeProvider>{children}</ThemeProvider>
      </StyleProvider>
    </ConfigProvider>
  )
}
