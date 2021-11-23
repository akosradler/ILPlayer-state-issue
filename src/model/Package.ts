import { ExtraMaterials } from './ExtraMaterials'
import { Introduction } from './Introduction'
import { Metadata } from './Metadata'
import { Theme } from './Theme'
import { TypeCounts } from './TypeCounts'

export interface Package {
  id: string
  title: string | null
  themes: Theme[] | null
  introduction: Introduction | null
  extraMaterials: ExtraMaterials | null
  metadata: Metadata | null
  typeCounts?: TypeCounts | null
}
