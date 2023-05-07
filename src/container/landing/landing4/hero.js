import React from 'react'
import { Container } from 'react-bootstrap'
import styles from './hero.module.scss'
import EnrolledMaterials from '../component/enrolledMaterials'
import { useSelector } from 'react-redux'
import NoEnrollmentInfo from '../component/noEnrollmentInfo'
import CourseCarousel from '../component/courseCarousel'

export default function Hero() {
  const isAuthenticated = useSelector((state) => state.auth.token !== null)
  return (
    <Container id='home' className={`${styles.container} px-0`} fluid>
      <div className={styles.dashBack + ' py-3'}>
        <NoEnrollmentInfo />
        {isAuthenticated && (
          <>
            <EnrolledMaterials /> <hr />
          </>
        )}
        <CourseCarousel />
      </div>
    </Container>
  )
}
