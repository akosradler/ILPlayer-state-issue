import { ContentUnit } from './ContentUnit'
import { PlayableContentType } from './PlayableContentType'

export interface PlayableContent extends ContentUnit {
  type: PlayableContentType
}

export const isPlayableContent = (contentUnit: ContentUnit | null): contentUnit is PlayableContent => {
  return (contentUnit?.type as PlayableContentType) !== undefined
}
