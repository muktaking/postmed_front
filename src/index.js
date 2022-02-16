/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import Bangla from "./lang/bn.json";
import rootReducers from "./store";
import { api } from "./store/middleware/index";

const store = configureStore({
  reducer: rootReducers,
  middleware: [...getDefaultMiddleware(), api],
});

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider locale={process.env.REACT_APP_LANG} defaultLocale={process.env.REACT_APP_DEFAULT_LANG}  messages={process.env.REACT_APP_LANG === 'bn' && Bangla}>
      <App />
    </IntlProvider>
  </Provider>,
  document.getElementById("root")
);
