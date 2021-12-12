import { useState, useEffect } from 'react'
import { objectReduce } from 'fast-loops'

import useConfig from '../config/useConfig'

function validateField(validation, value) {
  return objectReduce(
    validation,
    (error, validate, message) => {
      // early return to skip the rest once the first validation failed
      if (error) {
        return error
      }

      if (validate instanceof RegExp) {
        if (typeof value === 'string' && value.match(validate) === null) {
          return message
        }
      } else if (!validate(value)) {
        return message
      }
    },

    undefined
  )
}

function defaultMapFieldToProps(name, field, onChange) {
  return {
    name,
    value: field.value,
    loading: field.isLoading,
    disabled: field.isDisabled,
    required: field.isRequired,
    // only show errorMessage and validation styles if the field is touched according to the config
    valid: field.isTouched ? !field.errorMessage : true,
    errorMessage: field.isTouched ? field.errorMessage : undefined,
    onChange,
  }
}

export default function useFieldFactory(
  defaultValue,
  isValidRequired,
  getTargetValue
) {
  return function useField({
    name,
    value = defaultValue,
    touched = false,
    disabled = false,
    required = false,
    loading = false,
    showValidationOn,
    requiredErrorMessage = '',
    validation = {},
  }) {
    const { forms } = useConfig()

    // add a special validation for required fields where the browser doesn't auto catch
    if (required) {
      const message = requiredErrorMessage || forms.defaultRequiredErrorMessage
      validation[message] = isValidRequired
    }

    const errorMessage = validateField(validation, value)
    const initial = {
      value,
      errorMessage,
      isLoading: loading,
      isDisabled: disabled,
      isTouched: touched,
      isRequired: required,
      isValid: !errorMessage && !loading,
    }

    const [field, setField] = useState(initial)

    const touch = () => setField((field) => ({ ...field, isTouched: true }))
    const untouch = () => setField((field) => ({ ...field, isTouched: false }))
    const update = (values) => setField((field) => ({ ...field, ...values }))

    function onChange(event) {
      const targetValue = getTargetValue(event.target)
      const newValue =
        targetValue === null || targetValue === undefined ? '' : targetValue

      const dirty = newValue !== value
      const errorMessage = validateField(validation, newValue)

      setField((field) => ({
        ...field,
        value: newValue,
        errorMessage,
        isTouched: showValidationOn === 'change' ? dirty : field.isTouched,
        isValid: !errorMessage && !field.isLoading,
      }))
    }

    const mapFieldToProps = forms.mapFieldToProps || defaultMapFieldToProps
    const props = mapFieldToProps(name, field, onChange)

    // by default, we always hide validation errors once the field is focused again
    props.onFocus = untouch
    if (showValidationOn === 'blur') {
      props.onBlur = touch
    }

    useEffect(() => {
      const errorMessage = validateField(validation, value)

      setField((field) => ({
        ...field,
        value,
        isValid: !errorMessage && !field.isLoading,
        errorMessage,
      }))
    }, [value])

    return {
      // we expose those values for debugging reasons
      ...field,
      initial,
      name,

      props,
      update,
      touch,
      untouch,
    }
  }
}
