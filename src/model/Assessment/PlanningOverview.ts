import { GroupWithAttendees } from './GroupWithAttendees'
import { PlanningInfo } from './PlanningInfo'
import { PlanningResult } from './PlanningResult'

export interface PlanningOverview {
  planningResult: PlanningResult
  planningInfo: PlanningInfo
  groupsWithAttendees: GroupWithAttendees[]
}
