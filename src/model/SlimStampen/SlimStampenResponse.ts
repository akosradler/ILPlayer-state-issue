import { SlimStampenKeyStroke } from './SlimStampenKeyStroke'

export type SlimStampenResponse = {
  id: string
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
  keyStrokes: SlimStampenKeyStroke[] // Every keystroke within the answer input
  sessionId: string
}
