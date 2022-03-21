import Axios from 'axios'
import React from 'react'
import GoogleLogin from 'react-google-login'
import { useDispatch } from 'react-redux'
import { authSuccess, checkAuthTimeOut } from '../../store/auth'

const responseOnSuccess = (response, dispatch) => {
  Axios.post(process.env.REACT_APP_SITE_URL + '/auth/google', {
    idToken: response.tokenId
  })
    .then((res) => {
      dispatch(authSuccess(res.data))
      const expirationDate = new Date(
        new Date().getTime() + res.data.expireIn * 1000
      )
      localStorage.setItem('jwtToken', res.data.accessToken)
      localStorage.setItem('expirationDate', expirationDate)
      localStorage.setItem('userId', res.data.id)
      dispatch(checkAuthTimeOut(res.data.expireIn))
    })
    .catch((err) => console.log(err))
}

const responseOnFailure = (response) => {
  console.log(response)
}

export default function Google() {
  const dispatch = useDispatch()
  return (
    <div>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText='LOGIN WITH GOOGLE'
        onSuccess={(response) => {
          responseOnSuccess(response, dispatch)
        }}
        onFailure={responseOnFailure}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  )
}
