import { createSlice } from '@reduxjs/toolkit'
import { apiCallBegun } from './api'

const slice = createSlice({
  name: 'Courses',
  initialState: {
    loading: false,
    courses: null,
    coursesEnrolledByStu: null,
    expectedEnrolledStuIds: null,
    error: null
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
    },
    courseError: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    courseReset: (state, action) => {
      state.loading = false
      state.error = null
    }
  }
})
export const {
  getCourses,
  getCoursesEnrolledByStu,
  loadingStart,
  courseError,
  courseReset
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
      onSuccess: getCourses.type,
      onError: courseError.type
    })
  )
}

export const fetchCourseByFilterLoader =
  (pgCourseType, faculty, search) => (dispatch) => {
    console.log(search)
    dispatch(
      apiCallBegun({
        url:
          url +
          '/filter?' +
          (pgCourseType ? 'pgCourseType=' + pgCourseType + '&' : '') +
          (faculty ? 'faculty=' + faculty + '&' : ' ') +
          (search ? '&search=' + search : ''),
        method,
        onStart: loadingStart.type,
        onSuccess: getCourses.type,
        onError: courseError.type
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

export const courseResetLoader = () => (dispatch) => {
  dispatch(courseReset())
}
