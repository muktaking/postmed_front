import React from 'react'
import { Col, Container, Image, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import imgSrc from '../../../assets/image/signupSection.png'
import heroStyles from '../landing2/hero.module.scss'

const styles = {
  img: {
    maxWidth: '90%'
  }
}
export default function SignupSection() {
  return (
    <Container className='mt-5'>
      <Row>
        <Col lg={{ span: 5 }}>
          <Image style={styles.img} src={imgSrc} />
        </Col>
        <Col lg={{ span: 7, order: 'first' }}>
          <div className={`${heroStyles.heading}`}>
            <h2>Sign Up</h2>
            <h3>For special offers</h3>
            <div className='heading-underline my-3 mx-0'></div>
            <p className='lead'>
              Join today to get access to our latest exams analyics, revision
              hints and tips and special offers from MediOnExam
            </p>
            {/* <div className='bg-warning heading-underline my-3 mx-0'></div>
            <p className=''>Learn, Test and prepare for the success.</p> */}
            <div className='d-flex justify-content-center mt-5'>
              <Link to='/signup'>
                <Button variant='warning' size='lg'>
                  Register
                </Button>
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
