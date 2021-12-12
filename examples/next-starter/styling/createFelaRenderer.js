import { createRenderer } from 'fela'
import plugins from 'fela-preset-web'
import responsiveValue from 'fela-plugin-responsive-value'
import themeValue from 'fela-plugin-theme-value'
import sortMediaQueryMobileFirst from 'fela-sort-media-query-mobile-first'
import enforceLonghands from 'fela-enforce-longhands'
import namedKeys from 'fela-plugin-named-keys'
import multipleSelectors from 'fela-plugin-multiple-selectors'
import hoverMedia from 'fela-plugin-hover-media'

import {
  axisProperties,
  typography,
  themeValueMap,
  responsiveProps,
} from 'ambrose'

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

export default function createStyleRenderer() {
  const renderer = createRenderer({
    optimizeCaching: true,
    enhancers: [sortMediaQueryMobileFirst(), enforceLonghands()],
    plugins: [
      namedKeys((props) => props?.theme?.breakpoints || {}),
      hoverMedia(),
      multipleSelectors(),
      extend,
      embedded,
      axisProperties(),
      responsiveValue(getResponsiveMediaQueries, responsiveProps),
      themeValue(themeValueMap),
      typography(),
      unit,
      prefixer,
      fallbackValue,
    ],
  })

  return renderer
}
