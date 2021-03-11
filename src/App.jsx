/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import RoutePages from "./container/routePages";
import { checkAuthState } from "./store/auth";
class App extends Component {
  componentDidMount() {
    this.props.onTryAutologin();
  }
  render() {
    return (
      <>
        <Helmet
          titleTemplate="Prostuti - %s"
          defaultTitle="Prostuti- The Suffix of Staying Ahead"
        >
          <html lang="en bn" amp />
          <link rel="canonical" href={process.env.REACT_APP_SITE_URL} />
          <meta
            name="description"
            content="Online exam platform to make the knowledge more sharp. Here you can exam mutiple choice or true-false with many more types questions. "
          />
          <meta property="og:type" content="website" />
        </Helmet>
        <BrowserRouter>
          <RoutePages />
        </BrowserRouter>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutologin: () => {
      dispatch(checkAuthState());
    },
  };
};

export default connect(null, mapDispatchToProps)(App);
