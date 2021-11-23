import { LegacyContentInfo } from './LegacyContentInfo'

export type AssignmentAttemptStatus =
  | 'NotStarted'
  | 'NotStartedRedo'
  | 'Started'
  | 'Pending'
  | 'NotReviewed'
  | 'Reviewed'
  | 'NotReleased'
  | 'Released'
  | 'Completed'

export type AssignmentAttempt = {
  id: string
  assignmentId: string
  score: number | null
  progress: number | null
  status: AssignmentAttemptStatus
  version?: string | null
  duration?: string | null
  resultTypeCategory?: string | null
  cmi5Statements?: any[] // eslint-disable-line @typescript-eslint/no-explicit-any
  createDate?: string
  legacyContentInfo?: LegacyContentInfo | null
}
