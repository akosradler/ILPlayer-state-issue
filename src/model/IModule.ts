import { ContentUnit } from './ContentUnit'

export interface IModule {
  id: string
  title: string | null
  contentUnits: ContentUnit[] | null
}
