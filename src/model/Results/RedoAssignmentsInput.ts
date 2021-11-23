export type RedoAssignmentsInput = {
  methodId: string
  contentUnitIdStudentIdInputs: ContentUnitIdStudentIdInput[]
}

export type ContentUnitIdStudentIdInput = {
  contentUnitId: string
  studentId: string
}
