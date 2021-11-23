import { SlimStampenKeyStrokeInput } from './SlimStampenKeyStrokeInput'

export type SlimStampenResponseInput = {
  userId: string
  factId: string
  presentationStartTime: number
  presentationDuration: number // Time (ms) cue was in view
  reactionTime: number // Time (ms) before first keyStroke/MC-button click
  sessionTime: number // Time (ms) since start of current session
  correct: boolean
  givenResponse: string
  backSpaceUsed: boolean
  backSpacedFirstLetter: boolean
  keyStrokes: SlimStampenKeyStrokeInput[] // Every keystroke within the answer input
  sessionId: string
}
