export type ContentQuestion = {
  id: string
  question: string
  title: string
  answerOptions?: AnswerOption[]
  studentAnswers: StudentAnswer[]
  type: string
}

export type AnswerOption = {
  id: string
  text: string
}

export type StudentAnswer = {
  isOwnAnswer: boolean
  answers: string[]
  numberOfAttempts: number
  lastUpdated: string
}
