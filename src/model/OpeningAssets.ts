import { ContentSet } from '.'
import { Asset } from './Asset'

export interface OpeningAssets extends ContentSet {
  assets: Asset[] | null
}
