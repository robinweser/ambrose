import React from 'react'
import PropTypes from 'prop-types'

import El from '../el'

import useConfig from '../../config/useConfig'

const buttonResetStyle = ({ disabled }) => ({
  backgroundColor: 'unset',
  backgroundImage: 'unset',
  margin: 0,
  padding: 0,
  border: 0,
  textAlign: 'left',
  cursor: 'pointer',
  appearance: 'none',
  touchAction: 'manipulation',
  color: 'inherit',
  '::-moz-focus-inner': {
    borderWidth: 0,
    padding: 0,
  },
  extend: [
    {
      condition: disabled,
      style: {
        cursor: 'not-allowed',
      },
    },
    {
      condition: !disabled,
      style: {
        ':active': {
          color: 'inherit',
        },
      },
    },
  ],
})

const linkResetStyle = ({ disabled }) => ({
  textDecoration: 'none',
  color: 'inherit',
  extend: [
    {
      condition: disabled,
      style: {
        cursor: 'not-allowed',
      },
    },
    {
      condition: !disabled,
      style: {
        ':active': {
          color: 'inherit',
        },
      },
    },
  ],
})

const Click = React.forwardRef(
  ({ children, extend, href, disabled, onClick, ...props }, ref) => {
    const config = useConfig()

    const hasHref = typeof href === 'string' || typeof href === 'object'

    const Link = config.linkComponent || 'a'
    const as = hasHref ? Link : 'button'

    const appliedStyle = as === 'button' ? buttonResetStyle : linkResetStyle

    return (
      <El
        {...props}
        disabled={as === 'button' && disabled}
        href={!disabled && hasHref ? href : undefined}
        onClick={!disabled && onClick ? onClick : undefined}
        onTouchStart={() => {}}
        ref={ref}
        as={as}
        type={as === 'button' ? props.type || 'button' : null}
        extend={[
          {
            boxSizing: 'border-box',
          },
          appliedStyle({ disabled }),
          extend,
        ]}>
        {children}
      </El>
    )
  }
)

export default Click

Click.displayName = 'Click'
Click.propTypes = {
  /** An object containing valid CSS style declarations */
  extend: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
    PropTypes.array,
  ]),
  /** Setting an href attribute will force the component to render with an `<a>` tag */
  href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  /** If rendering a button (by not supplying an href), this let's you provide a type attribute for that button */
  type: PropTypes.string,
  /** A JSX node */
  children: PropTypes.node,
  /** Set the Click to disabled */
  disabled: PropTypes.bool,
  /** An action that is fired on click */
  onClick: PropTypes.func,
}
