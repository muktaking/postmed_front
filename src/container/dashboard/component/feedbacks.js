import axios from 'axios'
import React, { useState } from 'react'
import { Button, Form, ListGroup } from 'react-bootstrap'

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
  function submitHandler() {
    axios
      .patch(process.env.REACT_APP_SITE_URL + '/exams/feedback', { ids })
      .then((response) => {
        console.log(response)
        feedbackController(ids)
        setIds(null)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <div>
      <h3>Review</h3>
      <ListGroup as='ul'>
        {feedbacks.length < 1 ? (
          <p className='text-danger'>No more pending reviews</p>
        ) : (
          feedbacks.map((feedback) => (
            <ListGroup.Item key={feedback.name + feedback.examId} as='li'>
              <div className='d-flex'>
                <Form.Check
                  type='checkbox'
                  label='Publish this:'
                  name={feedback.id}
                  onChange={feedbackHandleChange}
                  className='border-right mr-2 pr-2'
                />
                <p>
                  <span className='text-info'>
                    {getFeedbackStatus(feedback.feedbackStatus) + '.'}
                  </span>
                  <span className='ml-2'>{'Message: ' + feedback.message}</span>
                  <span className='ml-2 text-danger'>
                    {'By ' + feedback.name}
                  </span>
                </p>
              </div>
            </ListGroup.Item>
          ))
        )}
      </ListGroup>
      <Button
        className='mt-2'
        onClick={submitHandler}
        disabled={feedbacks.length < 1}
      >
        Submit
      </Button>
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
