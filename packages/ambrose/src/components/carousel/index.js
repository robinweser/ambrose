import * as React from 'react'
import PropTypes from 'prop-types'
import { useFela } from 'react-fela'

import Box from '../box'

function fillArray(arr, length) {
  for (let i = 0; i < length; ++i) {
    if (arr[i] === undefined) {
      arr[i] = arr[i - 1 || 0]
    }
  }

  return arr
}

// One might wonder why the children are wrapped in a display: contents box
// with a an extra Box as the last child that has the outerSpace width
// The reason: Safari cuts padding on horizontally scrolling containers
// This is a hack to artificially add the padding there without messing with the spacing
export default function Carousel({ columns, gap, padding, children }) {
  const { theme } = useFela()

  const outer = [].concat(padding)
  const outerSpace = fillArray(outer, 4)
  const innerSpace = [].concat(gap)

  return (
    <Box
      direction="row"
      paddingLeft={outerSpace}
      paddingBottom={outerSpace}
      paddingTop={outerSpace}
      paddingRight={[0, , , outerSpace[3]]}
      extend={{
        overflowX: 'auto',
        scrollPadding: outerSpace.map((space) => space * theme.baselineGrid),
        scrollSnapType: 'x mandatory',
        large: {
          marginLeft: 0,
          marignRight: 0,
          display: 'grid',
          gridGap: innerSpace.map((space) => space * theme.baselineGrid),
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
        },
      }}>
      <Box
        display="contents"
        space={[innerSpace[0], innerSpace[1], innerSpace[2], 0]}>
        {children}
      </Box>
      <Box
        display={['flex', , , 'none']}
        width={outerSpace.map((space) => space * theme.baselineGrid)}
      />
    </Box>
  )
}

Carousel.defaultProps = {
  columns: 3,
  gap: 4,
}

Carousel.propTypes = {
  /** How many columns are rendered in a row on desktop */
  columns: PropTypes.number,
  /** Space between the items */
  gap: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array,
  ]),
  /** Space around the scroll container, defaults to `theme.outerPadding` */
  padding: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array,
  ]),
}
