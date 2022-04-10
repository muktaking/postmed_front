import * as moment from 'dayjs'
import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import {
  FaExclamation,
  FaExclamationCircle,
  FaExclamationTriangle,
  FaTimes
} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFreshNotification } from '../../store/notification'
const relativeTime = require('dayjs/plugin/relativeTime')
moment.extend(relativeTime)

export default function Notification() {
  const dispatch = useDispatch()
  const noti = useSelector((state) => state.notification)

  return (
    <div>
      <h4>New Notification</h4>
      <div className='pl-2'>
        {noti.freshNoti.length < 1
          ? 'No New Notification'
          : noti.freshNoti.map((n) => {
              switch (n.priority) {
                case 1:
                  return NotiItem(
                    'danger',
                    <FaExclamationTriangle />,
                    n,
                    dispatch
                  )
                case 2:
                  return NotiItem(
                    'warning',
                    <FaExclamationCircle />,
                    n,
                    dispatch
                  )

                default:
                  return NotiItem('', <FaExclamation />, n, dispatch)
              }
            })}
      </div>
      <h4 className='text-muted mt-5'>All Notification</h4>
      {noti.notification.map((n, i) => (
        <p className='text-muted mb-2 pl-2'>
          <span>{`${i + 1}. ${n.description} `}</span>
          <span>({moment(n.startDate).fromNow()})</span>
        </p>
      ))}
    </div>
  )
}

const styles = {
  fontSize: '.8rem'
}

function NotiItem(color, icon, n, dispatch) {
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

        <ListGroupItem
          onClick={() => {
            const notiStore = JSON.parse(localStorage.getItem('noti'))
            const now = new Date()
            const ttl = 1000 * 60 * 60 * 24 * 30
            if (notiStore) {
              if (now.getTime() > notiStore.expiry) {
                localStorage.setItem(
                  'noti',
                  JSON.stringify({
                    value: [n.id],
                    expiry: now.getTime() + ttl
                  })
                )
              } else {
                localStorage.setItem(
                  'noti',
                  JSON.stringify({
                    value: [n.id, ...notiStore.value],
                    expiry: notiStore.expiry
                  })
                )
              }
            } else {
              localStorage.setItem(
                'noti',
                JSON.stringify({
                  value: [n.id],
                  expiry: now.getTime() + ttl
                })
              )
            }
            dispatch(fetchFreshNotification())
          }}
          style={{ cursor: 'pointer' }}
        >
          <FaTimes />
        </ListGroupItem>
      </ListGroup>
    </div>
  )
}
