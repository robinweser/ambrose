import React from 'react'
import PropTypes from 'prop-types'

import formatDateTime from './formatDateTime'

export default function DateTime({
  children = Date.now(),
  locale,
  timeZone,
  format: pattern,
}) {
  if (children === undefined) {
    return null
  }

  return (
    <>
      {formatDateTime(children, pattern, {
        locale: locale,
        timeZone: timeZone,
      })}
    </>
  )
}

DateTime.defaultProps = {
  locale: 'sv-SE',
  format: 'dd MMMM yyyy',
  timeZone: 'Europe/Stockholm',
}

DateTime.propTypes = {
  /** The value that should be formatted */
  children: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string])
    .isRequired,
  /** The formatting pattern */
  format: PropTypes.string,
  /** The time zone from which the date is related */
  timeZone: PropTypes.oneOf(['Europe/Stockholm']),
  /** The locale used to format */
  locale: PropTypes.oneOf(['sv-SE']),
}
