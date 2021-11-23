import { PackageInfo } from '../PackageInfo'
import { StudentGroup } from '../StudentGroup'

export interface FavoriteBook {
  book: PackageInfo
  groups: StudentGroup[]
  isPersonalFavorite?: boolean
}
