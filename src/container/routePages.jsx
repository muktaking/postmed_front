import { css } from '@emotion/core'
import pMinDelay from 'p-min-delay'
import React, { createContext, lazy, Suspense, useState } from 'react'
import { connect } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader'
import { canActivate, rolePermitted } from '../utils/canActivate'
//import NotFoundPage from "./404";
const mDelay = 500

const NotFoundPage = lazy(() => pMinDelay(import('./404'), mDelay))
//import Landing from "./landing/landing";
let Landing = lazy(() => pMinDelay(import('./landing/landing'), mDelay))
//import InnerContent from "./layout";
let InnerContent = lazy(() => pMinDelay(import('./layout'), mDelay))
//import Login from "./registration/login";
const Login = lazy(() => pMinDelay(import('./registration/login'), mDelay))
//import LogoutPage from "./registration/logout";
const LogoutPage = lazy(() =>
  pMinDelay(import('./registration/logout'), mDelay)
)
//import Signup from "./registration/signup";
const Signup = lazy(() => pMinDelay(import('./registration/signup'), mDelay))

const Reset = lazy(() => pMinDelay(import('./registration/reset'), mDelay))

const override = css`
  display: block;
  margin: 45vh auto;
  bordeClimbingBoxLoader
  r-color: red;
`
export const StickyBottomContext = createContext()

const RoutePages = (props) => {
  const [stickyState, setStickyState] = useState(true)

  let routes = (
    <Suspense fallback={<ClimbingBoxLoader css={override} />}>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/reset/:id' component={Reset} />
        <Route path='/exams' exact component={InnerContent} />
        <Route path='/exams/courses/:id' component={InnerContent} />
        <Route path='/exams/:id' component={InnerContent} />
        {/* <Route path='/exams/:id' exact component={InnerContent} /> */}
        <Route path='/courses' exact component={InnerContent} />
        <Route path='/courses/:id' exact component={InnerContent} />
        <Route path='/exams/category/:id' exact component={InnerContent} />
        <Route path='/exams/free/:id' component={InnerContent} />
        <Route path='/result' component={InnerContent} />
        <Route path='/result/rank/:id' component={InnerContent} />
        <Route path='/print' component={InnerContent} />
        <Route path='/help' component={InnerContent} />
        <Route path='/payment' component={InnerContent} />
        <Route path='/terms' component={InnerContent} />
        <Route path='/error' render={(props) => <NotFoundPage {...props} />} />
        {/* change to display on langing page */}
        <Route path='/' exact component={Landing} />
        <Route render={(props) => <NotFoundPage {...props} />} />
      </Switch>
    </Suspense>
  )
  if (
    props.isAuthenticated &&
    canActivate(rolePermitted.student, props.token)
  ) {
    routes = (
      <Suspense fallback={<ClimbingBoxLoader css={override} />}>
        <Switch>
          <Route path='/dashboard' component={InnerContent} />
          <Route path='/courses' component={InnerContent} />
          <Route path='/courses/:id' exact component={InnerContent} />
          <Route path='/reports' component={InnerContent} />
          <Route path='/reports/actions' component={InnerContent} />
          <Route path='/profile' component={InnerContent} />
          <Route path='/exams' component={InnerContent} />
          <Route path='/exams/courses/:id' component={InnerContent} />
          <Route path='/notification' component={InnerContent} />
          <Route path='/exams/:id' component={InnerContent} />
          <Route path='/exams/free/:id' component={InnerContent} />
          <Route path='/result' component={InnerContent} />
          <Route path='/rank' component={InnerContent} />
          <Route path='/settings' component={InnerContent} />
          <Route path='/print' component={InnerContent} />
          <Route path='/logout' component={LogoutPage} />
          <Route path='/help' component={InnerContent} />
          <Route path='/payment' component={InnerContent} />
          <Route path='/terms' component={InnerContent} />
          {/* change to display on langing page */}
          <Route path='/' exact component={Landing} />
          <Redirect to='/dashboard' />
        </Switch>
      </Suspense>
    )
  }

  if (canActivate(rolePermitted.mentor, props.token)) {
    routes = (
      <Suspense fallback={<ClimbingBoxLoader css={override} />}>
        <Switch>
          <Route path='/dashboard' component={InnerContent} />
          <Route path='/profile' component={InnerContent} />
          <Route path='/question' component={InnerContent} />
          {/* <Route path='/exambuilder' component={InnerContent} /> */}
          <Route path='/settings' component={InnerContent} />
          <Route path='/print' component={InnerContent} />
          <Route path='/logout' component={LogoutPage} />
          <Route path='/help' component={InnerContent} />
          <Route path='/payment' component={InnerContent} />
          <Route path='/terms' component={InnerContent} />
          {/* change to display on langing page */}
          <Route path='/' exact component={Landing} />
          <Redirect to='/dashboard' />
        </Switch>
      </Suspense>
    )
  }

  if (canActivate(rolePermitted.moderator, props.token)) {
    routes = (
      <Suspense fallback={<ClimbingBoxLoader css={override} />}>
        <Switch>
          <Route path='/dashboard' component={InnerContent} />
          <Route path='/profile' component={InnerContent} />
          <Route path='/category' component={InnerContent} />
          <Route path='/question' component={InnerContent} />
          <Route path='/reports' component={InnerContent} />
          <Route path='/reports/user/:id' component={InnerContent} />
          <Route path='/reports/actions' component={InnerContent} />
          <Route path='/routine' exact component={InnerContent} />
          <Route path='/exambuilder' component={InnerContent} />
          <Route path='/settings' component={InnerContent} />
          <Route path='/print' component={InnerContent} />
          <Route path='/logout' component={LogoutPage} />
          <Route path='/help' component={InnerContent} />
          <Route path='/payment' component={InnerContent} />
          <Route path='/terms' component={InnerContent} />
          {/* change to display on langing page */}
          <Route path='/' exact component={Landing} />
          <Redirect to='/dashboard' />
        </Switch>
      </Suspense>
    )
  }

  if (canActivate(rolePermitted.coordinator, props.token)) {
    routes = (
      <Suspense fallback={<ClimbingBoxLoader css={override} />}>
        <Switch>
          <Route path='/dashboard' component={InnerContent} />
          <Route path='/profile' component={InnerContent} />
          <Route path='/category' component={InnerContent} />
          <Route path='/routine' exact component={InnerContent} />
          <Route path='/reports' component={InnerContent} />
          <Route path='/reports/actions' component={InnerContent} />
          <Route path='/question' component={InnerContent} />
          <Route path='/coursebuilder' component={InnerContent} />
          <Route path='/exambuilder' component={InnerContent} />
          <Route path='/examedit' component={InnerContent} />
          <Route path='/settings' component={InnerContent} />
          <Route path='/print' component={InnerContent} />
          <Route path='/logout' component={LogoutPage} />
          <Route path='/help' component={InnerContent} />
          <Route path='/payment' component={InnerContent} />
          <Route path='/terms' component={InnerContent} />
          <Route path='/notificationbuilder' component={InnerContent} />
          {/* change to display on langing page */}
          <Route path='/' exact component={Landing} />
          <Redirect to='/dashboard' />
        </Switch>
      </Suspense>
    )
  }

  return (
    <StickyBottomContext.Provider value={{ stickyState, setStickyState }}>
      {routes}
    </StickyBottomContext.Provider>
  )
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    isAuthenticated: state.auth.token !== null
  }
}

export default connect(mapStateToProps)(RoutePages)
//export default RoutePages;
