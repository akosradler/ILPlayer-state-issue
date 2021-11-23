import { TaskContentUnitInput } from './TaskContentUnitInput'
import { TaskUserInput } from './TaskUserInput'

export interface TaskEditInput {
  title: string
  taskContentUnits: TaskContentUnitInput[]
  users: TaskUserInput[]
}
