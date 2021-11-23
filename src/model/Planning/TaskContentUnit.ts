import { ContentUnit } from '..'
import { DateRange } from '../DateRange'
import { TaskContentUnitSequence } from './TaskContentUnitSequence'

export interface TaskContentUnit {
  id: string
  period: DateRange
  sequence: TaskContentUnitSequence
  contentUnit: ContentUnit
}
