import { combineReducers } from "redux";
import apiReducer from "./api";
import authReducer from "./auth";
import categoryReducer from "./category";
import dashboardReducer from "./dashboard";
import examPaperReducer from "./examPaper";
import examsReducer from "./exams";
import questionReducer from "./question";
import userReducer from "./user";

export default combineReducers({
  api: apiReducer,
  auth: authReducer,
  user: userReducer,
  category: categoryReducer,
  question: questionReducer,
  examPaper: examPaperReducer,
  exams: examsReducer,
  dashboard: dashboardReducer,
});
