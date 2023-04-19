import React from 'react'
import Card from 'react-bootstrap/Card'
import Icon from './icon'

const footer = ({ color, heading, value, icon }) => {
  return (
    <Card.Footer className='bg-dark text-light text-right'>
      <span className='mr-2'>{heading}</span>
      <span className='mr-2'>{value}</span>
      <Icon icon={icon} size='1.2rem' className='mr-2' />
    </Card.Footer>
  )
}

export default footer
