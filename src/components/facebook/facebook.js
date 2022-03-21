import axios from 'axios'
import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'
import { connect } from 'react-redux'
import { authSuccess, checkAuthTimeOut } from '../../store/auth'

class Facebook extends Component {
  state = {
    isLoggedIn: false,
    name: '',
    photo: '',
    message: ''
  }
  componentClicked = () => console.log('clicked')
  responseFacebook = (fbRes) => {
    if (fbRes.status === 'unknown') {
      this.setState({
        photo: null,
        message: 'Something wrong. To continue you have to approve our app'
      })
    } else {
      axios
        .post(process.env.REACT_APP_SITE_URL + '/auth/facebook', {
          userID: fbRes.userID,
          accessToken: fbRes.accessToken
        })
        .then((res) => {
          this.props.onAuth(res.data)

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
            photo: fbRes.picture.data.url,
            message:
              'Admin has not approved your account yet.Please wait or contact with admin.'
          })
        })
      this.setState({
        isLoggedIn: true
      })
    }
  }
  render() {
    let fbContent

    if (this.state.isLoggedIn) {
      fbContent = (
        <div className='d-flex bg-danger p-2'>
          {this.state.photo && <img src={this.state.photo} alt='fb_avatar' />}
          <p className='mt-1'>
            Sorry,{' ' + this.state.name + ' ' + this.state.message}
          </p>
        </div>
      )
    } else {
      fbContent = (
        <div className='mx-auto'>
          <FacebookLogin
            appId={process.env.REACT_APP_FACEBOOK_APP_ID}
            size='small'
            autoLoad={false}
            fields='name,email,picture'
            onClick={this.componentClicked}
            callback={this.responseFacebook}
          />
        </div>
      )
    }
    return fbContent
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (payload) => dispatch(authSuccess(payload)),
    checkAuthTimeOut: (payload) => dispatch(checkAuthTimeOut(payload))
  }
}

export default connect(null, mapDispatchToProps)(Facebook)
