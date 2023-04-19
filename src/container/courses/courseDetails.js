import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import * as moment from 'dayjs'
import { useParams } from 'react-router'
import { Badge, Button, Card, Jumbotron, Modal, Toast } from 'react-bootstrap'
import { FaCalendarAlt, FaMoneyCheckAlt } from 'react-icons/fa'
import { LazyLoadComponent } from 'react-lazy-load-image-component'
import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom'
import remarkGfm from 'remark-gfm'
import SocialShare from '../../components/socialShare/socialShare'
import { facultyToString, pgCourseTypeToString } from '../../utils/faculty'
import ShowRoutine from '../../components/routine/showRoutine'
const duration = require('dayjs/plugin/duration')
const relativeTime = require('dayjs/plugin/relativeTime')
moment.extend(relativeTime)
moment.extend(duration)

const styles = {
  position: 'fixed',
  top: '70px',
  right: '10px',
  zIndex: 100
}

export default function CourseDetails() {
  const [course, setCourse] = useState(null)
  const [enrolledCoursesId, setEnrolledCoursesId] = useState([])
  const [res, setRes] = useState(null)
  let { id } = useParams()
  const isAuthenticated = useSelector((state) => state.auth.token !== null)
  const [showRoutine, setRoutineShow] = useState(false)

  const handleRoutineClose = () => setRoutineShow(false)
  const handleRoutineShow = () => setRoutineShow(true)

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_SITE_URL + '/courses/' + id)
      .then((res) => {
        setCourse(res.data)
      })
      .catch((e) => console.log(e))

    axios
      .get(process.env.REACT_APP_SITE_URL + '/courses/enrolled/courses')
      .then((res) => {
        setEnrolledCoursesId(res.data.map((course) => course.id))
      })
      .catch((e) => console.log(e))
  }, [id])

  const handleClose = () => {
    setRes(null)
  }

  const enrollmentHandler = (courseId) => {
    axios({
      baseURL: process.env.REACT_APP_SITE_URL,
      url: '/courses/enroll/' + courseId,
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
  }

  return (
    <>
      <Modal show={showRoutine} onHide={handleRoutineClose}>
        <Modal.Header closeButton>
          <Modal.Title>Routine</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ShowRoutine showRaw={false} id={id} title='' />
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleRoutineClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Toast show={res} onClose={handleClose} style={styles}>
        <Toast.Header className='bg-warning text-white'>
          <img src='holder.js/20x20?text=%20' className='rounded me-2' alt='' />
          <strong className='me-auto'>Server Response</strong>
        </Toast.Header>
        <Toast.Body>{res}</Toast.Body>
      </Toast>
      <div className='d-flex justify-content-around flex-wrap'>
        {course && (
          <Card className='my-3 pt-3' style={{ minWidth: '350px' }}>
            <LazyLoadComponent>
              <Card.Img
                variant='top'
                src={
                  course.imageUrl
                    ? `${process.env.REACT_APP_SITE_URL}/${course.imageUrl}`
                    : `${process.env.REACT_APP_SITE_URL}/images/courses/index.png`
                }
                className='mx-auto'
                style={{ width: '350px' }}
              />
            </LazyLoadComponent>
            <Card.Body>
              <Card.Title
                className='text-center'
                style={{ fontSize: '1.4rem', fontWeight: '900' }}
              >
                {course.title}
              </Card.Title>
              <div className='text-right'>
                <Badge pill variant='dark' className='mr-2'>
                  {pgCourseTypeToString(course.pgCourseType)}
                </Badge>
                <Badge pill variant='dark'>
                  {facultyToString(course.faculty)}
                </Badge>
              </div>

              <Card.Text className='mt-2'>
                <Jumbotron>
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {course.description}
                  </ReactMarkdown>
                </Jumbotron>
              </Card.Text>
              <div className='mb-2 text-center'>
                <Button variant='info' onClick={handleRoutineShow}>
                  Course's Routine
                </Button>
              </div>
              <hr />
              <Card.Text className='d-flex justify-content-between'>
                <div>
                  <FaMoneyCheckAlt size='1.5rem' />{' '}
                  <span className='bg-info text-white px-3 py-1'>
                    {course.price ? (
                      course.discountPricePercentage ? (
                        <s>{course.price + ' Taka'}</s>
                      ) : (
                        course.price + ' Taka'
                      )
                    ) : (
                      'Free'
                    )}
                  </span>
                  {course.price && course.discountPricePercentage ? (
                    <span className='ml-2 bg-success text-white px-3 py-1'>
                      {course.price -
                        Math.ceil(
                          (course.price * course.discountPricePercentage) / 100
                        ) +
                        ' Taka'}{' '}
                    </span>
                  ) : (
                    <></>
                  )}
                </div>
                <div>
                  <FaCalendarAlt size='1.5rem' />{' '}
                  <span className='bg-secondary text-white px-3 py-1'>
                    {moment
                      .duration(moment(course.endDate).diff(course.startDate))
                      .humanize()}
                  </span>
                  {/* <span>Duration</span> */}
                </div>
              </Card.Text>
              <hr />
              <Card.Text className='text-center mt-2'>
                <Link to={'/exams/courses/' + course.id}>
                  <Button variant='primary'>Go to Exams</Button>
                </Link>
              </Card.Text>
              {isAuthenticated && (
                <>
                  <hr />
                  <div className='d-flex justify-content-center align-items-center'>
                    {enrolledCoursesId.indexOf(course.id) > -1 ? (
                      <p className='text-success'>Already Enrolled</p>
                    ) : (
                      <Button
                        variant='primary'
                        style={{
                          width: '300px',
                          height: '55px',
                          fontSize: '18px'
                        }}
                        onClick={() => {
                          enrollmentHandler(course.id)
                        }}
                      >
                        Enroll
                      </Button>
                    )}
                  </div>
                </>
              )}
              <hr />
              <Card.Text className='text-muted text-center'>
                <span>Start: {moment(course.startDate).fromNow()}</span>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <SocialShare
                title={course.title}
                description={course.description}
                url=''
              />
            </Card.Footer>
          </Card>
        )}
      </div>
    </>
  )
}
