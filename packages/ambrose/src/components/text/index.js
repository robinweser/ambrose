import React, { forwardRef, useContext } from 'react'
import PropTypes from 'prop-types'
import { useFela } from 'react-fela'

import TextContext from './TextContext'

import useConfig from '../../config/useConfig'

function stripFlowElement(el) {
  return /^(div|p|h[1-6])$/.test(el) ? 'span' : el
}

const Text = forwardRef(
  (
    {
      as,
      children,
      variant,
      subStyle,
      color,
      align,
      transform,
      extend,
      ...props
    },
    ref
  ) => {
    const { css, theme } = useFela()
    const { defaultVariant, defaultSubStyle, defaultColor } = theme.typography

    const { isRootElement, parentVariant, parentSubStyle, parentColor } =
      useContext(TextContext)

    const appliedVariant = variant || parentVariant || defaultVariant
    const appliedSubStyle = subStyle || parentSubStyle || defaultSubStyle
    const appliedColor = color || parentColor || defaultColor

    const style = {
      margin: 0,
      display: isRootElement ? 'block' : undefined,
      typographyVariant: appliedVariant,
      typographySubStyle: appliedSubStyle,
      color: appliedColor,
      textAlign: align,
      textTransform: transform,
    }

    const Component = isRootElement ? as : stripFlowElement(as)

    return (
      <Component ref={ref} {...props} className={css(style, extend)}>
        <TextContext.Provider
          value={{
            isRootElement: false,
            parentVariant: appliedVariant,
            parentSubStyle: appliedSubStyle,
            parentColor: appliedColor,
          }}>
          {children}
        </TextContext.Provider>
      </Component>
    )
  }
)

export default Text

Text.displayName = 'Text'

Text.defaultProps = {
  as: 'div',
}

Text.propTypes = {
  /** Sets the font variants */
  variant: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  /** Sets the font variant substyle */
  subStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  /** Sets the font color */
  color: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  /** Sets the text-align */
  align: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  /** Sets the text-transform */
  transform: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  /** Any valid React element, function, or a string specifying a name for an HTML element */
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.elementType,
    PropTypes.func,
  ]),
  /** A JSX node */
  children: PropTypes.node,
  /** Additional styles, use with caution */
  extend: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
    PropTypes.array,
  ]),
}
