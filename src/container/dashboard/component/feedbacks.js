import axios from 'axios'
import React, { useState } from 'react'
import { Badge, Button, Form, ListGroup } from 'react-bootstrap'

export default function GetFeedbacks({ feedbacks, feedbackController }) {
  const [ids, setIds] = useState([])

  function feedbackHandleChange(e) {
    if (e.target.checked) {
      if (!ids.includes(+e.target.name)) {
        setIds([...ids, +e.target.name])
      }
    } else {
      setIds(ids.filter((id) => id !== +e.target.name))
    }
  }
  function submitHandler(deny = false) {
    //Boolean('') = false
    axios
      .patch(process.env.REACT_APP_SITE_URL + '/exams/feedback', { ids, deny })
      .then((response) => {
        feedbackController(ids)
        setIds(null)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <div>
      <h5>
        <span>Review</span> <Badge variant='danger'>{feedbacks.length}</Badge>
      </h5>
      <div style={{ maxHeight: '350px', overflowY: 'scroll' }}>
        {feedbacks && (
          <>
            <ListGroup as='ul'>
              {feedbacks.length < 1 ? (
                <p className='text-danger'>No more pending reviews</p>
              ) : (
                feedbacks.map((feedback) => (
                  <ListGroup.Item key={feedback.name + feedback.examId} as='li'>
                    <div className='d-flex'>
                      <Form.Check
                        type='checkbox'
                        label=''
                        name={feedback.id}
                        onChange={feedbackHandleChange}
                        className='border-right mr-2 pr-2'
                      />
                      <div>
                        <p>
                          <span className='text-info'>
                            {getFeedbackStatus(feedback.feedbackStatus) + '.'}
                          </span>
                          <span className='ml-2'>
                            {'Message: ' + feedback.message}
                          </span>
                          <span className='ml-2 text-danger'>
                            {`By ${feedback.name} (${feedback.email})`}
                          </span>
                          <br />
                          Commented on:{' '}
                          <span className='text-danger'>
                            {feedback.exam && feedback.exam.title}
                          </span>{' '}
                          Exam.
                        </p>
                      </div>
                    </div>
                  </ListGroup.Item>
                ))
              )}
            </ListGroup>

            {feedbacks.length > 0 && (
              <>
                <Button
                  size='sm'
                  className='mt-2'
                  onClick={() => {
                    submitHandler()
                  }}
                >
                  Approve
                </Button>
                <Button
                  size='sm'
                  variant='danger'
                  className='mt-2 ml-2'
                  onClick={() => {
                    submitHandler(true)
                  }}
                >
                  Deny
                </Button>
              </>
            )}
          </>
        )}
      </div>
    </div>
  )
}

function getFeedbackStatus(status) {
  switch (status) {
    case 1:
      return 'Below Average'
    case 2:
      return 'Average'
    case 4:
      return 'Best'

    default:
      return 'Good'
  }
}
