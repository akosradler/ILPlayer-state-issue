import { Breadcrumb } from '../Breadcrumb'

export interface DeepLink {
  breadcrumbs: Breadcrumb[]
  contentType: string
  url: string
}
