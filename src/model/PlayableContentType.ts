import { ContentUnitType } from './ContentUnitType'

export type PlayableContentType = Extract<
  ContentUnitType,
  'ASSIGNMENT' | 'DRILLING' | 'THEORY' | 'POLL' | 'WARMUP' | 'TEST'
>
