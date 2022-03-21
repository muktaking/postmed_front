/*

it is an simple api middleware to generalize get and send data to server



*/

import axios from 'axios'
import errorHandler from '../../utils/errorHandler'
import setAuthorizationToken from '../../utils/setAuthorizationToken'
import { apiCallBegun, apiCallFail, apiCallSuccess } from '../api'
import { authSuccess, checkAuthTimeOut } from '../auth'
import { fetchFreshNotification, getNotification } from '../notification'

//api middleware function

export const api = ({ getState, dispatch }) => (next) => async (action) => {
  if (action.type !== apiCallBegun.type) return next(action)

  const {
    url,
    method,
    data,
    config,
    onStart,
    onSuccess,
    onError,
    sendToken
  } = action.payload

  if (onStart) dispatch({ type: onStart })
  next(action)

  try {
    if (sendToken) {
      setAuthorizationToken(getState().auth.token)
    }
    // let imageData;
    // if (data && data.image) {
    //   imageData = new FormData();
    //   Object.keys().forEach((e) => {
    //     imageData.append(e, data[e]);
    //   });
    //   console.log(imageData);
    //   data = imageData;
    // }

    const response = await axios.request({
      baseURL: process.env.REACT_APP_SITE_URL,
      url,
      method,
      data: data,
      config
    })

    dispatch(apiCallSuccess(response.data))

    if (onSuccess) {
      if (onSuccess === authSuccess.type) {
        const expirationDate = new Date(
          new Date().getTime() + response.data.expireIn * 1000
        )
        localStorage.setItem('jwtToken', response.data.accessToken)
        localStorage.setItem('expirationDate', expirationDate)
        localStorage.setItem('userId', response.data.id)
        dispatch(checkAuthTimeOut(response.data.expireIn))
        dispatch({ type: authSuccess.type, payload: response.data })
      } else if (onSuccess === getNotification.type) {
        dispatch({ type: getNotification.type, payload: response.data })
        dispatch(fetchFreshNotification())
      } else dispatch({ type: onSuccess, payload: response.data })
    }
  } catch (error) {
    const response = errorHandler(error)
    dispatch(apiCallFail(response))
    if (onError) dispatch({ type: onError, payload: response })
  }
}
