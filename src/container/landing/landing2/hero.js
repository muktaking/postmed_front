import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import imgSrc from '../../../assets/image/bg.svg'
import styles from './hero.module.scss'

export default function Hero() {
  return (
    <Container id='home' className={`${styles.container}`}>
      <Row>
        <Col lg={{ span: 8 }}>
          <Image src={imgSrc} />
        </Col>
        <Col
          className='d-flex justify-content-center align-items-center'
          lg={{ span: 4, order: 'first' }}
        >
          <div className={`${styles.heading}`}>
            <h2>Medical Online</h2>
            <h3>Examination</h3>
            <div className='heading-underline my-3 mx-0'></div>
            <p className='lead'>
              Knowledge, Revision and Time Management - keys for any competitive
              exams.
            </p>
            {/* <div className='bg-warning heading-underline my-3 mx-0'></div>
            <p className=''>Learn, Test and prepare for the success.</p> */}
            <div className='d-flex justify-content-center mt-5'>
              <Link to='/exams/category/Free-1'>
                <Button variant='warning' size='lg'>
                  Try Demo Exam
                </Button>
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
