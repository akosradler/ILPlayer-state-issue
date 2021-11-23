import { SlimStampenAnswerInput } from './SlimStampenAnswerInput'
import { SlimStampenCueInput } from './SlimStampenCueInput'

export type SlimStampenFactInput = {
  id: string
  cue: SlimStampenCueInput
  answerOptions: SlimStampenAnswerInput[]
}
