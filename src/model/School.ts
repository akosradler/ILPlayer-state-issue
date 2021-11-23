export interface School {
  id: string
  name: string
  description?: string
}

export interface SchoolData {
  id: string
  number?: number
  description: string
}

const schoolDataRegexp = /^(?<number>\d+),(?<description>.*)$/

export const getSchoolData = ({ id, name, description }: School) => {
  const match = description?.match(schoolDataRegexp) || name.match(schoolDataRegexp)
  return {
    id,
    number: match?.groups?.number ? Number(match.groups.number) : undefined,
    description: match?.groups?.description?.trim() || description || name,
  }
}
