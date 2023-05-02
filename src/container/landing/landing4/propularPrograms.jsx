import React from 'react'
import { facultyToString, pgProgramme } from '../../../utils/faculty'
import { Button, Card, Carousel, Col, Row } from 'react-bootstrap'
import { LazyLoadComponent } from 'react-lazy-load-image-component'
import { NavLink } from 'react-router-dom'

export default function PropularPrograms() {
  return (
    <div className={' py-2'}>
      <h3 className='heading text-center'>Popular Programs</h3>
      <div className='heading-underline'></div>
      {/* only for sm size screen */}
      <Carousel className='mx-2 hideInMd'>
        {pgProgramme.map((program, ind) => (
          <Carousel.Item>
            <Card className='bg-light' text='white' style={{ height: '16rem' }}>
              <Card.Body>
                <LazyLoadComponent>
                  <img
                    height='120'
                    className='d-block w-100'
                    src={'/assets/image/hero/' + program.imageName}
                    alt='First slide'
                  />
                </LazyLoadComponent>
                <div className='mt-3 text-center'>
                  {program.courseIds.map((key) => (
                    <NavLink
                      key={program.name + key}
                      to={
                        '/courses?pgCourseType=' +
                        program.id +
                        '&faculty=' +
                        key
                      }
                    >
                      <Button variant='primary' className='mb-2 mr-2'>
                        {facultyToString(key)}
                      </Button>
                    </NavLink>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* only for md & lg size screen */}
      <Row className='hideInSm'>
        {pgProgramme.map((program, ind) => (
          <Col key={ind} md={4}>
            <Card bg='dark' text='white' style={{ height: '20rem' }}>
              <Card.Header
                className='text-center'
                style={{ fontSize: '1.7rem' }}
              >
                {program.name}
              </Card.Header>
              <Card.Body>
                <LazyLoadComponent>
                  <img
                    height='120'
                    className='d-block w-100'
                    src={'/assets/image/hero/' + program.imageName}
                    alt='First slide'
                  />
                </LazyLoadComponent>
                <div className='mt-3 text-center'>
                  {program.courseIds.map((key) => (
                    <NavLink
                      key={program.name + key}
                      to={
                        '/courses?pgCourseType=' +
                        program.id +
                        '&faculty=' +
                        key
                      }
                    >
                      <Button variant='primary' className='mb-2 mr-2'>
                        {facultyToString(key)}
                      </Button>
                    </NavLink>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}
