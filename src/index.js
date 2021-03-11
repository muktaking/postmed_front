/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUp,
  faBalanceScale,
  faBars,
  faBell,
  faCalendarAlt,
  faChartBar,
  faChartLine,
  faClock,
  faCloud,
  faComments,
  faEnvelope,
  faFile,
  faFileAlt,
  faFileImport,
  faHome,
  faHourglass,
  faMedal,
  faPoll,
  faQuoteLeft,
  faSearch,
  faShoppingCart,
  faSignOutAlt,
  faStar,
  faSync,
  faTable,
  faThumbsUp,
  faUser,
  faUsers,
  faWrench
} from "@fortawesome/free-solid-svg-icons";
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

library.add(
  fab,
  faHome,
  faUser,
  faEnvelope,
  faShoppingCart,
  faChartLine,
  faChartBar,
  faTable,
  faWrench,
  faFileAlt,
  faSearch,
  faComments,
  faBell,
  faSignOutAlt,
  faSync,
  faFileImport,
  faMedal,
  faClock,
  faPoll,
  faBalanceScale,
  faUsers,
  faFile,
  faCalendarAlt,
  faStar,
  faBars,
  faCloud,
  faHourglass,
  faThumbsUp,
  faQuoteLeft,
  faArrowUp
);

const store = configureStore({
  reducer: rootReducers,
  middleware: [...getDefaultMiddleware(), api],
});

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider locale={Bangla} messages={Bangla}>
      <App />
    </IntlProvider>
  </Provider>,
  document.getElementById("root")
);
