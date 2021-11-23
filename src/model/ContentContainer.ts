import { ContentItem } from './ContentItem'

export enum ContentContainerType {
  Paragraph = 'Paragraph',
  Domain = 'Domain',
  MaterialPlaceholder = 'MaterialPlaceholder',
  Cluster = 'Cluster',
}

export enum ContentGroupType {
  Paragraph = 'paragraphGrouped',
  Domain = 'domainGrouped',
  None = 'none',
}

export interface ContentContainer {
  id: string
  title: string
  subTitle?: string
  shortTitle?: string
  contentItems: ContentItem[]
  subcontainers?: ContentContainer[]
  contentContainerType?: ContentContainerType
}
