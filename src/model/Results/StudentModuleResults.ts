import { User } from '../User'
import { AssignmentAttempt } from './AssignmentAttempt'

export interface StudentModuleResults {
  student: User
  latestAttempts: AssignmentAttempt[]
}
