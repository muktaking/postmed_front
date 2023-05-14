import React, { useState } from 'react'
import { Alert, Badge, Button, ListGroup, Modal, Table } from 'react-bootstrap'
import { useHistory } from 'react-router'
import { examTypes } from '../../../utils/faculty'

export default function PreExamNotification({
  examStartDialogueHandler,
  exams
}) {
  const history = useHistory()
  const [show, setShow] = useState(true)
  const [showRules, setShowRules] = useState(false)
  const handleClose = () => {
    examStartDialogueHandler()
    setShow(false)
  }
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Do You want to Proceed to Exam?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Exam's Stats</p>
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
                Penalty Mark: <Badge>{exams.penaltyMark}</Badge> (for each wrong
                stem)
                {/* or{' '}
                  <Badge variant='danger'>{exams.penaltyMark * 5}</Badge> (for 
                  wrong SBA ) */}
              </ListGroup.Item>
            </ListGroup>
          )}
          <Table striped bordered className='mt-3'>
            <thead>
              <tr>
                <th>Question Type</th>
                <th>Number</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>True/False questions</td>
                <td>
                  {exams.questions.filter((q) => q.qType === 'matrix').length}
                </td>
              </tr>
              <tr>
                <td>SBA questions</td>
                <td>
                  {exams.questions.filter((q) => q.qType === 'sba').length}
                </td>
              </tr>
            </tbody>
          </Table>
          <Button
            onClick={() => {
              setShowRules(!showRules)
            }}
            variant='dark'
          >
            Exam's Rules
          </Button>

          {showRules && (
            <Alert variant='warning' className='mt-3'>
              <p>
                * First{' '}
                {exams.questions.filter((q) => q.qType === 'matrix').length}{' '}
                questions are True/False type. Rest{' '}
                {exams.questions.filter((q) => q.qType === 'sba').length}{' '}
                questions are SBA type.
              </p>
              {exams.isAnswerRestricted && (
                <p className='text-danger'>
                  * You can not modify your answer after clicking an option.
                </p>
              )}
              <p>
                * After timelimit you will push to result page or you can submit
                your answer anytime.
              </p>
              {exams.type >= examTypes[4].value ? (
                <p className='text-danger'>
                  * This Exam can be taken only one time.
                </p>
              ) : (
                <></>
              )}
            </Alert>
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
