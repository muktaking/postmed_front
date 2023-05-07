import React from 'react'
import Col from 'react-bootstrap/Col'
import {
  FaChartBar,
  FaCloud,
  FaDollarSign,
  FaHubspot,
  FaMapMarkedAlt,
  FaThumbsUp,
  FaUserNinja
} from 'react-icons/fa'

const miniBlock = (props) => {
  let icon = null
  switch (props.icon) {
    case 'dollarSign':
      icon = <FaDollarSign size='2.6rem' />
      break
    case 'mapMarkedAlt':
      icon = <FaMapMarkedAlt size='2.6rem' />
      break
    case 'thumbs-up':
      icon = <FaThumbsUp size='2.6rem' />
      break
    case 'bar':
      icon = <FaChartBar size='2.6rem' />
      break
    case 'hubspot':
      icon = <FaHubspot size='2.6rem' />
      break
    case 'userNinja':
      icon = <FaUserNinja size='2.6rem' />
      break

    default:
      icon = <FaCloud size='2.6rem' />
      break
  }
  return (
    <Col md={4}>
      <div className='feature'>
        <span
          className='shadow rounded-circle p-1 d-flex align-items-center justify-content-center mx-auto'
          style={{
            display: 'block',
            width: '4rem',
            height: '4rem',
            backgroundColor: props.color,
            color: 'white'
          }}
        >
          {icon}
        </span>
        <h3 className='mt-2'>{props.heading}</h3>
        <p>{props.para}</p>
      </div>
    </Col>
  )
}

export default miniBlock
