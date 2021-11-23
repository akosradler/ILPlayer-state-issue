export type BreadCrumbType =
  | 'PACKAGE'
  | 'THEME'
  | 'CORE'
  | 'TEACHERGUIDE'
  | 'EBOOKS'
  | 'EBOOK'
  | 'TEST'
  | 'STUDYADVICE'
  | 'EXTRAMATERIALS'

export type AssessmentBreadcrumbType = 'HOME' | 'NOTIFICATIONS' | 'ALLRESULT' | 'STUDENTRESULT' | 'PLANNEDTESTS'

export interface Breadcrumb {
  id: string
  title: string
  type: BreadCrumbType | AssessmentBreadcrumbType
}
