import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegun } from "./api";

const slice = createSlice({
  name: "Exams",
  initialState: {
    id: null,
    questions: [],
    questionIdsByOrder: [],
    singleQuestionMark: null,
    singleStemMark: null,
    penaltyMark: null,
    timeLimit: null,
    examResult: null,
    totalMark: null,
    totalScore: null,
    totalPenaltyMark: null,
    totalScorePercentage: null,
    timeTakenToComplete: null,
    rank: null,
    exam: null, // store the individual exam
    error: null,
    examError: null,
    exams: [], // store the all exam lists
  },
  reducers: {
    resetExamResult: (state) => {
      state.examResult = null;
      state.totalMark = null;
      state.totalScore = null;
      state.totalPenaltyMark = null;
      state.totalScorePercentage = null;
      state.timeTakenToComplete = null;
      state.rank = null;
      state.exam = null;
      state.error = null;
      state.questionIdsByOrder = [];
    },
    getAllExams: (state, action) => {
      state.exams = action.payload;
    },
    getExamById: (state, action) => {
      state.questions = action.payload.questions;
      action.payload.questions.forEach((e) => {
        state.questionIdsByOrder.push(e.id);
      });
      state.id = action.payload.exam.id;
      state.singleQuestionMark = action.payload.exam.singleQuestionMark;
      state.singleStemMark = action.payload.exam.singleStemMark;
      state.timeLimit = action.payload.exam.timeLimit;
      state.penaltyMark = action.payload.exam.penaltyMark;
    },
    getFreeExamById: (state, action) => {
      state.questions = action.payload.questions;
      action.payload.questions.forEach((e) => {
        state.questionIdsByOrder.push(e.id);
      });
      state.id = action.payload.exam.id;
      state.singleQuestionMark = action.payload.exam.singleQuestionMark;
      state.singleStemMark = action.payload.exam.singleStemMark;
      state.timeLimit = action.payload.exam.timeLimit;
      state.penaltyMark = action.payload.exam.penaltyMark;
    },
    getExamError: (state, action) => {
      state.examError = action.payload;
    },
    resetExamError: (state) => {
      state.examError = null;
    },
    postExamById: (state, action) => {
      state.examResult = action.payload.resultArray;
      state.totalMark = action.payload.totalMark;
      state.totalScore = action.payload.totalScore;
      state.totalPenaltyMark = action.payload.totalPenaltyMark;
      state.totalScorePercentage = action.payload.totalScorePercentage;
      state.timeTakenToComplete = action.payload.timeTakenToComplete;
    },
    examRankById: (state, action) => {
      state.rank = action.payload.rank;
      state.exam = action.payload.exam;
    },
    postExamError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  resetExamResult,
  getAllExams,
  getExamById,
  getFreeExamById,
  getExamError,
  resetExamError,
  postExamById,
  examRankById,
  postExamError,
} = slice.actions;

export default slice.reducer;

export const getAllExamsLoader = () => (dispatch) => {
  dispatch(
    apiCallBegun({
      url: "/exams/",
      method: "get",
      sendToken: true,
      onSuccess: getAllExams.type,
      onError: getExamError.type,
    })
  );
};

export const getAllFreeExamsLoader = () => (dispatch) => {
  dispatch(
    apiCallBegun({
      url: "/exams/free",
      method: "get",
      onSuccess: getAllExams.type,
      onError: getExamError.type,
    })
  );
};

export const getExamByIdLoader = (id) => (dispatch) => {
  dispatch(
    apiCallBegun({
      url: "/exams/questions/" + id,
      method: "get",
      sendToken: true,
      onSuccess: getExamById.type,
      onError: getExamError.type,
    })
  );
};

export const getFreeExamByIdLoader = (id) => (dispatch) => {
  dispatch(
    apiCallBegun({
      url: "/exams/free/questions/" + id,
      method: "get",
      sendToken: true,
      onSuccess: getFreeExamById.type,
      onError: getExamError.type,
    })
  );
};

export const postExamByIdLoader = (data) => (dispatch) => {
  dispatch(
    apiCallBegun({
      url: "/postexams",
      method: "post",
      data: data,
      sendToken: true,
      onSuccess: postExamById.type,
      onError: postExamError.type,
    })
  );
};

export const postFreeExamByIdLoader = (data) => (dispatch) => {
  dispatch(
    apiCallBegun({
      url: "/postexams/free",
      method: "post",
      data: data,
      onSuccess: postExamById.type,
      onError: postExamError.type,
    })
  );
};

export const examRankByIdLoader = (id) => (dispatch) => {
  dispatch(
    apiCallBegun({
      url: "/postexams/rank/" + id,
      method: "get",
      onSuccess: examRankById.type,
      onError: postExamError.type,
    })
  );
};

export const resetExamResultLoader = () => (dispatch)=> {
  dispatch({type: resetExamResult.type})
}
