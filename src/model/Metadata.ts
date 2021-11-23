export type BusinessUnit = 'Noordhoff' | 'Liber' | 'Plantyn'
export type CdpStatus = 'plp' | 'nlp' | 'transition'

export type AdviceType = 'chapter' | 'paragraph'

export interface Metadata {
  method: string | null
  methodId: string
  methodPlpUrl?: string
  businessUnit: BusinessUnit
  shortTitle: string | null
  edition: string[] | null
  grade: string[] | null
  schoolType: string[] | null
  targetYear: string[] | null
  discipline: string | null
  testUrl: string | null
  adviceType: AdviceType | null
  categories: string[] | null
  cdpStatus: CdpStatus | null
  vocabularyForeignLanguage?: string
  vocabularyLocalLanguage?: string
  targetAudienceLanguage?: string
  slimStampen?: boolean | null
}
