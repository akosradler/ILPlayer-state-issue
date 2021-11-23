import { Metadata } from './Metadata'
import { OpeningImage } from './OpeningImage'

export interface PackageInfo {
  id: string
  title: string | null
  isLicensed: boolean
  metadata: Metadata | null
  openingImage: OpeningImage | null
}
