export enum QuestionType {
  Choice = 'choice',
  TextEntry = 'text_entry',
  Order = 'order',
  ExtendedText = 'extended_text',
  InlineChoice = 'inline_choice',
  SelectPoint = 'select_point',
  PositionObject = 'position_object',
  Combined = 'combined',
  Match = 'match',
  GraphicAssociate = 'graphic_associate',
}

export interface QuestionBlock {
  identifier: string
  type: string
  html: string
}
