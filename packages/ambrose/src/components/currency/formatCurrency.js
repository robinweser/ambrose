const formatter = {}

export default function formatCurrency(value, locale = 'sv-SE') {
  if (!formatter[locale]) {
    formatter[locale] = new Intl.NumberFormat(locale)
  }

  return formatter[locale].format(value) + ' kr'
}
