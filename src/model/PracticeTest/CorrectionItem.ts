export interface CorrectionItem {
  paraginId: number
  paraginItemId: string
  paraginUserId: string
  sequence: number
  question: string
  givenAnswer: string
  correctAnswer: string
  score: number
  maxScore: number
  correctionCriteria: CorrectionCriteria[]
  isReviewed: boolean
}

export interface CorrectionCriteria {
  paraginKey: string
  interpretation: string
  maxScore: number
  correctorScore: number | null
}
