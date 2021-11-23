export interface PromotedItem {
  id: string
  labelTextKey: string
  url: string
}

export enum PromotedItemEnum {
  SMALL_ATLAS = 'kb',
  BIG_ATLAS = 'gb',
  EXAM_PRACTICE = 'es',
  DIGITAL_TESTS = 'tp',
  NO_FEEDBACK = 'nf',
}
