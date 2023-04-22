import React from 'react'
import Card from 'react-bootstrap/Card'
import Icon from './icon'

const footer = ({ color, heading, value, icon }) => {
  return (
    <Card.Footer
      className='bg-dark text-light text-right pb-5'
      style={{ fontSize: '1.4rem' }}
    >
      <span className='mr-4'>{heading}</span>
      <span className='mr-5'>{value}</span>
      <Icon icon={icon} size='2rem' className='mr-2' />
    </Card.Footer>
  )
}

export default footer
