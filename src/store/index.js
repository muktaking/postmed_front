import { combineReducers } from "redux";
import apiReducer from "./api";
import authReducer from "./auth";
import categoryReducer from "./category";
import dashboardReducer from "./dashboard";
import examPaperReducer from "./examPaper";
import examsReducer from "./exams";
import questionReducer from "./question";
import userReducer from "./user";

const appReducer = combineReducers({
  api: apiReducer,
  auth: authReducer,
  user: userReducer,
  category: categoryReducer,
  question: questionReducer,
  examPaper: examPaperReducer,
  exams: examsReducer,
  dashboard: dashboardReducer,
});

export const rootReducer = (state, action) => {
  
  if (action.type === 'RESET_APP') {
    state = undefined;
  }
  return appReducer(state, action);
}

export default rootReducer;