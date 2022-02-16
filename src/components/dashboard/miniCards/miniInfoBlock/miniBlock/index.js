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
    <Card className='card-common mt-2'>
      <Card.Body>
        <Row>
          <Col sm={8}>
            <Header
              heading={heading}
              color={color}
              value={value}
              id={id}
              courseId={courseId}
            />
          </Col>
          <Col sm={4}>
            <div>
              <Icon icon={faIcon} size={'2.4rem'} classes={'text-' + color} />
            </div>
          </Col>
        </Row>
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
