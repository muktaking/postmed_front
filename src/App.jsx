/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import RoutePages from './container/routePages'
import { checkAuthState } from './store/auth'

class App extends Component {
  componentDidMount() {
    this.props.onTryAutologin()
  }
  render() {
    return (
      <>
        <BrowserRouter>
          <RoutePages />
        </BrowserRouter>
      </>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutologin: () => {
      dispatch(checkAuthState())
    }
  }
}

export default connect(null, mapDispatchToProps)(App)
