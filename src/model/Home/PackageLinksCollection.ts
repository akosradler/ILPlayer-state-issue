import { DeepLink } from './DeepLink'
import { DeepLinkSource } from './DeepLinkSource'

export interface PackageLinksCollection {
  id: string
  title: string
  source: DeepLinkSource
  deepLinks: DeepLink[]
}
