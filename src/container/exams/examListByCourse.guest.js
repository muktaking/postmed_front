import * as moment from 'dayjs'
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CircleLoader from '../../components/customSpinner/circleLoader/circleLoader'
import { courseResetLoader, fetchCourseLoader } from '../../store/courses'

import Pagination from 'react-js-pagination'
import { paginate } from '../../utils/paginate'
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
  const [currentPage, setCurrentPage] = useState(1)
  const coursesStore = useSelector((state) => state.courses)
  let courses = coursesStore ? coursesStore.courses : []
  const pageSize = 5

  useEffect(() => {
    dispatch(courseResetLoader()) // reset course error msg
    dispatch(fetchCourseLoader()) // fetch courses
  }, [dispatch])

  const paginatedCourses = paginate(courses, currentPage, pageSize)
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
          paginatedCourses.map((course) => (
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
      <div className='d-flex justify-content-center mt-3'>
        <Pagination
          activePage={currentPage}
          itemsCountPerPage={pageSize}
          totalItemsCount={courses.length}
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
