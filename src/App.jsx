/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import './assets/scss/style.scss'
import ScrollToTopPage from './components/scrollToTopPage/scrollToTopPage'
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
          <ScrollToTopPage />
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
