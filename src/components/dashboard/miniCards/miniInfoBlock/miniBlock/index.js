import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Footer from './footer'
import Header from './header'
import Icon from './icon'

const miniBlock = ({
  heading,
  color,
  value,
  id,
  courseId,
  faIcon,
  footerHeading,
  footerValue,
  faFooterIcon
}) => {
  return (
    <Card className='card-common mt-2 mx-auto' style={{ width: '11.6rem' }}>
      <Card.Body>
        <Header
          heading={heading}
          color={color}
          value={value}
          id={id}
          courseId={courseId}
          icon={faIcon}
        />
      </Card.Body>
      <Footer
        color={color}
        heading={footerHeading}
        value={footerValue}
        icon={faFooterIcon}
      />
    </Card>
  )
}

export default miniBlock
