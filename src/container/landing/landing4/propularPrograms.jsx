import React from 'react'
import { facultyToString, pgProgramme } from '../../../utils/faculty'
import { Button, Card, Carousel } from 'react-bootstrap'
import { LazyLoadComponent } from 'react-lazy-load-image-component'
import { NavLink } from 'react-router-dom'

export default function PropularPrograms() {
  return (
    <div className={' py-2'}>
      <h4 className='text-center'>Popular Programs</h4>
      <Carousel className='mx-2'>
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
    </div>
  )
}
