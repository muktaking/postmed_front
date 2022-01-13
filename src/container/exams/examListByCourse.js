import React, { useEffect } from 'react'
import { Badge } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchCourseEnrolledByStuLoader } from '../../store/courses'
import CoursesComponent from '../courses/'

export default function ExamListsByCat() {
  const dispatch = useDispatch()
  const courses = useSelector((state) => state.courses.coursesEnrolledByStu)

  useEffect(() => {
    dispatch(fetchCourseEnrolledByStuLoader())
  }, [dispatch])

  return (
    <div className='my-5'>
      <h2 className='text-center'>Courses</h2>
      <div className='m-5'>
        {courses.length < 1 ? (
          <div>
            <p className='text-center text-danger'>
              {' '}
              You have not enrolled for any course yet. Please enroll for course
              first.
            </p>
            <CoursesComponent />
          </div>
        ) : (
          courses.map((course) => (
            <div className='mt-3 p-5 bg-dark text-white'>
              <h4>{course.title}</h4>
              <p>{course.description}</p>

              <Link to={'/courses/' + course.id}>
                <Badge variant='light' className='p-3'>
                  Go to Exams
                </Badge>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
