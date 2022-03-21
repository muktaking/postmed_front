import React, { useEffect } from 'react'
import { Badge } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNotificationLoader } from '../../store/notification'

const styles = {
  position: 'absolute',
  fontSize: '.6rem',
  marginTop: '-.3rem'
}

export default function NotiBadge() {
  const dispatch = useDispatch()
  const freshNoti = useSelector((state) => state.notification.freshNoti)
  useEffect(() => {
    dispatch(fetchNotificationLoader())
  }, [dispatch])

  return (
    <>
      {freshNoti.length > 0 && (
        <Badge variant='danger' style={styles}>
          {freshNoti.length}
        </Badge>
      )}
    </>
  )
}
