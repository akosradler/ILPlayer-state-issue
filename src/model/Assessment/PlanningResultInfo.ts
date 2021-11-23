import { GroupWithAttendees } from './GroupWithAttendees'
import { PlanningResult } from './PlanningResult'

export interface PlanningResultInfo {
  planningResult: PlanningResult
  groupsWithUsersWithResults: GroupWithAttendees[]
}
