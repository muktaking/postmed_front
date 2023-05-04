import React from 'react'
import { Container } from 'react-bootstrap'
import styles from './hero.module.scss'
import Promotional from '../promotional'
import CourseSearch from '../../../components/serach/courseSearch'
import EnrolledMaterials from '../component/enrolledMaterials'
import { useSelector } from 'react-redux'
import NoEnrollmentInfo from '../component/noEnrollmentInfo'

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
    </Container>
  )
}
