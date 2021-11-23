import { PlannedAssignmentResult } from './PlannedAssignmentResult'

export interface PlannedArrangementResult {
  groupId: string
  groupName: string
  ownerId: string
  id: string
  startDate: string
  endDate: string
  createDate: string
  description: string
  lastUpdated: string
  teacherName: string
  title: string
  assignments: [PlannedAssignmentResult]
}
