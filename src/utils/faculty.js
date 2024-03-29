export const pgProgramme = [
  {
    name: 'Residency',
    id: 2,
    courseIds: [1, 2, 3, 5],
    imageName: 'residency.jpg'
  },
  {
    name: 'FCPS',
    id: 1,
    courseIds: [2, 3, 4],
    imageName: 'bcps.jpg'
  },
  {
    name: 'Diploma',
    id: '3',
    courseIds: [2, 3],
    imageName: 'diploma.jpg'
  }
]
export const faculty = {
  all: 0,
  basic: 1,
  medicine: 2,
  surgery: 3,
  gynecology: 4,
  paediatrics: 5
}

export const PgCourseType = {
  All: 0,
  Fellowship: 1,
  Residency: 2,
  Diploma: 3,
  MembershipOfRoyalColledge: 4,
  Usmle: 5,
  Others: 6
}

export const PgCourseTypeHumanName = {
  FCPS: 1,
  Residency: 2,
  Diploma: 3,
  'MRCP / MRCS': 4,
  USMLE: 5,
  Others: 6
}

export function pgCourseTypeToString(num) {
  switch (num) {
    case 1:
      return 'FCPS'
    case 2:
      return 'Residency'
    case 3:
      return 'Diploma'
    case 4:
      return 'MRCP/ MRCS'
    case 5:
      return 'USMLE'
    case 6:
      return 'Others'
    case 0:
      return 'Miscellaneous'
    default:
      return 'Null'
  }
}

export function facultyToString(num) {
  switch (num) {
    case 1:
      return 'Basic Science'
    case 2:
      return 'Medicine'
    case 3:
      return 'Surgery'
    case 4:
      return 'Gynecology'
    case 5:
      return 'Paediatrics'
    case 0:
      return 'Miscellaneous'

    default:
      return 'Null'
  }
}
export const examTypes = [
  { name: 'Assignment', value: 0 },
  { name: 'Weekly', value: 1 },
  { name: 'Monthly', value: 2 },
  { name: 'Assesment', value: 3 },
  { name: 'Term', value: 4 },
  { name: 'Test', value: 5 },
  { name: 'Final', value: 6 }
]

export function examTypeToString(num) {
  switch (num) {
    case 0:
      return 'Assignment'
    case 1:
      return 'Weekly'
    case 2:
      return 'Monthly'
    case 3:
      return 'Assesment'
    case 4:
      return 'Term'
    case 5:
      return 'Test'
    case 6:
      return 'Final'

    default:
      return 'Null'
  }
}
