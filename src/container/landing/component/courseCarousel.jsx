import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Carousel, Col, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import * as removeMd from 'remove-markdown'
import { Image } from 'react-bootstrap'
import CourseSearch from '../../../components/serach/courseSearch'

export default function CourseCarousel() {
  const [latestCourses, setLatestCourses] = useState([])
  useEffect(() => {
    Axios.get(process.env.REACT_APP_SITE_URL + '/courses/latest')
      .then((response) => {
        setLatestCourses(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }, [])
  return (
    <Row className='mt-3 text-dark mox-custom-carousel align-items-center'>
      <Col lg='2'></Col>

      <Col lg='4' className='text-center'>
        <Carousel interval={6000}>
          {latestCourses.map((course) => (
            <Carousel.Item className='mb-3'>
              <p
                style={{
                  height: '3.6rem',
                  fontSize: '1.6rem',
                  fontWeight: 800
                }}
              >
                {'New! ' + course.title}
              </p>

              <p style={{ height: '4rem' }}>
                {removeMd(course.description.slice(0, 120) + '...', {
                  gfm: true,
                  stripListLeaders: true
                })}
              </p>

              <Link to={'/courses/' + course.id}>
                <Button variant='dark' className=''>
                  Learn More
                </Button>
              </Link>
            </Carousel.Item>
          ))}
        </Carousel>
        <Link to='/courses'>
          <Button variant='dark' className='mt-5'>
            All Courses
          </Button>
        </Link>
        <hr />
        <CourseSearch />
      </Col>
      <Col lg={6} className='hideInSm'>
        <Image src='/assets/image/hero/hero_course_snippet.png' fluid />
      </Col>
    </Row>
  )
}
