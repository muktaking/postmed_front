import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ListGroup } from 'react-bootstrap'
import { FaStar, FaUserCircle } from 'react-icons/fa'

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
            <p className='p-3 bg-light'>
              <span>
                <FaUserCircle size='2.3rem' />
              </span>
              <br />
              <span style={{ fontSize: '1.5rem' }}>{feedback.name}</span>
              <hr />
              <span>
                reviewd as {getFeedbackStatus(feedback.feedbackStatus)}
              </span>
              <br />
              <q className='p-5 text-muted'>{feedback.message}</q>
            </p>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  )
}

function getFeedbackStatus(status) {
  const stars = []
  for (let i = 0; i < status; i++) {
    stars.push(<FaStar size='1.1rem' color=' #FFD700' />)
  }
  return stars
  // switch (status) {
  //   case 1:
  //     return 'Below Average'
  //   case 2:
  //     return 'Average'
  //   case 4:
  //     return 'Best'

  //   default:
  //     return 'Good'
  // }
}
