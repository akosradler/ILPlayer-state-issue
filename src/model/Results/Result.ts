import { PraResultStatus } from './PraResultStatus'

export interface Result {
  id: string
  progress?: number
  score?: number
  duration?: string
  status?: PraResultStatus
  ownerId?: string
  version?: string
  resultType?: string
}
