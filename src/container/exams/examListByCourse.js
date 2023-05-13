import * as moment from 'dayjs'
import React, { useEffect } from 'react'
import { TabContainer, Tab, Nav } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import CircleLoader from '../../components/customSpinner/circleLoader/circleLoader'
import {
  courseResetLoader,
  fetchCourseEnrolledByStuLoader,
  fetchCourseLoader
} from '../../store/courses'
import ExamTabContent from './component/examTabContent'

const duration = require('dayjs/plugin/duration')
const relativeTime = require('dayjs/plugin/relativeTime')
moment.extend(relativeTime)
moment.extend(duration)

/**
 *
 * @param {landing} dentotes landing page is or not; boolean
 * @returns nothing
 */
export default function ExamListsByCatGuest({ landing = null }) {
  const dispatch = useDispatch()
  const isAuthenticated = useSelector((state) => state.auth.token !== null)
  const loading = useSelector((state) => state.courses.loading)
  const courses = useSelector((state) => state.courses.courses)
  const coursesEnrolledByStu = useSelector(
    (state) => state.courses.coursesEnrolledByStu
  )
  const coursesError = useSelector((state) => state.courses.error)

  useEffect(() => {
    dispatch(courseResetLoader()) // reset course error msg
    dispatch(fetchCourseLoader()) // fetch courses
    if (isAuthenticated) {
      dispatch(fetchCourseEnrolledByStuLoader())
    }
  }, [dispatch, isAuthenticated])

  return (
    <div>
      <h3 className='text-center heading'>Exams Under Courses</h3>
      {loading && <CircleLoader />}
      {coursesError ? (
        <p className='text-danger'>
          <span>Courses can not be retrived.</span>
        </p>
      ) : (
        <div className='my-3 mox-custom-tabs'>
          <TabContainer defaultActiveKey={isAuthenticated ? 'enrolled' : 'all'}>
            <Nav className='d-flex justify-content-center'>
              <Nav.Item>
                {isAuthenticated ? (
                  <Nav.Link eventKey='enrolled'>Enrolled Courses</Nav.Link>
                ) : (
                  <Nav.Link eventKey='all'>All Courses</Nav.Link>
                )}
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='free'>Free Courses</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='paid'>Premium Courses</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              {isAuthenticated ? (
                <Tab.Pane eventKey='enrolled'>
                  <ExamTabContent courses={coursesEnrolledByStu} />
                </Tab.Pane>
              ) : (
                <Tab.Pane eventKey='all'>
                  <ExamTabContent courses={courses} />
                </Tab.Pane>
              )}
              <Tab.Pane eventKey='free'>
                <ExamTabContent
                  courses={
                    courses && courses.filter((course) => course.price === null)
                  }
                />
              </Tab.Pane>
              <Tab.Pane eventKey='paid'>
                <ExamTabContent
                  courses={
                    courses && courses.filter((course) => course.price !== null)
                  }
                />
              </Tab.Pane>
            </Tab.Content>
          </TabContainer>
        </div>
      )}
    </div>
  )
}
