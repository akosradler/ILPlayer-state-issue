import { User } from './User'

export interface StudentGroup {
  id: string
  name: string
  level?: string
  grade?: string
  isClass?: boolean
  isExternallyManaged: boolean
  isOpenForUserSubscription: boolean
  enlisted: boolean
  students?: User[]
}
