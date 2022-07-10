import { DateTime } from 'luxon'

export const dayInRange = (
  day: DateTime,
  min: DateTime,
  max: DateTime
): boolean => {
  return (
    day.startOf('day') >= min.startOf('day') &&
    day.startOf('day') <= max.startOf('day')
  )
}
export const getSelectedDay = (
  day: string | undefined,
  min: DateTime,
  max: DateTime
): DateTime => {
  if (day === undefined) return undefined

  let selectedDay = DateTime.fromISO(day)

  const dayInRange =
    selectedDay.startOf('day') >= min.startOf('day') &&
    selectedDay.startOf('day') <= max.startOf('day')

  if (!dayInRange) {
    console.log('day not in range')
    selectedDay = min
  }

  return selectedDay
}
