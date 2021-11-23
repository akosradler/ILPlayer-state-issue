import { Assignment } from './Assignment'
import { EbookContentUnit } from './Ebooks/Ebook'
import { IModule } from './IModule'
import { ReferenceUnit } from './ReferenceUnit'
import { StudentModuleResults } from './Results'
import { TeacherGuide } from './TeacherGuide'

export interface ExtraMaterials extends IModule {
  teacherGuide: TeacherGuide | null
  assignments: Assignment[] | null
  drilling: Assignment[] | null
  studentResults: StudentModuleResults[]
  referenceUnits: ReferenceUnit[] | null
  ebook: EbookContentUnit | null
  type: 'EXTRAMATERIALS'
}
