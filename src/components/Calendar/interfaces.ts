export interface Marking {
  marked: boolean
  dots: any[]
  studentIds: number[]
}
export type Agenda = { [date: string]: Marking }
