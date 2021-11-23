import { SlimStampenAnswer } from './SlimStampenAnswer'
import { SlimStampenCue } from './SlimStampenCue'

export type SlimStampenFact = {
  id: string
  cue: SlimStampenCue
  answerOptions: SlimStampenAnswer[]
}
