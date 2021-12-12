import { useContext } from 'react'

import ConfigContext from './ConfigContext'

export default function useConfig() {
  return useContext(ConfigContext)
}
