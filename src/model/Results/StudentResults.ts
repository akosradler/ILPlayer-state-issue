import { User } from '../User'
import { AssignmentAttempt } from './AssignmentAttempt'

export interface StudentResults {
  student: User
  attempts: AssignmentAttempt[]
  latestAttempt?: AssignmentAttempt
}

export type StudentContentUnitResult = StudentResults
