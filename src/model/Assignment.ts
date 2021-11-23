import { ContentSet } from './ContentSet'
import { ContentUnit } from './ContentUnit'

export interface Assignment extends ContentUnit {
  contexts: ContentSet[] | null
}
