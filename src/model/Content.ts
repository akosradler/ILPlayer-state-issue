import { ContentClass } from './ContentClass'
import { ContentMetadata } from './ContentMetadata'
import { ContentSet } from './ContentSet'

export interface Content {
  id: string
  timestamp?: string
  packageId?: string
  parentId?: string
  xmlTag?: string
  particleType?: string
  metadata?: ContentMetadata
  class?: ContentClass
  language?: string
  playerPayload: JSON
  ancestors?: string[]
  parent?: ContentSet
}
