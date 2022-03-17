import React from 'react'
import { Col, Row } from 'react-bootstrap'
import CreateNotification from './createNotification'
import ShowNotification from './showNotification'

export default function NotificationBuilder() {
  return (
    <Row>
      <Col lg='6'>
        <CreateNotification />
      </Col>
      <Col lg='6'>
        <ShowNotification />
      </Col>
    </Row>
  )
}

export function priorityToString(num) {
  switch (num) {
    case 1:
      return 'Urgent'
    case 2:
      return 'Immediate'
    case 3:
      return 'Normal'

    default:
      return 'Normal'
  }
}
