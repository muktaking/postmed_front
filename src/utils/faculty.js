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
