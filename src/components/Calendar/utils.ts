import { DateTime } from 'luxon'

export const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export const isToday = (date: DateTime): boolean => {
  return date.toISODate() === DateTime.local().toISODate()
}
