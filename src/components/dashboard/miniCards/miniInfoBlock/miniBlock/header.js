import React from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

const cardHeader = ({ heading, color, value, id }) => (
  <Card.Text className='text-right text-secondary'>
    <h5>{heading}</h5>
    <h3 className={'text-' + color}>
      {id ? <Link to={'exams/' + id}> {value} </Link> : value}
    </h3>
  </Card.Text>
)

export default cardHeader
