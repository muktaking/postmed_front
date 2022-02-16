import React from 'react'
import Col from 'react-bootstrap/Col'
import { FaCloud, FaHourglass, FaThumbsUp } from 'react-icons/fa'

const miniBlock = (props) => {
  let icon = null
  switch (props.icon) {
    case 'cloud':
      icon = <FaCloud size='4rem' />
      break
    case 'hourglass':
      icon = <FaHourglass size='4rem' />
      break
    case 'thumbs-up':
      icon = <FaThumbsUp size='4rem' />
      break

    default:
      icon = <FaCloud size='4rem' />
      break
  }
  return (
    <Col md={4}>
      <div className='feature'>
        <span>{icon}</span>
        <h3 className='mt-2'>{props.heading}</h3>
        <p>{props.para}</p>
      </div>
    </Col>
  )
}

export default miniBlock
