import { NewsItem } from './NewsItem'

export interface NewsCollection {
  total: number
  skip: number
  limit: number
  newsItems: NewsItem[]
}
