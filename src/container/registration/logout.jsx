import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { logoutLoader } from '../../store/auth'

class Logout extends React.Component {
  componentDidMount() {
    this.props.onLogoutLoader()
    this.props.onRootReducerLoader()
  }
  render() {
    return <Redirect to='/' />
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogoutLoader: () => {
      dispatch(logoutLoader())
    },
    onRootReducerLoader: () => {
      dispatch({ type: 'RESET_APP' })
    }
  }
}

export default connect(null, mapDispatchToProps)(Logout)
