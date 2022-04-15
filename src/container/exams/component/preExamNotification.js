import React, { useState } from 'react'
import { Badge, Button, ListGroup, Modal } from 'react-bootstrap'
import { useHistory } from 'react-router'

export default function PreExamNotification({
  examStartDialogueHandler,
  exams
}) {
  const history = useHistory()
  const [show, setShow] = useState(true)
  const handleClose = () => {
    examStartDialogueHandler()
    setShow(false)
  }
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are You Sure to Proceed?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Exam's Rules</p>
          {exams && (
            <ListGroup>
              <ListGroup.Item>
                Total Questions:{' '}
                <Badge>{exams.questions && exams.questions.length}</Badge>
              </ListGroup.Item>
              {/* <ListGroup.Item>
              Single Question's Mark:{' '}
              <Badge>
                {exams.singleQuestionMark && exams.singleQuestionMark}
              </Badge>
            </ListGroup.Item>
            <ListGroup.Item>
              Single Stem Mark:{' '}
              <Badge>{exams.singleStemMark && exams.singleStemMark}</Badge>
            </ListGroup.Item> */}
              <ListGroup.Item>
                Total Mark:{' '}
                <Badge>
                  {exams.questions &&
                    exams.singleQuestionMark &&
                    exams.questions.length * exams.singleQuestionMark}
                </Badge>
              </ListGroup.Item>
              <ListGroup.Item>
                Time Limit: <Badge>{exams.timeLimit && exams.timeLimit}</Badge>{' '}
                Mins
              </ListGroup.Item>
              <ListGroup.Item>
                Penalty Mark:{' '}
                <Badge>
                  {exams.totalPenaltyMark && exams.totalPenaltyMark}
                </Badge>
              </ListGroup.Item>
            </ListGroup>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant='secondary'
            onClick={() => {
              history.goBack()
            }}
          >
            Go Back
          </Button>
          <Button variant='primary' onClick={handleClose}>
            Proceed
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
