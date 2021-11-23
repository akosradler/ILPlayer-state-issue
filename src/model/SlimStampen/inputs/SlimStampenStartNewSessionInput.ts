import { SlimStampenFactInput } from './SlimStampenFactInput'

export type SlimStampenStartNewSessionInput = {
  userId: string
  context: string
  questionType: string
  cueStyle: string
  answerStyle: string
  requireFullList: boolean
  facts: SlimStampenFactInput[]
}
