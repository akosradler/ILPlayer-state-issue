import { AssessmentPlanningType } from './Notification'

export interface PlanningInfo {
  startDate: string
  endDate: string
  planningType: AssessmentPlanningType
  origin: Origin
}

export type Origin = 'ATS' | 'CDP'
