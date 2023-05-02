import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Carousel, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { LazyLoadComponent } from 'react-lazy-load-image-component'
import { Image } from 'react-bootstrap'

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
    <div className='my-5'>
      <h3 className='heading text-center'>Latest Courses</h3>
      <div className='heading-underline'></div>

      {/* only for sm size screen */}
      <Carousel interval={null} className='hideInMd'>
        {latestCourses.map((course) => (
          <Carousel.Item>
            <LazyLoadComponent>
              <Image
                fluid
                className='d-block mx-auto'
                src={process.env.REACT_APP_SITE_URL + '/' + course.imageUrl}
                alt={course.title}
              />
            </LazyLoadComponent>
            <Link to={'/courses/' + course.id}>
              <p className='lead bg-danger text-white text-center py-1'>
                {course.title}
              </p>
            </Link>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* only for md & lg size screen */}
      <Row className='hideInSm justify-content-center'>
        {latestCourses.map((course) => (
          <Col key={course.id} md={4}>
            <Card bg='dark' text='white' style={{ height: '17.5rem' }}>
              <Card.Body>
                <LazyLoadComponent>
                  <Image
                    fluid
                    className='d-block mx-auto'
                    src={process.env.REACT_APP_SITE_URL + '/' + course.imageUrl}
                    alt={course.title}
                  />
                </LazyLoadComponent>
                <Link to={'/courses/' + course.id}>
                  <p className='lead bg-danger text-white text-center py-1'>
                    {course.title}
                  </p>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}
