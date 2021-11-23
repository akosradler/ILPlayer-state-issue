export type NotificationStatusType =
  | 'NoNotifications'
  | 'NoLinkedGroups'
  | 'OpenNotStarted'
  | 'OpenNotFinished'
  | 'ClosedNotStarted'
  | 'FinishedNotReviewed'
  | 'FinishedNotReleased'
  | 'FinishedReleased'

export type AssessmentResultType = 'RttiOverall' | 'ReferenceTestOverall'

export type AssessmentPlanningType = 'Direct' | 'Hour' | 'Period'

export interface Notification {
  assignmentId: string
  planningId: string
  resultId: string
  notificationStatus: NotificationStatusType
  resultType: AssessmentResultType
  planningType: AssessmentPlanningType
  planningTitle: string
  groupIds: string[]
  groupName: string
  startDate: string
  endDate: string
  displayGrade: string
}
