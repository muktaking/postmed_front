import React from 'react'
import { Badge, ListGroup } from 'react-bootstrap'
import Stem from './stem'

const QuestionForm = ({ question, handleChange, defaultChecked, index }) => {
  console.log(index)
  return (
    <ListGroup as='ul' className='mt-3'>
      <ListGroup.Item as='li' active>
        <Badge variant='danger p-1 mr-2' style={{ fontSize: '1rem' }}>
          Question No. {index}
        </Badge>
        <span>{question.qText}</span>
      </ListGroup.Item>

      {question.stems.map((stem, index) => (
        <ListGroup.Item as='li' key={index}>
          <Stem
            qType={question.qType}
            stem={stem}
            index={index + 1}
            id={question.id}
            handleChange={handleChange}
            defaultChecked={
              defaultChecked
                ? question.qType === 'matrix'
                  ? defaultChecked[index]
                  : defaultChecked[0]
                : null
            }
          />
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}

export default QuestionForm
