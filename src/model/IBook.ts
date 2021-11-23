import { IBookAccess } from './IBookAccess'

export interface IBook {
  id: string
  title: string
  sequence: number
  thumbnailLargeUri?: string
  bookTitleId: string
  methodGroupTitle: string
  groupAccess: IBookAccess[]
}
