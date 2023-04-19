export const pgProgramme = [
  {
    name: 'Residency (MD/MS)',
    id: 1,
    courseIds: [0, 1, 2, 4],
    imageName: 'residency.jpg'
  },
  {
    name: 'FCPS',
    id: 0,
    courseIds: [1, 2, 3],
    imageName: 'bcps.png'
  },
  {
    name: 'Diploma',
    id: '2',
    courseIds: [1, 2],
    imageName: 'diploma.jpeg'
  }
]
export const faculty = {
  basic: 0,
  medicine: 1,
  surgery: 2,
  gynecology: 3,
  paediatrics: 4
}

export const PgCourseType = {
  Fellowship: 0,
  Residency: 1,
  Diploma: 2,
  MembershipOfRoyalColledge: 3,
  Usmle: 4,
  Others: 5
}

export const PgCourseTypeHumanName = {
  FCPS: 0,
  'Residency (MD/MS)': 1,
  Diploma: 2,
  'MRCP / MRCS': 3,
  USMLE: 4,
  Others: 5
}

export function pgCourseTypeToString(num) {
  switch (num) {
    case 0:
      return 'FCPS'
    case 1:
      return 'Residency (MD/MS)'
    case 2:
      return 'Diploma'
    case 3:
      return 'MRCP/ MRCS'
    case 4:
      return 'USMLE'
    case 5:
      return 'Others'

    default:
      return 'Null'
  }
}

export function facultyToString(num) {
  switch (num) {
    case 0:
      return 'Basic Science & Paraclinical Science'
    case 1:
      return 'Medicine'
    case 2:
      return 'Surgery'
    case 3:
      return 'Gynecology'
    case 4:
      return 'Paediatrics'

    default:
      return 'Null'
  }
}

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
