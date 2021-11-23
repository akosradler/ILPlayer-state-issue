import { OrNotFilter } from './OrNotFilter'

export interface ContentFilterInput {
  contentFilters: {
    packageId: string
    parentId?: string
    ancestors: OrNotFilter<string>
    particleAssetTypes: OrNotFilter<string>
  }
}
