import { Adaptivity } from './AdaptivityPlan'
import { IModule } from './IModule'
import { StudentModuleResults } from './Results'
import { Theme } from './Theme'

export interface Core extends IModule {
  learningPlan?: Adaptivity | null
  studentResults: StudentModuleResults[]
  parent?: Theme
  type: 'CORE'
}
