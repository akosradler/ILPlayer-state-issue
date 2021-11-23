import { Result } from '../Results'

export interface TestProgress extends Result {
  assignmentId: string
  subsequentTestId: string
}
