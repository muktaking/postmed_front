import axios from 'axios'
//import moment from 'moment'
import * as moment from 'dayjs'
import React, { useEffect, useState } from 'react'
import { Badge, Button, Card, Modal, Spinner, Toast } from 'react-bootstrap'
import { FaCalendarAlt, FaMoneyCheckAlt } from 'react-icons/fa'
import { LazyLoadComponent } from 'react-lazy-load-image-component'
import ReactMarkdown from 'react-markdown'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import remarkGfm from 'remark-gfm'
import MetaInfo from '../../components/seo/metainfo'
import SocialShare from '../../components/socialShare/socialShare'
import { RoutesConfig } from '../../config/routes.config'
import { fetchCourseLoader } from '../../store/courses'
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

export default function Index({ landing = null }) {
  const dispatch = useDispatch()
  const coursesStore = useSelector((state) => state.courses)
  const isAuthenticated = useSelector((state) => state.auth.token !== null)
  const [res, setRes] = useState(null)
  const [showModalMsg, setShowModalMsg] = useState(null)
  let courses = coursesStore
    ? landing
      ? coursesStore.courses.filter((course, id) => id < 3)
      : coursesStore.courses
    : []

  useEffect(() => {
    dispatch(fetchCourseLoader())
  }, [dispatch])

  const handleClose = () => {
    setRes(null)
  }

  const handleModalClose = () => {
    setShowModalMsg(null)
  }

  return (
    <div>
      {!landing && <MetaInfo {...RoutesConfig.Course.metaInfo} />}
      <Modal show={showModalMsg} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {showModalMsg}
          </ReactMarkdown>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary ' onClick={handleModalClose}>
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

      <h3 className='text-center heading'>Available Courses</h3>
      {landing && <div className='heading-underline'></div>}
      {coursesStore.loading &&
        (landing ? (
          <div className='text-center'>
            <span>Please wait. Courses are loading </span>
          </div>
        ) : (
          <Spinner
            animation='border'
            role='status'
            variant='dark'
            className='content-center'
          />
        ))}
      <div className='d-flex justify-content-around flex-wrap'>
        {courses.map((course) => (
          <Card className='my-3' style={{ width: '350px' }}>
            <LazyLoadComponent>
              <Card.Img
                variant='top'
                src={
                  course.imageUrl
                    ? `${process.env.REACT_APP_SITE_URL}/${course.imageUrl}`
                    : `${process.env.REACT_APP_SITE_URL}/images/courses/index.png`
                }
              />
            </LazyLoadComponent>
            <Card.Body>
              <Card.Title style={{ fontSize: '1.4rem', fontWeight: '900' }}>
                {course.title}
              </Card.Title>
              <Card.Text>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {course.description.substring(0, 250) + ' ...'}
                </ReactMarkdown>
                <p className='text-center'>
                  <Button
                    variant='outline-primary'
                    onClick={() => {
                      setShowModalMsg(course.description)
                    }}
                  >
                    More
                  </Button>
                </p>
              </Card.Text>
              <Card.Text className='d-flex justify-content-between'>
                <div>
                  <FaMoneyCheckAlt size='1.5rem' />{' '}
                  <span className='bg-info text-white px-3 py-1'>
                    {course.price ? course.price + ' Taka' : 'Free'}
                  </span>
                </div>
                <div>
                  <FaCalendarAlt size='1.5rem' />{' '}
                  <span className='bg-secondary text-white px-3 py-1'>
                    {moment
                      .duration(moment(course.endDate).diff(course.startDate))
                      .humanize()}
                  </span>
                </div>
              </Card.Text>
              {isAuthenticated && (
                <Card.Text className='text-center mt-2'>
                  <Link to={'/exams/courses/' + course.id}>
                    <Button variant='primary'>Go to Exams</Button>
                  </Link>
                </Card.Text>
              )}
              <hr />
              {isAuthenticated ? (
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
              ) : (
                <Badge variant='warning' className='p-2'>
                  Please Login to Enroll.
                </Badge>
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
        ))}
      </div>
    </div>
  )
}
