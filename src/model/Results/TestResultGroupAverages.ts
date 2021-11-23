export interface DomainResultAverage {
  name: string
  score: number
}

export interface TestResultGroupAverages {
  groupAverage: number
  studentResults: number
  studentCount: number
  domainAverage: DomainResultAverage[]
}
