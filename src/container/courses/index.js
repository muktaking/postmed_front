import axios from 'axios'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCourseLoader } from '../../store/courses'

export default function Index() {
  const dispatch = useDispatch()
  const courses = useSelector((state) => state.courses.courses)
  const [res, setRes] = useState(null)

  useEffect(() => {
    dispatch(fetchCourseLoader())
  }, [dispatch])

  const handleClose = () => {
    setRes(null)
  }

  return (
    <div>
      <Modal show={res} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enrollment Response</Modal.Title>
        </Modal.Header>
        <Modal.Body>{res}</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <h2 className='text-center' style={{ marginTop: '80px' }}>
        Available Courses
      </h2>
      <div className='d-flex justify-content-around'>
        {courses.map((course) => (
          <Card className='my-3' style={{ width: '350px' }}>
            <Card.Body>
              <Card.Title>{course.title}</Card.Title>
              <Card.Text>{course.description}</Card.Text>
              <Card.Text className='text-right'>
                Start From:{' '}
                <span className='bg-warning px-3 py-1'>
                  {moment(course.startDate).format('YYYY-MMM-DD hh:mm A')}
                </span>
              </Card.Text>
              <hr />
              <Button
                variant='primary'
                style={{ width: '320px', height: '55px', fontSize: '18px' }}
                onClick={() => {
                  //setAuthorizationToken(token);
                  axios({
                    baseURL: process.env.REACT_APP_SITE_URL,
                    url: '/courses/enroll/' + course.id,
                    method: 'patch'
                  })
                    .then((response) => {
                      setRes(response.data.message)
                    })
                    .catch((error) => {
                      setRes(
                        'Sorry. Enrollment to this course is not possible due to server error. Please contact with admin.'
                      )
                    })
                }}
              >
                Enroll
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  )
}
