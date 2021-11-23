import { User } from '../User'

export interface DomainResult {
  name: string
  score: number
}

export interface PracticeTestResult {
  resultId: string
  assignmentCount: number
  correctCount: number
  totalScore: number
  durationSeconds: number
  status: string
  domainResults: DomainResult[]
}

export interface PracticeTestGroupResult {
  id: string
  results: PracticeTestResultForStudent[]
}

export interface PracticeTestResultForStudent {
  resultId: string
  student: User
  results: TestQuestionResult[]
  totalScore: number
  durationSeconds: number
  status: string
}

export interface TestQuestionResult {
  questionId: string
  score: number
  maxScore: number
  durationSeconds: number
  sequence: number
  answered: boolean
}
