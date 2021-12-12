import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { useFela } from 'react-fela'

const El = forwardRef(
  ({ as: Component = 'div', extend, className, ...props }, ref) => {
    const { css } = useFela()

    return (
      <Component
        ref={ref}
        className={css({ _className: className }, extend)}
        {...props}
      />
    )
  }
)

export default El

El.displayName = 'El'

const ruleType = PropTypes.oneOfType([PropTypes.object, PropTypes.func])

El.propTypes = {
  /** The HTML node that is rendered */
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.elementType,
    PropTypes.func,
  ]),
  /** Adds a custom CSS class */
  className: PropTypes.string,
  /** Extends the Fela style object */
  extend: PropTypes.oneOfType([ruleType, PropTypes.arrayOf(ruleType)]),
}
