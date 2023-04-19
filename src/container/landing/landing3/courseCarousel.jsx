import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'

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
      <Carousel>
        {latestCourses.map((course) => (
          <Carousel.Item>
            <img
              className='d-block mx-auto'
              src={process.env.REACT_APP_SITE_URL + '/' + course.imageUrl}
              alt={course.title}
            />
            <Carousel.Caption>
              <Link to={'/courses/' + course.id}>
                <h4 className='bg-light py-1'>{course.title}</h4>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}
