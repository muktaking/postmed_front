import axios from 'axios'
import * as moment from 'dayjs'
import React, { useEffect, useState } from 'react'
import { Badge, Button, Card, Modal, Toast } from 'react-bootstrap'
import { FaCalendarAlt, FaMoneyCheckAlt } from 'react-icons/fa'
import { LazyLoadComponent } from 'react-lazy-load-image-component'
import ReactMarkdown from 'react-markdown'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import remarkGfm from 'remark-gfm'
import CircleLoader from '../../components/customSpinner/circleLoader/circleLoader'
import RedFillLoader from '../../components/customSpinner/redFillLoader/redFillLoader'
import MetaInfo from '../../components/seo/metainfo'
import SocialShare from '../../components/socialShare/socialShare'
import { RoutesConfig } from '../../config/routes.config'
import { courseResetLoader, fetchCourseLoader } from '../../store/courses'
const duration = require('dayjs/plugin/duration')
const relativeTime = require('dayjs/plugin/relativeTime')
moment.extend(relativeTime)
moment.extend(duration)

//styles to show toast message
const styles = {
  position: 'fixed',
  top: '70px',
  right: '10px',
  zIndex: 100
}

/**
 *
 * @param {landing} dentotes landing page is or not; boolean
 * @returns nothing
 */
export default function Index({ landing = null }) {
  const dispatch = useDispatch()
  const coursesStore = useSelector((state) => state.courses)
  const isAuthenticated = useSelector((state) => state.auth.token !== null)
  const [enrollResLoader, setEnrollResLoader] = useState(false)
  const [res, setRes] = useState(null) // get server response after enrollment request by student
  const [showModalMsg, setShowModalMsg] = useState(null) // show modal
  let courses = coursesStore
    ? landing
      ? coursesStore.courses.filter((course, id) => id < 3)
      : coursesStore.courses
    : []

  useEffect(() => {
    dispatch(courseResetLoader()) // reset course error msg
    dispatch(fetchCourseLoader()) // fetch courses
  }, [dispatch])

  const handleClose = () => {
    setRes(null)
  }

  const handleModalClose = () => {
    setShowModalMsg(null)
  }

  return (
    <div>
      {/* SEO section */}
      {!landing && <MetaInfo {...RoutesConfig.Course.metaInfo} />}

      {/* Modal section --> shows details of a course after clicking 'More' button */}
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

      {/* Toast section --> shows server response after enrollment request */}
      <Toast show={res} onClose={handleClose} style={styles}>
        <Toast.Header className='bg-warning text-white'>
          <img src='holder.js/20x20?text=%20' className='rounded me-2' alt='' />
          <strong className='me-auto'>Server Response</strong>
        </Toast.Header>
        <Toast.Body>{res}</Toast.Body>
      </Toast>

      {/* Main Section */}
      <h3 className='text-center heading'>Available Courses</h3>
      {landing && <div className='heading-underline'></div>}
      {enrollResLoader && <CircleLoader />}
      {coursesStore.loading &&
        (landing ? ( //show different preloader based on landing page
          <div className='text-center'>
            <span>Please wait. Courses are </span>
            <RedFillLoader />
          </div>
        ) : (
          <CircleLoader />
        ))}
      <div className='d-flex justify-content-around flex-wrap'>
        {coursesStore.error ? ( // show courses error messsage
          <p className='text-danger'>
            <span>Courses can not be retrived.</span>
            {!landing && (
              <>
                <hr />
                <span>Possible Reason: {coursesStore.error}</span>{' '}
              </>
            )}
          </p>
        ) : (
          courses.map((course) => (
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
                <Link to={`/courses/${course.id}`}>
                  <Card.Title style={{ fontSize: '1.4rem', fontWeight: '900' }}>
                    {course.title}
                  </Card.Title>
                </Link>
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
                        .humanize() + ' long.'}
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
                <div className='d-flex justify-content-center align-items-center'>
                  {isAuthenticated ? (
                    <Button
                      variant='primary'
                      //size='lg'
                      //className='px-5'
                      style={{
                        width: '300px',
                        height: '55px',
                        fontSize: '18px'
                      }}
                      onClick={() => {
                        //setAuthorizationToken(token);
                        setEnrollResLoader(true)
                        axios({
                          baseURL: process.env.REACT_APP_SITE_URL,
                          url: '/courses/enroll/' + course.id,
                          method: 'patch'
                        })
                          .then((response) => {
                            setEnrollResLoader(false)
                            setRes(response.data.message)
                          })
                          .catch((error) => {
                            setEnrollResLoader(false)
                            setRes(
                              'Sorry. Enrollment to this course is not possible due to server error. Please contact with admin.'
                            )
                          })
                      }}
                    >
                      Enroll
                    </Button>
                  ) : (
                    <Link to={'/login'}>
                      <Badge variant='warning' className='p-2'>
                        Please Login to Enroll.
                      </Badge>
                    </Link>
                  )}
                </div>
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
          ))
        )}
      </div>
      {landing && coursesStore.courses.length > 3 && (
        <div className='d-flex justify-content-center'>
          <Link to='/courses'>
            <Button variant='warning' size='xl' className='text-white'>
              More Ongoing Courses...
            </Button>
          </Link>
        </div>
      )}
    </div>
  )
}
