import { TaskContentUnitInput } from './TaskContentUnitInput'
import { TaskUserInput } from './TaskUserInput'

export interface TaskCreationInput {
  bookId: string
  title: string
  taskContentUnits: TaskContentUnitInput[]
  users: TaskUserInput[]
}
