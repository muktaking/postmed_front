import React from 'react'
import { Col, Row } from 'react-bootstrap'
import AddASyllabus from '../../components/routine/addASyllabus'
import ShowSyllabus from '../../components/routine/showRoutine'

export default function Routine() {
  return (
    <Row>
      <Col sm={4}>
        <AddASyllabus />
      </Col>
      <Col sm={8}>
        <ShowSyllabus showRaw={true} />
      </Col>
    </Row>
  )
}
