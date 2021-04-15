import { createSlice } from '@reduxjs/toolkit'
import { apiCallBegun } from './api'

const slice = createSlice({
  name: 'dashboard',
  initialState: {
    featuredExams: [],
    userExamInfo: {
      totalExam: [0, 0],
      rank: [1, 100],
      upcomingExam: ['No Exam', '01-02-03', null],
      result: [0.0, 100]
    },
    userExamStat: null
  },
  reducers: {
    dashboardStudent: (state, action) => {
      state.featuredExams = action.payload.featuredExams
      state.userExamInfo = action.payload.userExamInfo
      state.userExamStat = action.payload.userExamStat
    },
    userExamStat: (state, action) => {
      state.userExamStat = action.payload.userExamStat
    }
  }
})

export const { dashboardStudent, userExamStat } = slice.actions

export default slice.reducer

const url = '/dashboard/examstat'
const method = 'get'

export const userExamStatLoader = () => (dispatch) => {
  dispatch(
    apiCallBegun({
      url,
      method,
      onSuccess: userExamStat.type,
      sendToken: true
    })
  )
}
