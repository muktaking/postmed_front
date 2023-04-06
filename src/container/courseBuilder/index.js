import React, { useState } from 'react'
import { Col, Row, Toast } from 'react-bootstrap'
import MetaInfo from '../../components/seo/metainfo'
import { RoutesConfig } from '../../config/routes.config'
import AddACourse from './addACourse'
import ShowCourses from './showCourses'

export default function Routine() {
  const [msg, setMsg] = useState(null)
  return (
    <Row>
      <Toast
        show={msg}
        onClose={() => {
          setMsg(null)
        }}
        style={{
          position: 'absolute',
          top: '70px',
          right: '20px',
          zIndex: '100'
        }}
      >
        <Toast.Header>
          <strong className='mr-auto'>Message</strong>
        </Toast.Header>
        <Toast.Body>{msg}</Toast.Body>
      </Toast>
      <MetaInfo {...RoutesConfig.CourseBuilder.metaInfo} />
      <Col sm={4}>
        <AddACourse msg={msg} setMsg={setMsg} />
      </Col>
      <Col sm={8}>
        <ShowCourses msg={msg} setMsg={setMsg} showRaw={true} />
      </Col>
    </Row>
  )
}
