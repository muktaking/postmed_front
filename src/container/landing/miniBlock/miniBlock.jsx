import React from 'react'
import Col from 'react-bootstrap/Col'
import {
  FaChartBar,
  FaCloud,
  FaHourglass,
  FaHubspot,
  FaStopCircle,
  FaThumbsUp
} from 'react-icons/fa'

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
      icon = <FaThumbsUp color='rgb(255, 193, 7)' size='4rem' />
      break
    case 'bar':
      icon = <FaChartBar color='rgb(255, 193, 7)' size='4rem' />
      break
    case 'hubspot':
      icon = <FaHubspot size='4rem' />
      break
    case 'stop':
      icon = <FaStopCircle color='tomato' size='4rem' />
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
