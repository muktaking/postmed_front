import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Badge, Button, Card, Modal } from 'react-bootstrap'
import CreateNotification from './createNotification'
import { priorityToString } from './notificationBuilder'

export default function ShowNotification() {
  const [notification, setNotification] = useState([])
  const [currentNotification, setCurrentNotification] = useState(null)
  const [show, setShow] = useState(false)

  const getNoti = () => {
    Axios.get(process.env.REACT_APP_SITE_URL + '/notification/raw')
      .then((response) => {
        setNotification(response.data)
      })
      .catch((e) => console.log(e))
  }

  const handleClose = () => {
    getNoti()
    setShow(false)
  }

  useEffect(() => {
    Axios.get(process.env.REACT_APP_SITE_URL + '/notification/raw')
      .then((response) => {
        setNotification(response.data)
      })
      .catch((e) => console.log(e))
  }, [])

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CreateNotification defaultValue={currentNotification} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {notification.map((noti) => (
        <Card className='mb-2'>
          <Card.Body>
            <Card.Title>{noti.title}</Card.Title>
            <Card.Text>
              <Badge variant='primary mr-2'>
                {priorityToString(noti.priority)}
              </Badge>
              <Badge variant='primary'>
                {noti.courseId && noti.courseId.title}
              </Badge>
            </Card.Text>
            <Card.Text>{noti.description}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button
              variant='primary'
              onClick={() => {
                setCurrentNotification({
                  startDate: noti.startDate,
                  endDate: noti.endDate,
                  ...noti
                })
                setShow(true)
              }}
            >
              Edit
            </Button>
          </Card.Footer>
        </Card>
      ))}
    </div>
  )
}
