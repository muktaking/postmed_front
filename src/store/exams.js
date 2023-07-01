import { createSlice } from '@reduxjs/toolkit'
import { apiCallBegun } from './api'

const slice = createSlice({
  name: 'Exams',
  initialState: {
    loading: false,
    id: null,
    questions: [],
    questionIdsByOrder: [],
    examId: null,
    singleQuestionMark: null,
    singleStemMark: null,
    penaltyMark: null,
    timeLimit: null,
    type: null,
    isAnswerRestricted: true,
    examResult: null,
    totalMark: null,
    totalScore: null,
    totalPenaltyMark: null,
    totalScorePercentage: null,
    timeTakenToComplete: null,
    rankLoading: false,
    rank: null,
    exam: null, // store the individual exam
    error: null, // error related after submitting exam answer paper / post exam tasking
    examError: null, // error during pulling exam's questions from backend
    exams: [], // store the all exam lists
    disableQuestions: []
  },
  reducers: {
    resetExamResult: (state) => {
      state.loading = false
      state.examId = null
      state.examResult = null
      state.totalMark = null
      state.totalScore = null
      state.totalPenaltyMark = null
      state.totalScorePercentage = null
      state.timeTakenToComplete = null
      state.timeLimit = null
      state.type = null
      state.isAnswerRestricted = true
      state.rankLoading = false
      state.rank = null
      state.exam = null
      state.error = null
      state.questionIdsByOrder = []
      state.disableQuestions = []
    },
    loadingStart: (state) => {
      state.loading = true
    },
    getAllExams: (state, action) => {
      state.exams = action.payload
    },
    getExamById: (state, action) => {
      state.loading = false
      state.questions = action.payload.questions
      action.payload.questions.forEach((e) => {
        state.questionIdsByOrder.push(e.id)
      })
      state.id = action.payload.exam.id
      state.singleQuestionMark = action.payload.exam.singleQuestionMark
      state.singleStemMark = action.payload.exam.singleStemMark
      state.timeLimit = action.payload.exam.timeLimit
      state.type = action.payload.exam.type
      state.penaltyMark = action.payload.exam.penaltyMark
      state.isAnswerRestricted = action.payload.exam.isAnswerRestricted
    },
    getFreeExamById: (state, action) => {
      state.loading = false
      state.questions = action.payload.questions
      action.payload.questions.forEach((e) => {
        state.questionIdsByOrder.push(e.id)
      })
      state.id = action.payload.exam.id
      state.singleQuestionMark = action.payload.exam.singleQuestionMark
      state.singleStemMark = action.payload.exam.singleStemMark
      state.timeLimit = action.payload.exam.timeLimit
      state.penaltyMark = action.payload.exam.penaltyMark
    },
    getExamError: (state, action) => {
      state.loading = false
      state.examError = action.payload
    },
    examReset: (state) => {
      state.questions = []
      state.questionIdsByOrder = []
      state.id = null
      state.singleQuestionMark = null
      state.singleStemMark = null
      state.timeLimit = null
      state.type = null
      state.penaltyMark = null
      state.isAnswerRestricted = true
      state.examError = null
    },
    postExamById: (state, action) => {
      state.examId = action.payload.examId
      state.examResult = action.payload.resultArray
      state.totalMark = action.payload.totalMark
      state.totalScore = action.payload.totalScore
      state.totalPenaltyMark = action.payload.totalPenaltyMark
      state.totalScorePercentage = action.payload.totalScorePercentage
      state.timeTakenToComplete = action.payload.timeTakenToComplete
    },
    examRankStart: (state) => {
      state.rankLoading = true
    },
    examRankById: (state, action) => {
      state.rankLoading = false
      state.rank = action.payload.rank
      state.exam = action.payload.exam
    },
    postExamError: (state, action) => {
      state.rankLoading = false
      state.error = action.payload
    },
    disableQuestionsAdd: (state, action) => {
      state.disableQuestions.push(action.payload)
    },
    resetDisableQuestions: (state) => {
      state.disableQuestions = []
    }
  }
})

export const {
  resetExamResult,
  loadingStart,
  getAllExams,
  getExamById,
  getFreeExamById,
  getExamError,
  examReset,
  postExamById,
  examRankStart,
  examRankById,
  postExamError,
  disableQuestionsAdd,
  resetDisableQuestions
} = slice.actions

export default slice.reducer

export const getAllExamsLoader = () => (dispatch) => {
  dispatch(
    apiCallBegun({
      url: '/exams/',
      method: 'get',
      sendToken: true,
      onSuccess: getAllExams.type,
      onError: getExamError.type
    })
  )
}

export const getAllFreeExamsLoader = () => (dispatch) => {
  dispatch(
    apiCallBegun({
      url: '/exams/free',
      method: 'get',
      onSuccess: getAllExams.type,
      onError: getExamError.type
    })
  )
}

export const getExamByIdLoader = (id) => (dispatch) => {
  dispatch(examReset())
  dispatch(
    apiCallBegun({
      url: '/exams/questions/' + id,
      method: 'get',
      sendToken: true,
      onStart: loadingStart.type,
      onSuccess: getExamById.type,
      onError: getExamError.type
    })
  )
}

export const getFreeExamByIdLoader = (id) => (dispatch) => {
  dispatch(examReset())
  dispatch(
    apiCallBegun({
      url: '/exams/free/questions/' + id,
      method: 'get',
      sendToken: true,
      onStart: loadingStart.type,
      onSuccess: getFreeExamById.type,
      onError: getExamError.type
    })
  )
}

export const postExamByIdLoader = (data) => (dispatch) => {
  dispatch(
    apiCallBegun({
      url: '/postexams',
      method: 'post',
      data: data,
      sendToken: true,
      onSuccess: postExamById.type,
      onError: postExamError.type
    })
  )
}

export const postFreeExamByIdLoader = (data) => (dispatch) => {
  dispatch(
    apiCallBegun({
      url: '/postexams/free',
      method: 'post',
      data: data,
      onSuccess: postExamById.type,
      onError: postExamError.type
    })
  )
}

export const examRankByIdLoader = (id, courseId) => (dispatch) => {
  dispatch(
    apiCallBegun({
      url: '/postexams/rank/' + id,
      data: { id, courseId },
      method: 'post',
      onStart: examRankStart.type,
      onSuccess: examRankById.type,
      onError: postExamError.type
    })
  )
}

export const resetExamResultLoader = () => (dispatch) => {
  dispatch({ type: resetExamResult.type })
}
