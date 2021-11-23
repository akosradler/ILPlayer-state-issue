import { QuestionBlock, QuestionType } from './Question'

export interface QuestionWithResults {
  id: string
  type: QuestionType
  maxScore: number
  result: ResultItem
  blocks: QuestionBlock[]
  scoring: ScoringItem[] | null
}

export interface ScoringItem {
  key: string
  value: number
  caseSensitive: boolean
  keys: string[]
}

export interface ResultItem {
  questionId: string
  score: number
  maxScore: number
  duration: number
  questionResultResponses: ResultResponseItem[]
}

export interface ResultResponseItem {
  key: string
  candidateResponse: string[]
  correctResponse: string[]
  feedback?: string[] | null
}
