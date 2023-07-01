import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Badge, Button, ListGroup, Modal } from 'react-bootstrap'
import { FaTimes } from 'react-icons/fa'
import ExamCard from './card/card'

const SelectedQuestionsPreview = ({
  show,
  handleClose,
  questionCart,
  removeQuestionsFromCartHandler
}) => {
  const [selectedQuestions, setSelectedQuestions] = useState(null)
  useEffect(() => {
    if (questionCart.size > 0) {
      axios
        .get(
          `${process.env.REACT_APP_SITE_URL}/questions/${Array.from(
            questionCart
          )}`
        )
        .then(({ data }) => {
          // {} | [{}]
          console.log(data)
          if (Array.isArray(data)) {
            setSelectedQuestions(data)
          } else setSelectedQuestions([data])
        })
        .catch((e) => console.log(e))
    }
  }, [questionCart])

  function deleteQuestionHandler(id) {
    if (selectedQuestions) {
      setSelectedQuestions(selectedQuestions.filter((q) => q.id !== id))
    }
  }
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Selected Questions Preview</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ExamCard header='Selected Questions Preview' showHeader={false}>
          {
            <ListGroup className='my-2'>
              {selectedQuestions &&
                (Array.isArray(selectedQuestions) ? (
                  selectedQuestions.map((question, index) => (
                    <ListGroup.Item key={index} variant={'success'}>
                      <span>{`${index + 1}. `}</span>
                      <Badge className='mr-2'>{`${question.title}`}</Badge>
                      <span className='mr-2'>{`${question.qText}`}</span>
                      <Badge className='mr-2'>{`Id No. ${question.id}`}</Badge>
                      <Badge className='mr-2'>{`${question.qType}`}</Badge>
                      <Badge className='mr-2'>{`CategoryId No. ${question.categoryId}`}</Badge>
                      <Badge
                        variant='danger'
                        onClick={() => {
                          deleteQuestionHandler(question.id)
                        }}
                        style={{ cursor: 'pointer' }}
                      >
                        <FaTimes />
                      </Badge>
                    </ListGroup.Item>
                  ))
                ) : (
                  <ListGroup.Item>
                    {`${selectedQuestions.title} --> ${selectedQuestions.qText}`}{' '}
                    <Badge
                      variant='danger ml-2'
                      onClick={() => {
                        deleteQuestionHandler(selectedQuestions.id)
                      }}
                      style={{ cursor: 'pointer' }}
                    >
                      <FaTimes />
                    </Badge>
                  </ListGroup.Item>
                ))}
            </ListGroup>
          }
        </ExamCard>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant='danger'
          onClick={() => {
            removeQuestionsFromCartHandler(
              selectedQuestions
                ? selectedQuestions.length > 0
                  ? selectedQuestions.map((q) => q.id)
                  : null
                : null
            )
          }}
        >
          Apply Changes
        </Button>
        <Button variant='secondary' onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default SelectedQuestionsPreview
