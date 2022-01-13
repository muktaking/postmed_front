import { createSlice } from '@reduxjs/toolkit'
import { apiCallBegun } from './api'

const slice = createSlice({
  name: 'Courses',
  initialState: {
    // id: null,
    // title: null,
    // description: null,
    // createdAt: null,
    // startDate: null,
    // endDate: null,
    courses: [],
    coursesEnrolledByStu: [],
    expectedEnrolledStuIds: []
  },
  reducers: {
    getCourses: (state, action) => {
      state.courses = action.payload
    },
    getCoursesEnrolledByStu: (state, action) => {
      state.coursesEnrolledByStu = action.payload
    }
  }
})
export const { getCourses, getCoursesEnrolledByStu } = slice.actions
export default slice.reducer

const url = '/courses'
const method = 'get'

export const fetchCourseLoader = () => (dispatch) => {
  dispatch(
    apiCallBegun({
      url,
      method,
      onSuccess: getCourses.type
    })
  )
}

export const fetchCourseEnrolledByStuLoader = () => (dispatch) => {
  dispatch(
    apiCallBegun({
      url: '/courses/enrolled/courses/',
      method,
      onSuccess: getCoursesEnrolledByStu.type
    })
  )
}
