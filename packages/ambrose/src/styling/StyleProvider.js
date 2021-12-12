import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { RendererProvider, RendererContext } from 'react-fela'

export default function StyleProvider({ renderer, children }) {
  const contextRenderer = useContext(RendererContext)

  if (contextRenderer) {
    return children
  }

  return <RendererProvider renderer={renderer}>{children}</RendererProvider>
}

StyleProvider.propTypes = {
  renderer: PropTypes.object,
  children: PropTypes.node,
}
