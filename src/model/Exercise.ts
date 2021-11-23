import { ContentSet } from './ContentSet'
import { ContentUnit } from './ContentUnit'

export interface Exercise extends ContentUnit {
  contexts: ContentSet[] | null
}
