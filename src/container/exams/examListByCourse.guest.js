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
export default function ExamListsByCatGuest({ landing = null }) {
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
      {/* Main Section */}
      <h3 className='text-center heading'>Exams Under Courses</h3>
      {coursesStore.loading && <CircleLoader />}
      <div className='d-flex justify-content-around flex-wrap'>
        {coursesStore.error ? ( // show courses error messsage
          <p className='text-danger'>
            <span>Courses can not be retrived.</span>
          </p>
        ) : (
          courses.map((course) => (
            <Card className='my-3' style={{ width: '350px' }}>
              <Card.Body>
                <Card.Title
                  className='text-center'
                  style={{ fontSize: '1.4rem', fontWeight: '900' }}
                >
                  {course.title}
                </Card.Title>
                <Card.Text className='text-center mt-2'>
                  <Link to={'/exams/courses/' + course.id}>
                    <Button variant='primary'>Go to Exams</Button>
                  </Link>
                </Card.Text>
              </Card.Body>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}
