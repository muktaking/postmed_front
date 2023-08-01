import Axios from 'axios'
import React from 'react'
import { GoogleLogin } from '@react-oauth/google'
import { useDispatch } from 'react-redux'
import {
  authFail,
  //authStart,
  authSuccess,
  checkAuthTimeOut
} from '../../store/auth'

const responseOnSuccess = (response, dispatch) => {
  Axios.post(process.env.REACT_APP_SITE_URL + '/auth/google', {
    idToken: response.credential
  })
    .then((res) => {
      dispatch(authSuccess(res.data))
      const expirationDate = new Date(
        new Date().getTime() + res.data.expireIn * 1000
      )
      localStorage.setItem('jwtToken', res.data.accessToken)
      localStorage.setItem('expirationDate', expirationDate)
      localStorage.setItem('userId', res.data.id)
      localStorage.setItem('socialAvatar', res.data.avatar)
      dispatch(checkAuthTimeOut(res.data.expireIn))
    })
    .catch((err) => {
      console.log(err)
      dispatch(authFail(err.message))
    })
}

const responseOnFailure = (response, dispatch) => {
  dispatch(authFail(response.error))
}

export default function Google({ useOneTap = false }) {
  const dispatch = useDispatch()
  return (
    <div className='d-flex justify-content-center'>
      <GoogleLogin
        onSuccess={(response) => {
          responseOnSuccess(response, dispatch)
        }}
        onError={(response) => {
          console.log(response)
          responseOnFailure(response, dispatch)
        }}
        theme='outline'
        useOneTap={useOneTap}
      />
    </div>
  )
}
