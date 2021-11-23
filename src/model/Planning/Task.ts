import { PackageInfo } from '../PackageInfo'
import { TaskContentUnit } from './TaskContentUnit'
import { TaskUser } from './TaskUser'

export interface Task {
  id: string
  title: string
  createDate: string
  teacherName: string
  users: TaskUser[]
  taskContentUnits: TaskContentUnit[]
  books: PackageInfo[]
  startDate: string
  endDate: string
  contentUnitCount: number
}
