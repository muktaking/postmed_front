import axios from 'axios'
import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'
import { connect } from 'react-redux'
import {
  authFail,
  authStart,
  authSuccess,
  checkAuthTimeOut
} from '../../store/auth'

class Facebook extends Component {
  state = {
    //loading: false,
    name: null,
    photo: null
  }
  componentClicked = () => {
    this.props.onAuthStart()
  }
  responseFacebook = (fbRes) => {
    console.log(fbRes.status)
    if (fbRes.status === 'unknown') {
      this.props.onAuthFail(
        'Something wrong. To continue you have to approve our app'
      )
    } else {
      axios
        .post(process.env.REACT_APP_SITE_URL + '/auth/facebook', {
          userID: fbRes.userID,
          accessToken: fbRes.accessToken
        })
        .then((res) => {
          this.props.onAuthSuccess(res.data)

          const expirationDate = new Date(
            new Date().getTime() + res.data.expireIn * 1000
          )

          localStorage.setItem('jwtToken', res.data.accessToken)
          localStorage.setItem('expirationDate', expirationDate)
          localStorage.setItem('userId', res.data.id)
          this.props.checkAuthTimeOutLoader(res.data.expireIn)
        })
        .catch((e) => {
          this.setState({
            name: fbRes.name,
            photo: fbRes.picture.data.url
          })
          this.props.onAuthFail(
            'Sorry ' +
              this.state.name +
              ', admin has not approved your account yet. Please wait or contact with admin.'
          )
        })
    }
  }
  render() {
    return (
      <div className='mx-auto'>
        <FacebookLogin
          appId={process.env.REACT_APP_FACEBOOK_APP_ID}
          size='small'
          autoLoad={false}
          fields='name,email,picture'
          onClick={this.componentClicked}
          callback={this.responseFacebook}
          isMobile={false}
        />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAuthStart: (payload) => dispatch(authStart(payload)),
    onAuthSuccess: (payload) => dispatch(authSuccess(payload)),
    onAuthFail: (payload) => dispatch(authFail(payload)),
    checkAuthTimeOutLoader: (payload) => dispatch(checkAuthTimeOut(payload))
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Facebook)
