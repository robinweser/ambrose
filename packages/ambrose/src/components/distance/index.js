import React from 'react'
import PropTypes from 'prop-types'

import formatDistance from './formatDistance'

export default function Distance({ children, unit, locale }) {
  return <>{formatDistance(children, unit, locale)}</>
}

Distance.defaultProps = {
  locale: 'sv-SE',
  unit: 'mil',
}

Distance.propTypes = {
  /** The value that should be formatted */
  children: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
  /** The currency used to format */
  unit: PropTypes.oneOf(['mil', 'km']),
  /** The locale used to format */
  locale: PropTypes.oneOf(['sv-SE']),
}
