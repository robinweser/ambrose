import customProperty from 'fela-plugin-custom-property'
import { arrayReduce } from 'fast-loops'

function createAxisProperty(longhands) {
  return function axisProperty(value) {
    if (value === undefined) {
      return {}
    }

    return arrayReduce(
      longhands,
      (style, property) => {
        style[property] = value
        return style
      },
      {}
    )
  }
}

const paddingVertical = createAxisProperty(['paddingTop', 'paddingBottom'])
const paddingHorizontal = createAxisProperty(['paddingLeft', 'paddingRight'])
const marginVertical = createAxisProperty(['marginTop', 'marginBottom'])
const marginHorizontal = createAxisProperty(['marginLeft', 'marginRight'])

export default function axisProperties() {
  return customProperty({
    paddingVertical,
    paddingHorizontal,
    marginVertical,
    marginHorizontal,
  })
}
