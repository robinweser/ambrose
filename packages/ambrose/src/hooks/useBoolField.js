import useFieldFactory from './useFieldFactory'

function isValidRequired(value) {
  return value === true
}

function getTargetValue(target) {
  return target.checked
}

export default useFieldFactory(false, isValidRequired, getTargetValue)
