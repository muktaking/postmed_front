import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Icon from './icon'

const cardHeader = ({ heading, color, value, id, icon, courseId }) => (
  <div className='d-flex justify-content-between'>
    <Row className='text-secondary'>
      <Col xs='3'>
        <Icon icon={icon} size={'2rem'} classes={'text-' + color} />
      </Col>
      <Col xs='9' className='text-right' style={{ fontSize: '1.3rem' }}>
        <p>{heading}</p>
      </Col>
      <Col></Col>
    </Row>
    <div className={'text-' + color} style={{ fontSize: '1.3rem' }}>
      {courseId ? (
        <Link to={'exams/' + id + '_' + courseId}>
          {' '}
          {value.slice(0, 5)}...{' '}
        </Link>
      ) : (
        value
      )}
    </div>
  </div>
)

export default cardHeader
