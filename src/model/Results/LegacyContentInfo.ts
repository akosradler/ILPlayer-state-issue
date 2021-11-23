export type LegacyContentFileType = 'xapiSCO' | 'SCORMSCO' | 'dita'

export type LegacyContentInfo = {
  id: string
  url: string
  externalId: string
  fileType: LegacyContentFileType
  methodId: string
}
