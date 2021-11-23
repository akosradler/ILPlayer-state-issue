import { Breadcrumb } from './Breadcrumb'
import { ContentSet } from './ContentSet'
import { ContentUnitSubType, ContentUnitType } from './ContentUnitType'
import { DiscoType } from './DiscoType'
import { Metadata } from './Metadata'
import { Module } from './Module'
import { AssignmentAttempt, StudentContentUnitResult } from './Results'

type ModuleReference = Pick<Module, 'id'>

export type ContentUnit = DiscoType & {
  id: string
  title: string | null
  type: ContentUnitType
  subType?: ContentUnitSubType | null
  contentSets: ContentSet[] | null
  latestAttempt?: AssignmentAttempt
  parent?: ModuleReference
  breadcrumbs?: Breadcrumb[]
  studentResults: StudentContentUnitResult[]
  attempts?: AssignmentAttempt[]
  metadata?: Metadata
}

export const typeNameDict: Record<ContentUnitType, string> = {
  WARMUP: 'WarmUp',
  LEARNING_GOALS: 'LearningGoals',
  ASSIGNMENT: 'Assignment',
  INTROTEXT: 'Introtext',
  THEORY: 'Theory',
  TEACHERGUIDE: 'Teacherguide',
  SUMMARY: 'Summary',
  DRILLING: 'Drilling',
  MAP: 'Map',
  OPENINGASSET: 'Openingasset',
  POLL: 'Poll',
  ASSESSMENT: 'Assesment',
  TEST: 'Test',
  REFERENCEUNIT: 'ReferenceUnit',
  MATERIALASSETS: 'MaterialAssets',
  STUDYADVICE: 'StudyAdvice',
  CONTEXTS: 'Contexts',
}
