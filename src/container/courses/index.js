import axios from 'axios'
import * as moment from 'dayjs'
import React, { useEffect, useState } from 'react'
import { Alert, Badge, Button, Card, Modal, Toast } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import remarkGfm from 'remark-gfm'
import CircleLoader from '../../components/customSpinner/circleLoader/circleLoader'
import MetaInfo from '../../components/seo/metainfo'
import { RoutesConfig } from '../../config/routes.config'
import {
  courseResetLoader,
  fetchCourseByFilterLoader,
  fetchCourseEnrolledByStuLoader,
  fetchCourseLoader
} from '../../store/courses'
import { facultyToString, pgCourseTypeToString } from '../../utils/faculty'
import CourseFilter from './courseFilter'
import { paginate } from '../../utils/paginate'
import Pagination from 'react-js-pagination'
import { useQuery } from '../../utils/queryRouter'
import PaymentCompletionForm from './paymentCompletionForm'
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
 * @returns nothing
 */
export default function Index() {
  const dispatch = useDispatch()
  let query = useQuery()
  const pgCourseType = query.get('pgCourseType')
  const faculty = query.get('faculty')
  const search = query.get('search')
  const loading = useSelector((state) => state.courses.loading)
  const courses = useSelector((state) => state.courses.courses)
  const coursesEnrolledByStu = useSelector(
    (state) => state.courses.coursesEnrolledByStu
  )
  const coursesError = useSelector((state) => state.courses.error)
  const isAuthenticated = useSelector((state) => state.auth.token !== null)
  const [enrollResLoader, setEnrollResLoader] = useState(false)
  const [res, setRes] = useState(null) // get server response after enrollment request by student
  const [currentPage, setCurrentPage] = useState(1)
  const [modalCourse, setModalCourse] = useState(null)
  const [showPaymentModalForm, setShowPayemntModalForm] = useState(false)
  const [showModalMsg, setShowModalMsg] = useState(null) // show modal
  const enrolledCoursesId = coursesEnrolledByStu
    ? coursesEnrolledByStu.map((course) => course.id)
    : null
  const pageSize = 5

  useEffect(() => {
    dispatch(courseResetLoader()) // reset course error msg
    dispatch(fetchCourseEnrolledByStuLoader())
    if (pgCourseType || faculty || search) {
      return dispatch(fetchCourseByFilterLoader(pgCourseType, faculty, search))
    }

    dispatch(fetchCourseLoader()) // fetch courses
  }, [dispatch, faculty, pgCourseType, search])

  const handleClose = () => {
    setRes(null)
  }

  const handleModalClose = () => {
    setShowModalMsg(null)
  }
  const enrollmentHandler = (courseId) => {
    setEnrollResLoader(true)

    axios({
      baseURL: process.env.REACT_APP_SITE_URL,
      url: '/courses/enroll/' + courseId,
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
  }
  const paginatedCourses = paginate(courses, currentPage, pageSize)
  return (
    <div>
      {/* SEO section */}
      {<MetaInfo {...RoutesConfig.Course.metaInfo} />}

      {/* Modal section --> shows paymentForm after clicking 'Enrollment' button */}
      {showPaymentModalForm && (
        <PaymentCompletionForm
          showPaymentModalForm={showPaymentModalForm}
          setShowPaymentModalForm={setShowPayemntModalForm}
          course={modalCourse}
          enrollmentHandler={enrollmentHandler}
        />
      )}

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
      {enrollResLoader && <CircleLoader />}
      {loading && <CircleLoader />}
      <CourseFilter pgCourseType={pgCourseType} faculty={faculty} />
      <div className='d-flex justify-content-around flex-wrap mt-3'>
        {coursesError ? ( // show courses error messsage
          <p className='text-danger'>
            <span>Courses can not be retrived.</span>
            <hr />
            <span>Possible Reason: {coursesError}</span>
          </p>
        ) : courses && courses.length < 1 ? (
          <Alert variant='danger'>No Courses Available</Alert>
        ) : (
          paginatedCourses.map((course) => (
            <>
              <Card className='my-3' style={{ width: '350px' }}>
                <Card.Body>
                  <Link to={`/courses/${course.id}`}>
                    <Card.Title
                      className='text-center'
                      style={{ fontSize: '1.4rem', fontWeight: '900' }}
                    >
                      {course.title}
                    </Card.Title>
                  </Link>
                  <Card.Text className=''>
                    <div className='text-right mb-2'>
                      {course.pgCourseType !== 0 && (
                        <Badge pill variant='dark' className='mr-2'>
                          {pgCourseTypeToString(course.pgCourseType)}
                        </Badge>
                      )}
                      {course.faculty !== 0 && (
                        <Badge pill variant='dark'>
                          {facultyToString(course.faculty)}
                        </Badge>
                      )}
                    </div>
                    <div>
                      <span className='bg-light text-dark px-1'>
                        Regular Price:{' '}
                        {course.price ? course.price + ' Taka' : 'Free'}
                      </span>
                    </div>

                    {course.price && course.discountPricePercentage ? (
                      <div className='mt-1'>
                        <span className='bg-secondary text-white px-1'>
                          Special Price:{' '}
                          {course.price -
                            Math.ceil(
                              (course.price * course.discountPricePercentage) /
                                100
                            ) +
                            ' Taka'}{' '}
                        </span>
                      </div>
                    ) : (
                      <></>
                    )}

                    <div className='my-1'>
                      <span className='bg-light text-dark px-1'>
                        Duration:{' '}
                        {moment
                          .duration(
                            moment(course.endDate).diff(course.startDate)
                          )
                          .humanize() + ' long.'}
                      </span>
                    </div>
                    <div>
                      <span className='bg-light text-dark px-1'>
                        Start: {moment(course.startDate).format('DD-MMM-YY')}
                      </span>
                    </div>
                  </Card.Text>
                  <Card.Text>
                    <p className='text-center'>
                      <Button
                        variant='outline-primary'
                        onClick={() => {
                          setShowModalMsg(course.description)
                        }}
                      >
                        Details
                      </Button>
                    </p>
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
                        {enrolledCoursesId &&
                        enrolledCoursesId.indexOf(course.id) > -1 ? (
                          <p className='text-success text-center'>
                            Already Enrolled
                          </p>
                        ) : (
                          <Button
                            variant='primary'
                            style={{
                              width: '300px',
                              height: '55px',
                              fontSize: '18px'
                            }}
                            onClick={() => {
                              if (course.price) {
                                setShowPayemntModalForm(true)
                                setModalCourse(course)
                              } else enrollmentHandler(course.id)
                            }}
                          >
                            Enroll
                          </Button>
                        )}
                      </div>
                    </>
                  )}
                </Card.Body>
              </Card>
            </>
          ))
        )}
      </div>
      <div className='d-flex justify-content-center mt-3'>
        <Pagination
          activePage={currentPage}
          itemsCountPerPage={pageSize}
          totalItemsCount={courses ? courses.length : null}
          pageRangeDisplayed={2}
          onChange={(page) => {
            setCurrentPage(page)
          }}
          itemClass='page-item'
          linkClass='page-link'
          prevPageText='Previous'
          nextPageText='Next'
        />
      </div>
    </div>
  )
}
