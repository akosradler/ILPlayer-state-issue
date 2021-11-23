import { Breadcrumb } from './Breadcrumb'
import { IModule } from './IModule'
import { StudyAdvice } from './StudyAdvice'
import { TestType } from './TestType'
import { Theme } from './Theme'

export interface Test extends IModule {
  subType: TestType
  studyAdvices: StudyAdvice[]
  parent: Theme
  breadcrumbs: Breadcrumb[]
  type: 'TEST'
}
