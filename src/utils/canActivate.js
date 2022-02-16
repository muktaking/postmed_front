import jwtDecode from 'jwt-decode'

export const rolePermitted = {
  guest: 0,
  student: 1,
  mentor: 2,
  moderator: 3,
  coordinator: 4,
  admin: 5
}

export const roleArray = [
  'Student',
  'Mentor',
  'Moderator',
  'Coordinator',
  'Admin'
]

export function roleToString(num) {
  switch (num) {
    case 1:
      return 'Student'
    case 2:
      return 'Mentor'
    case 3:
      return 'Modarator'
    case 4:
      return 'Coordinator'
    case 5:
      return 'Admin'

    default:
      return 'Guest'
  }
}

export function identityStatusToString(num) {
  switch (num) {
    case 0:
      return 'Unchecked'
    case 1:
      return 'Checked'
    case 2:
      return 'Unrequired'
    default:
      return 'Unrequired'
  }
}

export function loginProviderToString(num) {
  switch (num) {
    case 0:
      return 'Local'
    case 1:
      return 'Facebook'
    default:
      return 'Local'
  }
}

export const canActivate = (role, token) => {
  const tokenRole = token ? jwtDecode(token).role : -1
  return tokenRole >= role
}
