import { School } from './School'
import { TypographySize } from './TypographySize'
import { UiTheme } from './UiTheme'

export interface Me {
  id: string
  isTeacher: boolean
  isPublisher: boolean
  organizationId?: string
  roles: string[]
  displayName: string
  firstName: string
  lastName: string
  middleName: string
  school?: School
  sessionId?: string
  __typename?: 'User'
  uiTheme?: UiTheme
  typographySize?: TypographySize
  readAloudToggle?: boolean
  lastReadNewsDate?: string
}
