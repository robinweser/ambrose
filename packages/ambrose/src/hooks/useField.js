import useFieldFactory from './useFieldFactory'

function isValidRequired(value) {
  return value.length > 0
}

function getTargetValue(target) {
  return target.value
}

export default useFieldFactory('', isValidRequired, getTargetValue)
