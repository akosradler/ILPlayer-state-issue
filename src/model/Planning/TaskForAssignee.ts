import { DateRange } from '../DateRange'
import { PackageInfo } from '../PackageInfo'
import { TaskContentUnit } from './TaskContentUnit'

export interface TaskForAssignee {
  id: string
  teacherName?: string
  title: string
  description?: string
  period: DateRange
  count: number
  books: PackageInfo[]
  contentUnits?: TaskContentUnit[]
}
