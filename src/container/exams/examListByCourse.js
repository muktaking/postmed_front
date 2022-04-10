//import moment from 'moment'
import * as moment from 'dayjs'
import React, { useEffect } from 'react'
import { Badge } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import MetaInfo from '../../components/seo/metainfo'
import { RoutesConfig } from '../../config/routes.config'
import { fetchCourseEnrolledByStuLoader } from '../../store/courses'
import CoursesComponent from '../courses/'

export default function ExamListsByCat() {
  const dispatch = useDispatch()
  const courses = useSelector((state) => state.courses)

  useEffect(() => {
    dispatch(fetchCourseEnrolledByStuLoader())
  }, [dispatch])

  return (
    <div className=''>
      <h2 className='text-center'>Enrolled Courses</h2>
      <div className='m-3 d-flex justify-content-around flex-wrap'>
        {courses.coursesEnrolledByStu.length < 1 ? (
          <div>
            <p className='text-center text-danger'>
              You have not enrolled for any course yet. Please enroll for course
              first.
            </p>
            <CoursesComponent />
          </div>
        ) : (
          courses.coursesEnrolledByStu.map((course) => (
            <div className='mt-3 mr-3 px-5 pt-5 pb-3 bg-dark text-white'>
              <h4>{course.title}</h4>
              <p className='mt-5 text-center'>
                {moment().isAfter(course.endDate) ? (
                  <Badge variant='danger' className='p-3'>
                    This Course is ended
                  </Badge>
                ) : (
                  <Link to={'/exams/courses/' + course.id}>
                    <Badge variant='light' className='p-3'>
                      Go to Exams
                    </Badge>
                  </Link>
                )}
              </p>
            </div>
          ))
        )}
      </div>
      <MetaInfo {...RoutesConfig.Exams.metaInfo} />
    </div>
  )
}
