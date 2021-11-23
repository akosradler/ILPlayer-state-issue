export type ContentUnitType =
  | 'ASSIGNMENT'
  | 'INTROTEXT'
  | 'THEORY'
  | 'TEACHERGUIDE'
  | 'SUMMARY'
  | 'DRILLING'
  | 'MAP'
  | 'OPENINGASSET'
  | 'WARMUP'
  | 'POLL'
  | 'REFERENCEUNIT'
  | 'MATERIALASSETS'
  | 'STUDYADVICE'
  | 'CONTEXTS'
  | MissingType

type MissingType = 'LEARNING_GOALS' | 'ASSESSMENT' | 'TEST'

export type ContentUnitSubType = 'FORMATIVETEST' | 'EXTERNALAPPLICATIONS'
