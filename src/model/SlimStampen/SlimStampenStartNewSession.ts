import { SlimStampenModelParameters } from './SlimStampenModelParameters'
import { SlimStampenResponse } from './SlimStampenResponse'

export type SlimStampenStartNewSession = {
  sessionId: string
  parameters: SlimStampenModelParameters
  responses: SlimStampenResponse[]
  createTimestamp: number
}
