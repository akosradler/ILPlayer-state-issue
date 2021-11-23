export type LearningObjective = {
  name: string
  value: string
  dataType: string
  children?: LearningObjective[]
}
