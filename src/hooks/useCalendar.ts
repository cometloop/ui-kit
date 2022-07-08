import { DateTime } from 'luxon'

export interface ICalendar {
  firstDayOfMonth: DateTime
  lastDayOfMonth: DateTime
  firstDayInWeek: number
  lastDayInWeek: number
  startPrefillDay: DateTime
  lastPrefillDay: DateTime
}

export const useCalendar = (datetime: DateTime): ICalendar => {
  const firstDayOfMonth = datetime.startOf('month')
  const lastDayOfMonth = datetime.endOf('month')
  const firstDayInWeek = firstDayOfMonth.weekday
  const lastDayInWeek = lastDayOfMonth.weekday

  let startPrefillDay = firstDayOfMonth
  let lastPrefillDay = lastDayOfMonth

  if (firstDayInWeek !== 7) {
    startPrefillDay = firstDayOfMonth.minus({
      days: firstDayInWeek
    })
  }

  if (lastDayInWeek !== 6) {
    lastPrefillDay = lastDayOfMonth.plus({
      days: 7 - lastDayInWeek
    })
  }
  return {
    firstDayOfMonth,
    lastDayOfMonth,
    firstDayInWeek,
    lastDayInWeek,
    startPrefillDay,
    lastPrefillDay
  }
}

export interface IDatePicker extends ICalendar {
  years: number[]
  canGoBack: boolean
  canGoNext: boolean
}

export const useDatePicker = (
  datetime: DateTime,
  minDate: DateTime,
  maxDate: DateTime
): IDatePicker => {
  const calendar = useCalendar(datetime)

  const years = []
  for (let i = minDate.year; i <= maxDate.year; i++) {
    years.push(i)
  }

  const canGoBack =
    datetime.startOf('month').minus({ month: 1 }) >= minDate.startOf('month')
  const canGoNext =
    datetime.startOf('month').plus({ month: 1 }) <= maxDate.startOf('month')

  return {
    years,
    canGoBack,
    canGoNext,
    ...calendar
  }
}
