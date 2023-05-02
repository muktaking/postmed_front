import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchCourseEnrolledByStuLoader } from '../../../store/courses'
import { Button } from 'react-bootstrap'

export default function NoEnrollmentInfo() {
  const dispatch = useDispatch()
  const IsAuthenticated = useSelector((state) => state.auth.token !== null)
  const coursesStore = useSelector((state) => state.courses)
  const enrolledCoursesId = coursesStore.coursesEnrolledByStu.map(
    (course) => course.id
  )
  useEffect(() => {
    if (IsAuthenticated) {
      dispatch(fetchCourseEnrolledByStuLoader())
    }
  }, [dispatch, IsAuthenticated])

  return (
    IsAuthenticated &&
    enrolledCoursesId.length < 1 && (
      <div className='mb-3'>
        <p className='text-center bg-warning text-dark mx-auto'>
          <span>You have not enrolled any course yet. Please </span>
          <Link to='/courses'>
            <Button variant='outline-dark' className='my-2'>
              Enroll Course
            </Button>
          </Link>
        </p>
      </div>
    )
  )
}
