import { createSlice } from '@reduxjs/toolkit'
import { apiCallBegun } from './api'

const slice = createSlice({
  name: 'user',
  initialState: {
    id: null,
    firstName: null,
    lastName: null,
    userName: null,
    email: null,
    role: null,
    mobile: null,
    userFrom: Date.now(),
    address: null,
    avatar: null,
    gender: null,
    faculty: null,
    institution: null
  },
  reducers: {
    getUser: (user, action) => {
      user.id = action.payload.id
      user.firstName = action.payload.firstName
      user.lastName = action.payload.lastName
      user.userName = action.payload.userName
      user.email = action.payload.email
      user.mobile = action.payload.mobile
      user.userFrom = action.payload.createdAt
      user.role = action.payload.role
      user.address = action.payload.address
      user.avatar = action.payload.avatar
      user.gender = action.payload.gender
      user.faculty = action.payload.faculty
      user.institution = action.payload.institution
    }
  }
})
export const { getUser } = slice.actions
export default slice.reducer

const url = '/users'
const method = 'get'

export const getUserLoader = () => (dispatch) => {
  dispatch(
    apiCallBegun({
      url,
      method,
      onSuccess: getUser.type,
      sendToken: true
    })
  )
}
