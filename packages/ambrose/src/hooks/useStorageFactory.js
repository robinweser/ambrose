import { useState, useEffect } from 'react'

function getStorage(type) {
  const storage = type + 'Storage'

  if (typeof global !== 'undefined' && global[storage]) {
    return global[storage]
  }

  // eslint-disable-next-line no-undef
  if (typeof globalThis !== 'undefined' && globalThis[storage]) {
    // eslint-disable-next-line no-undef
    return globalThis[storage]
  }

  if (typeof window !== 'undefined' && window[storage]) {
    return window[storage]
  }

  if (type === 'session' && typeof sessionStorage !== 'undefined') {
    return sessionStorage
  }

  if (type === 'local' && typeof localStorage !== 'undefined') {
    return localStorage
  }

  // fallback mock for SSR
  return {
    getItem: () => {},
    setItem: () => {},
    removeItem: () => {},
  }
}

function isValidValue(value) {
  return typeof value !== 'undefined' && value !== null
}

export default function useStorageFactory(type) {
  const storage = getStorage(type)

  return function useStorage(key, defaultValue, onLoaded) {
    const [value, setValue] = useState(defaultValue)

    useEffect(() => {
      const persistedValue = storage.getItem(key)

      if (isValidValue(persistedValue)) {
        const parsed = JSON.parse(persistedValue)
        setValue(parsed)
        if (onLoaded) {
          onLoaded(parsed)
        }
      } else {
        if (onLoaded) {
          onLoaded(persistedValue)
        }
      }
    }, [])

    useEffect(() => {
      if (isValidValue(value)) {
        storage.setItem(key, JSON.stringify(value))
      }
    }, [value])

    function reset(shouldUpdateState = true) {
      if (isValidValue(defaultValue)) {
        storage.setItem(key, JSON.stringify(defaultValue))
      } else {
        storage.removeItem(key)
      }

      if (shouldUpdateState) {
        setValue(defaultValue)
      }
    }

    return [value, setValue, reset]
  }
}
