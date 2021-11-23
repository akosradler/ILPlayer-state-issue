export interface NewsMethod {
  id: string
  name: string
}

export interface NewsItem {
  id: string
  title: string
  message: JSON
  publishedAt: string
  type: string
  grades: string[]
  methods: NewsMethod[]
}
