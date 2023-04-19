import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import styles from './hero.module.scss'
import { facultyToString, pgProgramme } from '../../../utils/faculty'
import Promotional from '../promotional'

export default function Hero() {
  return (
    <Container id='home' className={`${styles.container} px-0`} fluid>
      <Promotional />
      <h3 className='heading text-center'>
        Welcome To Our Postgraduation Programs
      </h3>
      <div className='heading-underline'></div>
      <Row>
        {pgProgramme.map((program, ind) => (
          <Col md={4}>
            <Card bg='dark' text='white'>
              <Card.Header
                className='text-center'
                style={{ fontSize: '1.7rem' }}
              >
                {program.name}
              </Card.Header>
              <Card.Body>
                <img
                  height='120'
                  className='d-block w-100'
                  src={'/assets/image/hero/' + program.imageName}
                  alt='First slide'
                />
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
