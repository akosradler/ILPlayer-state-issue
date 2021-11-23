import { TestType } from '..'
import { RemindoTest } from './RemindoTest'

export interface PracticeTestContent {
  type: TestType
  remindoTests: RemindoTest[]
}
