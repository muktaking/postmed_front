import React from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

const cardHeader = ({ heading, color, value, id, courseId }) => (
  <Card.Text className='text-right text-secondary'>
    <h5>{heading}</h5>
    <h3 className={'text-' + color}>
      {courseId ? (
        <Link to={'exams/' + id + '_' + courseId}> {value} </Link>
      ) : (
        value
      )}
    </h3>
  </Card.Text>
)

export default cardHeader
