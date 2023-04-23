//import moment from 'moment'
import * as moment from 'dayjs'
import React, { useEffect, useState } from 'react'
import { Badge } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CircleLoader from '../../components/customSpinner/circleLoader/circleLoader'
import MetaInfo from '../../components/seo/metainfo'
import { RoutesConfig } from '../../config/routes.config'
import { fetchCourseEnrolledByStuLoader } from '../../store/courses'
import CoursesComponent from '../courses/'
import Pagination from 'react-js-pagination'
import { paginate } from '../../utils/paginate'

export default function ExamListsByCat() {
  const dispatch = useDispatch()
  const [currentPage, setCurrentPage] = useState(1)
  const courses = useSelector((state) => state.courses)
  const pageSize = 5

  useEffect(() => {
    dispatch(fetchCourseEnrolledByStuLoader())
  }, [dispatch])
  const paginatedCoursesEnrolledByStu = paginate(
    courses.coursesEnrolledByStu,
    currentPage,
    pageSize
  )
  return (
    <div>
      {courses.loading && <CircleLoader />}
      <h2 className='text-center'>Enrolled Courses</h2>
      <div className='m-3 d-flex justify-content-around flex-wrap'>
        {courses.coursesEnrolledByStu.length < 1 ? (
          <div>
            <p className='text-center text-danger'>
              You have not enrolled for any course yet. Please enroll any course
              first.
            </p>
            <CoursesComponent />
          </div>
        ) : (
          <>
            <div className='d-flex justify-content-center flex-wrap'>
              {paginatedCoursesEnrolledByStu.map((course) => (
                <div
                  className='mt-3 mr-3 p-3 bg-dark text-white'
                  style={{ width: '250px' }}
                >
                  <p className='lead text-center'>{course.title}</p>
                  <p className='mt-2 text-center'>
                    {moment().isAfter(course.endDate) ? (
                      <Badge variant='danger' className='p-2'>
                        This Course is ended
                      </Badge>
                    ) : (
                      <Link to={'/exams/courses/' + course.id}>
                        <Badge variant='light' className='p-2'>
                          Go to Exams
                        </Badge>
                      </Link>
                    )}
                  </p>
                </div>
              ))}
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
          </>
        )}
      </div>
      <MetaInfo {...RoutesConfig.Exams.metaInfo} />
    </div>
  )
}
