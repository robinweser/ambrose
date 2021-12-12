import PropTypes from 'prop-types'
import * as React from 'react'

import Box from '../box'

const containerStyle = ({ zIndex, overflow, top, left, bottom, right }) => ({
  position: 'fixed',
  overflowY: overflow,
  maxHeight: '100%',
  zIndex,
  top,
  left,
  bottom,
  right,
  paddingRight: 'env(safe-area-inset-right)',
  paddingLeft: 'env(safe-area-inset-left)',
  paddingTop: 'env(safe-area-inset-top)',
  paddingBottom: 'env(safe-area-inset-bottom)',
})

export default function Overlay({
  children,
  visible,
  overflow,
  zIndex,
  top,
  left,
  bottom,
  right,
  extend,
  ...props
}) {
  if (!visible) {
    return null
  }

  return (
    <Box
      {...props}
      extend={[
        extend,
        containerStyle({
          zIndex,
          overflow,
          top,
          left,
          bottom,
          right,
        }),
      ]}>
      {children}
    </Box>
  )
}

Overlay.defaultProps = {
  visible: false,
  zIndex: 10,
  overflow: 'auto',
}

Overlay.propTypes = {
  /** Sets the visiblity of the modal. */
  visible: PropTypes.bool,
  zIndex: PropTypes.number,
  overflow: PropTypes.oneOf(['auto', 'hidden', 'scroll']),
}
