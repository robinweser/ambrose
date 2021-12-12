import { format } from 'small-date'

const defaultOptions = {
  locale: 'sv-SE',
  timeZone: 'Europe/Stockholm',
}
export default function formatDateTime(
  date,
  pattern = 'dd MMMM yyyy',
  options = {}
) {
  return format(new Date(date), pattern, {
    ...defaultOptions,
    ...options,
  })
}
