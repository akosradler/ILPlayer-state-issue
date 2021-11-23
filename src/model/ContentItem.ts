import { Result } from './Results'

export interface ContentItem {
  id: string
  title: string
  url: string
  result?: Result
  fileType: string
  version: string
  contentId: string
  mediaType?: ContentItemMediaType
  classification?: ContentItemClassification
  subClassification?: ContentItemSubClassification
  description?: string
  sequence?: number
  contentType?: string
  duration?: string
}

export enum ContentItemContentType {
  LINK = 'link',
}

export enum ContentItemClassification {
  ASSIGNMENT = 'assignment',
  INTAKE_TEST = 'intakeTest',
  ENTRY_TEST = 'entryTest',
  STUDY_ADVICE = 'studyadvice',
  THEORY = 'theory',
  PRACTICE_TEST = 'trialTest',
}

export enum ContentItemSubClassification {
  START_ASSIGNMENT = 'startassignment',
}

export enum ContentItemMediaType {
  VIDEO = 'video',
  AUDIO = 'audio',
}
