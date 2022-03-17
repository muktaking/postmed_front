import { createSlice } from '@reduxjs/toolkit'
import { apiCallBegun } from './api'

const slice = createSlice({
  name: 'Courses',
  initialState: {
    loading: false,
    courses: [],
    coursesEnrolledByStu: [],
    expectedEnrolledStuIds: []
  },
  reducers: {
    getCourses: (state, action) => {
      state.courses = action.payload
      state.loading = false
    },
    getCoursesEnrolledByStu: (state, action) => {
      state.coursesEnrolledByStu = action.payload
      state.loading = false
    },
    loadingStart: (state, action) => {
      state.loading = true
    }
  }
})
export const {
  getCourses,
  getCoursesEnrolledByStu,
  loadingStart
} = slice.actions
export default slice.reducer

const url = '/courses'
const method = 'get'

export const fetchCourseLoader = () => (dispatch) => {
  dispatch(
    apiCallBegun({
      url,
      method,
      onStart: loadingStart.type,
      onSuccess: getCourses.type
    })
  )
}

export const fetchCourseEnrolledByStuLoader = () => (dispatch) => {
  dispatch(
    apiCallBegun({
      url: '/courses/enrolled/courses/',
      method,
      onStart: loadingStart.type,
      onSuccess: getCoursesEnrolledByStu.type
    })
  )
}
