import React from 'react'
import { Col, Row } from 'react-bootstrap'
import AddACourse from './addACourse'
import ShowCourses from './showCourses'

export default function Routine() {
  return (
    <Row>
      <Col sm={4}>
        <AddACourse />
      </Col>
      <Col sm={8}>
        <ShowCourses showRaw={true} />
      </Col>
    </Row>
  )
}
