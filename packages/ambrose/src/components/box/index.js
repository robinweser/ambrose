import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { Box as BaseBox, applyMultiplier } from 'kilvin'
import { useFela } from 'react-fela'

const Box = forwardRef(
  (
    {
      bg,
      backgroundColor = bg,
      paddingHorizontal,
      paddingVertical,
      marginHorizontal,
      marginVertical,
      extend,
      ...props
    },
    ref
  ) => {
    const { theme } = useFela()

    const spacing = applyMultiplier(theme.baselineGrid)

    return (
      <BaseBox
        ref={ref}
        {...props}
        extend={[
          {
            backgroundColor,
            paddingVertical: spacing(paddingVertical),
            paddingHorizontal: spacing(paddingHorizontal),
            marginVertical: spacing(marginVertical),
            marginHorizontal: spacing(marginHorizontal),
          },
          extend,
        ]}
      />
    )
  }
)

export default Box
Box.displayName = 'Box'

Box.propTypes = {
  /** The CSS background color */
  backgroundColor: PropTypes.string,
  /** A shorthand for backgroundColor */
  bg: PropTypes.string,
}
