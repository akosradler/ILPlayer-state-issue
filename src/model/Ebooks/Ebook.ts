import { ContentUnit } from '../ContentUnit'

export type Ebook = {
  id: string
  title: string
  type: 'MAIN' | 'ANSWER'
}

export type MainBook = Ebook & { type: 'MAIN' }

export type AnswerBook = Ebook & { shared: string[]; type: 'ANSWER' }

export type EbookContentUnit = ContentUnit

export const isAnswerEbook = (ebook: Ebook): ebook is AnswerBook => ebook.type === 'ANSWER'
