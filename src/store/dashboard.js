import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "dashboard",
  initialState: {
    featuredExams: [],
    userExamInfo: {
      totalExam: [0, 0],
      rank: [1, 100],
      upcomingExam: ["No Exam", "01-02-03",null],
      result: [0.0, 100],
    },
    userExamStat: null,
  },
  reducers: {
    dashboardStudent: (state, action) => {
      state.featuredExams = action.payload.featuredExams;
      state.userExamInfo = action.payload.userExamInfo;
      state.userExamStat = action.payload.userExamStat;
    },
  },
});

export const { dashboardStudent } = slice.actions;

export default slice.reducer;

// export const dashboardStudentLoader = (data) => (dispatch) => {
//   dispatch({
//     type: dashboardStudent.type,
//     payload: data,
//   });
// };
