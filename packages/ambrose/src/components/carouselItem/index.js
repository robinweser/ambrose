import * as React from 'react'
import PropTypes from 'prop-types'

import Box from '../box'

export default function CarouselItem({ width, maxWidth, children }) {
  return (
    <Box
      maxWidth={[maxWidth, , , 'unset']}
      width={[width, , , 'auto']}
      extend={{
        scrollSnapAlign: 'center',
      }}>
      {children}
    </Box>
  )
}

CarouselItem.defaultProps = {
  width: '90%',
}

CarouselItem.propTypes = {
  /** The default width an item takes */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** The maximum width an item can take */
  maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}
