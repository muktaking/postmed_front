import { createSlice } from '@reduxjs/toolkit'
import { apiCallBegun } from './api'

const slice = createSlice({
  name: 'Notification',
  initialState: {
    loading: false,
    notification: []
  },
  reducers: {
    getNotification: (state, action) => {
      state.notification = action.payload
      state.loading = false
    },
    loadingStart: (state, action) => {
      state.loading = true
    }
  }
})
export const { getNotification, loadingStart } = slice.actions
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
