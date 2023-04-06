import { createSlice } from '@reduxjs/toolkit'
import { apiCallBegun } from './api'

const slice = createSlice({
  name: 'ExamPaper',
  initialState: {
    loading: false,
    questions: [],
    ids: [],
    success: null,
    error: null
  },
  reducers: {
    selectedQuestions: (state, action) => {
      state.questions = action.payload.questions
      state.ids = action.payload.ids
    },
    onLoading: (state) => {
      state.loading = true
    },
    onSuccess: (state, action) => {
      state.success = action.payload
      state.loading = false
    },
    onError: (state, action) => {
      state.error = action.payload
      state.loading = false
    }
  }
})

export const { selectedQuestions, onSuccess, onError, onLoading } =
  slice.actions

export default slice.reducer

export const selectedQuestionsLoader = (questions, ids) => (dispatch) => {
  dispatch(selectedQuestions({ questions, ids }))
}

export const onLoadingLoader = () => (dispatch) => {
  dispatch({ type: onLoading.type })
}

export const postExamProfile =
  (examSpec, questions, id = null) =>
  (dispatch) => {
    dispatch(
      apiCallBegun({
        url: id ? `/exams/${id}` : '/exams',
        method: id ? 'patch' : 'post',
        data: { ...examSpec, questions },
        onSuccess: onSuccess.type,
        onError: onError.type,
        sendToken: true
      })
    )
  }
