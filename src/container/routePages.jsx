import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import { canActivate, rolePermitted } from "../utils/canActivate";
import NotFoundPage from "./404";
import Landing from "./landing/landing";
import InnerContent from "./layout";
import Login from "./registration/login";
import LogoutPage from "./registration/logout";
import Signup from "./registration/signup";



const RoutePages = (props) => {
  // const tokenRole = props.token ? jwtDecode(props.token).role : -1;
  let routes = (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/exams" exact component={InnerContent} />
      <Route path="/exams/:id" exact component={InnerContent} />
      <Route path="/exams/free/:id" component={InnerContent} />
      <Route path="/result" component={InnerContent} />
      <Route path="/result/rank/:id" component={InnerContent} />
      <Route path="/error" render={(props)=><NotFoundPage {...props}/>} />
      <Route path="/" exact component={Landing} />
      <Route render={(props)=><NotFoundPage {...props}/>} />
    </Switch>
  );
  if (
    props.isAuthenticated &&
    canActivate(rolePermitted.student, props.token)
  ) {
    routes = (
      <Switch>
        <Route path="/dashboard" component={InnerContent} />
        <Route path="/exams" component={InnerContent} />
        <Route path="/exams/:id" component={InnerContent} />
        <Route path="/result" component={InnerContent} />
        <Route path="/rank" component={InnerContent} />
        <Route path="/logout" component={LogoutPage} />
        <Route path="/" exact component={Landing} />
        <Redirect to="/dashboard" />
      </Switch>
    );
  }

  if (canActivate(rolePermitted.mentor, props.token)) {
    
    routes = (
      <Switch>
        <Route path="/dashboard" component={InnerContent} />
        <Route path="/question" component={InnerContent} />
        <Route path="/exambuilder" component={InnerContent} />
        <Route path="/logout" component={LogoutPage} />
        <Route path="/" exact component={Landing} />
        <Redirect to="/dashboard" />
      </Switch>
    );
  }

  if (canActivate(rolePermitted.admin, props.token)) {
  
    routes = (
      <Switch>
        <Route path="/dashboard" component={InnerContent} />
        <Route path="/category" component={InnerContent} />
        <Route path="/question" component={InnerContent} />
        <Route path="/exambuilder" component={InnerContent} />
        <Route path="/logout" component={LogoutPage} />
        <Route path="/" exact component={Landing} />
        <Redirect to="/dashboard" />
      </Switch>
    );
  }

  return routes;
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    isAuthenticated: state.auth.token !== null,
  };
};

export default connect(mapStateToProps)(RoutePages);
//export default RoutePages;
