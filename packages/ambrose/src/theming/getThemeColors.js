import { objectReduce } from 'fast-loops'
import { hyphenateProperty } from 'css-in-js-utils'

export default function getThemeColors(colors, prefix = '') {
  return objectReduce(
    colors,
    (themeColors, value, key) => {
      if (typeof value === 'string') {
        themeColors[key] = `var(--${prefix}${hyphenateProperty(key)})`
      } else {
        themeColors[key] = getThemeColors(
          value,
          prefix + hyphenateProperty(key) + '-'
        )
      }

      return themeColors
    },
    {}
  )
}
