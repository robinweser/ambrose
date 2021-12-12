import * as React from 'react'
import { createRenderer } from 'fela'
import { createSnapshot as createFelaSnapshot } from 'jest-react-fela'
import monolithic from 'fela-monolithic'
import namedKeys from 'fela-plugin-named-keys'
import responsiveValue from 'fela-plugin-responsive-value'
import themeValue from 'fela-plugin-theme-value'
import plugins from 'fela-preset-web'
import sortMediaQueryMobileFirst from 'fela-sort-media-query-mobile-first'

import StyleProvider from '../styling/StyleProvider'
import ThemeProvider from '../theming/ThemeProvider'
import ConfigProvider from '../config/ConfigProvider'

import typography from '../styling/plugins/typography'
import axisProperties from '../styling/plugins/axisProperties'
import responsiveProps from '../styling/responsiveProps'
import themeValueMap from '../styling/themeValueMap'

const getResponsiveMediaQueries = (values, props) => {
  const { small, medium, large, huge } = props.theme.breakpoints

  const mediaQueryMap = {
    1: [],
    2: [small],
    3: [small, medium],
    4: [small, medium, large],
    5: [small, medium, large, huge],
  }

  return mediaQueryMap[values.length]
}

const [extend, embedded, prefixer, fallbackValue, unit] = plugins

function getTestRenderer() {
  const testRenderer = createRenderer({
    enhancers: [sortMediaQueryMobileFirst(), monolithic()],
    plugins: [
      namedKeys((props) => props?.theme?.breakpoints || {}),
      extend,
      embedded,
      axisProperties(),
      responsiveValue(getResponsiveMediaQueries, responsiveProps),
      themeValue(themeValueMap),
      typography(),
      unit,
      fallbackValue,
    ],
  })
  // remove prefixes, we do this rather than creating a clean renderer due to simplicity
  testRenderer.renderStatic = () => ''
  testRenderer.renderFont = () => ''
  testRenderer.staticClassNameIndex = 0

  // static class names for less snapshot noise
  const staticClassNamePlugin = (style, type) => {
    if (type !== 'RULE') {
      return style
    }

    const className = 'cls_' + testRenderer.staticClassNameIndex++
    return { className, ...style }
  }
  testRenderer.plugins.push(staticClassNamePlugin)

  return testRenderer
}

const config = {
  forms: {},
  theming: {
    core: {
      baselineGrid: 4,
      breakpoints: {
        small: '@media (min-width: 560px)',
        medium: '@media (min-width: 800px)',
        large: '@media (min-width: 1024px)',
        huge: '@media (min-width: 1300px)',
      },
    },
    variants: {
      test: {
        typography: {
          defaultVariant: 'body',
          defaultColor: 'black',
          variants: {
            body: {
              fontSize: 12,
              subStyle: {
                emphasis: {
                  fontWeight: 700,
                },
              },
            },
            heading: {
              fontSize: 20,
              subStyle: {
                emphasis: {
                  fontWeight: 700,
                },
              },
            },
          },
        },
      },
    },
  },
}

export default function createSnapshot(component, theme = 'test') {
  return createFelaSnapshot(
    component,
    theme,
    getTestRenderer(),
    (props) => (
      <ConfigProvider config={config}>
        <StyleProvider {...props} />
      </ConfigProvider>
    ),
    ThemeProvider
  )
}
