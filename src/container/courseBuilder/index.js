import React from 'react'
import { Col, Row } from 'react-bootstrap'
import MetaInfo from '../../components/seo/metainfo'
import { RoutesConfig } from '../../config/routes.config'
import AddACourse from './addACourse'
import ShowCourses from './showCourses'

export default function Routine() {
  return (
    <Row>
      <MetaInfo {...RoutesConfig.CourseBuilder.metaInfo} />
      <Col sm={4}>
        <AddACourse />
      </Col>
      <Col sm={8}>
        <ShowCourses showRaw={true} />
      </Col>
    </Row>
  )
}
