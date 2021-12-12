import React, { useState } from 'react'
import { objectMergeDeep } from 'fast-loops'

import ConfigContext from './ConfigContext'
import defaultConfig from './defaultConfig'

export default function ConfigProvider({ config, children }) {
  const [activeOverlayCount, setActiveOverlayCount] = useState(0)

  const mergedConfig = objectMergeDeep({}, defaultConfig, config)

  return (
    <ConfigContext.Provider
      value={{
        ...mergedConfig,
        activeOverlayCount,
        setActiveOverlayCount,
      }}>
      {children}
    </ConfigContext.Provider>
  )
}
