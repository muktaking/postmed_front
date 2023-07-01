import React from 'react'
import { Card } from 'react-bootstrap'

const ExamCard = ({ header, children, headerBgColor, showHeader }) => {
  return (
    <Card className='mt-5'>
      {showHeader && (
        <Card.Header
          className={'text-center font-weight-bold bg-' + headerBgColor}
        >
          {header}
        </Card.Header>
      )}
      <Card.Body>{children}</Card.Body>
    </Card>
  )
}

export default ExamCard
