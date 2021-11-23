export interface RemindoPlayerPayload {
  portableTextContent: PayloadContent
}

interface PayloadContent {
  rows: PayloadRow[]
}

interface PayloadRow {
  children: PayloadColumn[]
}

interface PayloadColumn {
  children: PayloadColumnCell[]
}

interface PayloadColumnCell {
  children: PayloadColumnCellContent[]
}

interface PayloadColumnCellContent {
  text: string
}
