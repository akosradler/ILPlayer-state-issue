import { Result } from '../Results'

export interface PlannedAssignmentResult {
  id: string
  bookId: string
  chapterId: string
  relatedStructureId: string
  assignmentTitle: string
  assignmentClusterName: string
  assignmentType: string
  startDate: string
  endDate: string
  result: Result

  url: string
  contentId: string
  classification: string
  subClassification: string
  fileType: string
  version: string
  assignmentSequence: number
  duration: string

  bookTitle: string
  chapterTitle: string
  chapterSequence: number
  paragraphTitle: string
  paragraphSequence: number
}
