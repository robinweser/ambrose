import React from 'react'
import PropTypes from 'prop-types'

import formatCurrency from './formatCurrency'

export default function Currency({ children, locale }) {
  return <>{formatCurrency(children, locale)}</>
}

Currency.defaultProps = {
  locale: 'sv-SE',
}

Currency.propTypes = {
  /** The value that should be formatted */
  children: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
  /** The locale used to format */
  locale: PropTypes.oneOf(['sv-SE']),
}
