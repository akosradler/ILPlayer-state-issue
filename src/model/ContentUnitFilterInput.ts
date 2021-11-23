import { ContentUnitType } from './ContentUnitType'
import { OrNotFilter } from './OrNotFilter'

export interface ContentUnitFilterInput {
  contentUnitFilters: {
    packageId: string
    id?: OrNotFilter<string>
    type?: OrNotFilter<ContentUnitType>
    ancestors?: OrNotFilter<string>
    includedParticleAssetTypes?: OrNotFilter<string>
  }
}
