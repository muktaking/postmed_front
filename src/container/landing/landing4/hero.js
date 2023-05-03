import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styles from './hero.module.scss'
import Promotional from '../promotional'

import CourseSearch from '../../../components/serach/courseSearch'
import EnrolledMaterials from './enrolledMaterials'
import PropularPrograms from './propularPrograms'
import FindCourseByCategories from './findCourseByCategories'
import CourseCarousel from '../landing3/courseCarousel'
import { useSelector } from 'react-redux'
import NoEnrollmentInfo from './noEnrollmentInfo'

export default function Hero() {
  const isAuthenticated = useSelector((state) => state.auth.token !== null)
  return (
    <Container id='home' className={`${styles.container} px-0`} fluid>
      <Promotional />
      <div className={styles.dashBack + ' py-3'}>
        <NoEnrollmentInfo />
        <CourseSearch />
        {isAuthenticated && <EnrolledMaterials />}
      </div>

      <PropularPrograms />
      <hr />
      <FindCourseByCategories />
      <hr />
      <CourseCarousel />

      <div className='d-flex justify-content-center mt-3'>
        <Link to='/exams/category/Free-1'>
          <Button variant='dark' size='lg'>
            Try Demo Exam
          </Button>
        </Link>
      </div>
    </Container>
  )
}
