import { AssignmentAttemptStatus } from '../Results'

export interface PlanningResult {
  planningId: string
  planOwnerId: string
  title: string
  date: string
  participants: number
  completed: number
  gradeType: string
  grade: number
  score: number
  status: AssignmentAttemptStatus
  isAvailable: boolean
  numberOfAttendees: number
  assignmentType: AssignmentType
}

export type AssignmentType = 'ReferenceTest' | 'ArrangedTest' | 'Bloom' | 'Rtti'
