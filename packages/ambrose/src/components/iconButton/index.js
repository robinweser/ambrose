import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { useFela } from 'react-fela'

import Click from '../click'
import Box from '../box'

import useIconLink from '../../hooks/useIconLink'

const buttonStyle = ({ theme, size }) => ({
  cursor: 'pointer',
  background: 'transparent',
  padding: 0,
  border: 0,
  width: size,
  height: size,
  font: 'inherit',
  ':focus': {
    outline: 0,
    boxShadow: '0 0 0 1px white, 0px 0px 0 3px ' + theme.colors.focusColor,
    ':not(:focus-visible)': {
      boxShadow: 'none',
    },
  },
})

const linkStyle = ({ size }) => ({
  textDecoration: 'none',
  display: 'flex',
  color: 'inherit',
  width: size,
  height: size,
  alignItems: 'center',
  justifyContent: 'center',
})

const IconButton = forwardRef(
  (
    {
      label,
      icon: Icon,
      href,
      size,
      iconSize,
      role,
      color,
      onClick,
      disabled,
      dataTest,
      ...props
    },
    ref
  ) => {
    const { theme } = useFela()
    const { linkProps, iconProps, label: labelEl } = useIconLink(label, href)
    const styleProps = {
      size,
      theme,
    }

    const icon = <Icon size={iconSize} color={color} {...iconProps} />

    if (href) {
      return (
        <Click
          {...props}
          {...linkProps}
          data-test={dataTest}
          ref={ref}
          href={href}
          disabled={disabled}
          extend={linkStyle(styleProps)}>
          {icon}
          {labelEl}
        </Click>
      )
    }

    return (
      <Click
        {...props}
        data-test={dataTest}
        ref={ref}
        onClick={onClick}
        disabled={disabled}
        extend={buttonStyle(styleProps)}>
        <Box
          extend={{
            alignItems: 'center',
            justifyContent: 'center',
          }}
          // maybe this should be aria-label? Ask kitty
          title={label}
          role={role}>
          {icon}
          {labelEl}
        </Box>
      </Click>
    )
  }
)

export default IconButton

IconButton.displayName = 'IconButton'

IconButton.defaultProps = {
  size: 50,
  iconSize: 16,
  role: 'presentation',
  color: 'foreground.primary',
}

IconButton.propTypes = {
  size: PropTypes.number,
  iconSize: PropTypes.number,
  href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  label: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired,
  role: PropTypes.string,
  onClick: PropTypes.func,
}
