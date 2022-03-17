import * as moment from 'dayjs'
import React, { useEffect } from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import {
  FaExclamation,
  FaExclamationCircle,
  FaExclamationTriangle,
  FaTimes
} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNotificationLoader } from '../../store/notification'
const relativeTime = require('dayjs/plugin/relativeTime')
moment.extend(relativeTime)

export default function Notification(snippet = null) {
  const dispatch = useDispatch()
  const noti = useSelector((state) => state.notification)

  useEffect(() => {
    dispatch(fetchNotificationLoader())
  }, [dispatch])

  return (
    <div>
      <h3>Notification</h3>
      <div>
        {noti.notification.map((n) => {
          switch (n.priority) {
            case 1:
              return NotiItem('danger', <FaExclamationTriangle />, n)
            case 2:
              return NotiItem('warning', <FaExclamationCircle />, n)

            default:
              return NotiItem('', <FaExclamation />, n)
          }
        })}
      </div>
    </div>
  )
}

const styles = {
  fontSize: '.8rem'
}

function NotiItem(color, icon, n) {
  return (
    <div className={'mb-2'}>
      <ListGroup horizontal>
        <ListGroup.Item className={'text-' + color}>
          <span>{icon}</span>
        </ListGroup.Item>
        <ListGroup.Item variant={color}>
          <span>{n.description + ' '}</span>
          <span className='text-muted' style={styles}>
            ({moment(n.startDate).fromNow()})
          </span>
        </ListGroup.Item>
        <ListGroupItem>
          <FaTimes
            onClick={() => {
              const notiStore = localStorage.getItem('noti')
              if (notiStore) {
                localStorage.setItem('noti', [n.id, ...notiStore])
              } else {
                localStorage.setItem('noti', [n.id])
              }
            }}
          />
        </ListGroupItem>
      </ListGroup>
    </div>
  )
}
