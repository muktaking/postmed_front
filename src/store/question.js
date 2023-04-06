import { createSlice } from '@reduxjs/toolkit'
import { apiCallBegun } from './api'

const slice = createSlice({
  name: 'Question',
  initialState: {
    questions: [],
    error: null,
    response: null,
    loading: false
  },
  reducers: {
    getQuestions: (state, action) => {
      state.questions = action.payload
    },
    loadingStart: (state, action) => {
      state.loading = true
    },
    getResponse: (state, action) => {
      state.response = action.payload
      state.loading = false
    },
    resetResponse: (state, action) => {
      state.response = null
      state.loading = false
    }
  }
})

export const { getQuestions, loadingStart, getResponse, resetResponse } =
  slice.actions

export default slice.reducer

export const resetResponseLoader = () => (dispatch) => {
  dispatch({
    type: resetResponse.type
  })
}

export const getQuestionLoader = () => (dispatch) => {
  dispatch(
    apiCallBegun({
      url: '/questions',
      method: 'get',
      //sendToken: true,
      //data,
      //config,
      onSuccess: getQuestions.type
    })
  )
}

export const getQuestionByCategoryLoader = (id) => (dispatch) => {
  dispatch(
    apiCallBegun({
      url: '/questions/category/' + id,
      method: 'get',
      onSuccess: getQuestions.type
    })
  )
}

export const createQuestionLoader = (data) => (dispatch) => {
  const config = { headers: { 'Content-Type': 'multipart/form-data' } }
  const questionData = new FormData()
  Object.keys(data).forEach((key) => {
    data[key] && questionData.append(key, data[key])
  })

  dispatch(
    apiCallBegun({
      url: '/questions',
      method: 'post',
      sendToken: true,
      data,
      config,
      onStart: loadingStart.type,
      onSuccess: getResponse.type,
      onError: getResponse.type
    })
  )
}

export const uploadQuestionLoader = (data) => (dispatch) => {
  const config = { headers: { 'Content-Type': 'multipart/form-data' } }
  const questionData = new FormData()
  Object.keys(data).forEach((key) => {
    data[key] && questionData.append(key, data[key])
  })

  dispatch(
    apiCallBegun({
      url: '/questions/files',
      method: 'post',
      sendToken: true,
      data,
      config
    })
  )
}

export const editQuestionLoader = (id, data) => (dispatch) => {
  const config = { headers: { 'Content-Type': 'multipart/form-data' } }
  const questionData = new FormData()
  Object.keys(data).forEach((key) => {
    data[key] && questionData.append(key, data[key])
  })

  dispatch(
    apiCallBegun({
      url: '/questions/' + id,
      method: 'patch',
      sendToken: true,
      data,
      config,
      onStart: loadingStart.type,
      onSuccess: getResponse.type,
      onError: getResponse.type
    })
  )
}

export const deleteQuestionLoader = (id) => (dispatch) => {
  dispatch(
    apiCallBegun({
      url: '/questions/' + id,
      method: 'delete',
      sendToken: true,
      onStart: loadingStart.type,
      onSuccess: getResponse.type,
      onError: getResponse.type
    })
  )
}
