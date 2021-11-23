import { ContentUnit } from './ContentUnit'
import { AssignmentAttempt, StudentLearningPlanResults } from './Results'

type ContentUnitReference = Pick<ContentUnit, 'id'> | Pick<AdaptivityPlan, 'id'>

export type Path = {
  id: string
  name: string
}

export type Block = {
  id: string
  path: Path
  items: ContentUnitReference[]
  endSwitch?: AdaptivitySwitch
}

type BlockReference = Pick<Block, 'id'>

export type AdaptivityBranch = {
  block: BlockReference
  /** maxScore is an integer value in range 0-100 */
  maxScore: number
  isDefault: boolean
}

type AdaptivitySwitch = {
  scoredItems: ContentUnitReference[]
  branches: AdaptivityBranch[]
}

export type AdaptivityPlan = {
  id: string
  start: AdaptivitySwitch
  blocks: Block[]
}

export interface Adaptivity {
  id: string
  enabled: boolean
  plan: AdaptivityPlan
  latestAttempt?: AssignmentAttempt
  startSwitchItemScores?: AssignmentAttempt[]
  studentResults: StudentLearningPlanResults[]
}

export interface AdaptivityListItem extends ContentUnit {
  disabled: boolean
  adaptivityIconId: string
}

export const isAdaptivityListItem = (
  contentUnit: ContentUnit | AdaptivityListItem
): contentUnit is AdaptivityListItem => {
  return 'disabled' in contentUnit
}

export const showAllItemsPathId = 'all'
