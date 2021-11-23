import { AssessmentUser } from './AssessmentUser'
import { Group } from './Group'

export interface GroupWithAttendees extends Group {
  attendees: AssessmentUser[]
}
