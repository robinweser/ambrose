import { objectReduce } from 'fast-loops'
import { hyphenateProperty } from 'css-in-js-utils'

export default function getVariables(colors, prefix = '') {
  return objectReduce(
    colors,
    (variables, value, key) => {
      if (typeof value === 'string') {
        variables['--' + prefix + hyphenateProperty(key)] = value
        return variables
      } else {
        const nested = getVariables(
          value,
          prefix + hyphenateProperty(key) + '-'
        )
        return {
          ...variables,
          ...nested,
        }
      }
    },
    {}
  )
}
