import { createSlice } from '@reduxjs/toolkit'
import { apiCallBegun } from './api'

const slice = createSlice({
  name: 'Notification',
  initialState: {
    loading: false,
    notification: [],
    freshNoti: []
  },
  reducers: {
    getNotification: (state, action) => {
      state.notification = action.payload
      state.loading = false
    },
    //fresh notification means that is not untracked by user
    getFreshNotification: (state, action) => {
      state.freshNoti = action.payload
    },
    loadingStart: (state, action) => {
      state.loading = true
    }
  }
})
export const { getNotification, getFreshNotification, loadingStart } =
  slice.actions
export default slice.reducer

const url = '/notification'
const method = 'get'

export const fetchNotificationLoader = () => (dispatch) => {
  dispatch(
    apiCallBegun({
      url,
      method,
      onStart: loadingStart.type,
      onSuccess: getNotification.type
    })
  )
}

export const fetchFreshNotification = () => (dispatch, getState) => {
  const nStore = JSON.parse(localStorage.getItem('noti'))
  const noti = getState().notification.notification
  let freshNoti = []
  //console.log(typeof nStore.value)
  if (nStore) {
    if (new Date().getTime() > nStore.expiry) {
      localStorage.removeItem('noti')
      dispatch(getFreshNotification(noti))
    } else {
      freshNoti = noti.filter((n) =>
        nStore.value.includes(n.id) ? false : true
      )
      dispatch(getFreshNotification(freshNoti))
    }
  } else {
    dispatch(getFreshNotification(noti))
  }
}
