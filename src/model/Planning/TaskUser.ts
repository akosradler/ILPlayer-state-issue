import { User } from '../User'

export interface TaskUser {
  id: string
  groupId: string
  groupName: string
  student: Pick<User, 'firstName' | 'lastName'>
}
