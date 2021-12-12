const formatter = {}

export default function formatDistance(value, unit = 'mil', locale = 'sv-SE') {
  if (!formatter[locale]) {
    formatter[locale] = new Intl.NumberFormat(locale)
  }

  return formatter[locale].format(value) + ' ' + unit
}
