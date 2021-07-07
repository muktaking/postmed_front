import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Badge, ListGroup } from 'react-bootstrap'

export default function GetFeedbacks({ examId }) {
  const [feedbacks, setFeedbacks] = useState([])

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_SITE_URL + '/exams/feedback/' + examId)
      .then((response) => {
        setFeedbacks(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }, [examId])

  return (
    <div>
      <h3>Review</h3>
      <ListGroup as='ul'>
        {feedbacks.map((feedback) => (
          <ListGroup.Item as='li'>
            <p className='lead'>
              <span className='ml-2'>{feedback.name}</span>
              <span className='ml-2'>reviewd as </span>
              <Badge variant='info'>
                {getFeedbackStatus(feedback.feedbackStatus)}
              </Badge>
            </p>
            <p>{feedback.message}</p>
          </ListGroup.Item>
        ))}
      </ListGroup>
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
