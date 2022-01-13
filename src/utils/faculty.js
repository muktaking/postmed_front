export const faculty = {
  basic: 0,
  medicine: 1,
  surgery: 2,
  gynecology: 3,
  paediatrics: 4
}

export function facultyToString(num) {
  switch (num) {
    case 0:
      return 'Basic'
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
