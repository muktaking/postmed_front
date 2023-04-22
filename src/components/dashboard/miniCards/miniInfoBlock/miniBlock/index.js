import React from 'react'
import Card from 'react-bootstrap/Card'
import Footer from './footer'
import Header from './header'

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
    <Card className='card-common mt-2 mx-auto'>
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
