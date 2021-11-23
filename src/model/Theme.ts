import { Core } from './Core'
import { DiscoType } from './DiscoType'
import { ExtraMaterials } from './ExtraMaterials'
import { Introduction } from './Introduction'
import { LearningObjective } from './LearningObjective'
import { Metadata } from './Metadata'
import { Package } from './Package'
import { Test } from './Test'
import { TypeCounts } from './TypeCounts'

type Parent = Pick<Theme | Package, 'id'>

export type Theme = DiscoType & {
  id: string
  title: string | null
  introduction: Introduction | null
  cores: Core[] | null
  themes: Theme[] | null
  extraMaterials: ExtraMaterials | null
  parent: Parent | null
  test?: Test[]
  learningObjectives: LearningObjective[] | null
  metadata: Metadata
  typeCounts?: TypeCounts | null
}

export const isTheme = (item: Theme | Package): item is Theme => {
  return 'parent' in item
}
