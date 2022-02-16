import React from 'react'
import { Alert, Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import { AiFillEdit } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { AccordionCard, AccordionStart } from '../../components/customAccordion'

export default function Help() {
  return (
    <div className='mt-5'>
      <Row>
        <Col lg={4} md={12} className='mt-5'>
          <h3>Login and Credentials</h3>
          <hr />
          <div className='px-2'>
            <p>
              For taking the full advantage of our online based exam app, you
              have to create an account at first. You can sign up by filling up
              a signup form or login with Facebook account.
            </p>
            <AccordionStart>
              <AccordionCard heading={'Steps in Signup form'} eventKey={0}>
                <ListGroup>
                  <ListGroupItem>
                    Go to <Link to='/signup'>signup</Link> page
                  </ListGroupItem>
                  <ListGroupItem>
                    Fill the form with first name, last name, username, email.
                  </ListGroupItem>
                  <ListGroupItem>
                    Give a password (minimum 6 characters and contain at least
                    one capital and lowercase alpha value and numeric value.
                    E.g., 123abcDEF)
                  </ListGroupItem>
                  <ListGroupItem>Retype the password again</ListGroupItem>
                  <ListGroupItem>Select your gender</ListGroupItem>
                  <ListGroupItem>
                    Lastly check the agreement of terms and conditions.
                  </ListGroupItem>
                </ListGroup>
                <p className='mt-2'>
                  So easy!! Click on Submit button to submit the form. After
                  successful submission you will be redirected to login page.
                  (For Facebook login, an automatic popup will be prompted or
                  just click on it and allow this web app.)
                </p>
              </AccordionCard>
              <AccordionCard heading={'Steps in Login form'} eventKey={1}>
                <ListGroup>
                  <ListGroupItem>
                    Go to <Link to='/login'>login</Link> page
                  </ListGroupItem>
                  <ListGroupItem>
                    In login form, type your email address and password and
                    submit.
                  </ListGroupItem>
                  <ListGroupItem>
                    You will be redirected to the dashboard page.
                  </ListGroupItem>
                </ListGroup>
                <p className='mt-2'>
                  (For Facebook login, an automatic popup will be prompted or
                  just click on it and allow this web app.)
                </p>
              </AccordionCard>
              <AccordionCard heading={'Update Your Profile'} eventKey={2}>
                <p>
                  For getting best user experience and your academic reports,
                  Please update your profile.
                </p>
                <ListGroup>
                  <ListGroupItem>
                    Go to <Link to='/profile'>profile</Link> page
                  </ListGroupItem>
                  <ListGroupItem>
                    Click on edit icon <AiFillEdit size='1.6rem' />. A modal
                    window will open.
                  </ListGroupItem>
                  <ListGroupItem>
                    Fill up all (at least mobile number, faculty, sub faculty,
                    your academic institution)
                  </ListGroupItem>
                  <ListGroupItem>
                    Click on ‘Save Changes’ Button to save your data.
                  </ListGroupItem>
                </ListGroup>
                <p className='mt-2'>
                  You can also change your avatar. Click the edit button{' '}
                  <AiFillEdit size='1.6rem' /> right to your profile avatar. A
                  modal window will open with some nice avatar. Choose from it
                  and click on it. Then click on ‘Save Changes’ Button to save
                  your data
                </p>
              </AccordionCard>
            </AccordionStart>
          </div>
        </Col>
        <Col lg={4} md={12} className='mt-5'>
          <h3>Courses & Exams</h3>
          <hr />
          <div className='px-2'>
            <p>
              For taking part in any exam. You have to enroll for a course.
              After successful enrollment, you will be able to take part in
              exam.
            </p>
            <AccordionStart>
              <AccordionCard
                heading={'How to enroll from a Course'}
                eventKey={0}
              >
                <ListGroup>
                  <ListGroupItem>
                    Go to <Link to='/courses'>Courses</Link> page
                  </ListGroupItem>
                  <ListGroupItem>Click on ‘Enroll’ button.</ListGroupItem>
                  <Alert variant='info' className='m-3'>
                    if free course, you will be enrolled automatically. But at
                    paid course, first you need to pay and then message us.
                    After verification by admin, admin will approve you. Then
                    you can enjoy the exams.
                  </Alert>
                </ListGroup>
              </AccordionCard>
              <AccordionCard heading={'How to take part an exam '} eventKey={1}>
                <ListGroup>
                  <ListGroupItem>
                    Go to <Link to='/exams'>Exams</Link> page
                  </ListGroupItem>
                  <ListGroupItem>
                    Then click on ‘Go to Exams’ button of your desired course.
                  </ListGroupItem>
                  <ListGroupItem>
                    You will lists of exams under the course. Click on 'Start
                    Exam' button to start an exam or 'Rank' button to see the
                    exam rank.
                  </ListGroupItem>
                  <ListGroupItem>
                    A modal window will show up with exam summary and rules.
                  </ListGroupItem>
                  <ListGroupItem>Click on proceed.</ListGroupItem>
                  <Alert variant='info' className='m-3'>
                    Give exam. Upon ending click on ‘Submit’ button to submit
                    your answer sheet. Then you will get an automatically
                    generated result.
                  </Alert>
                </ListGroup>
              </AccordionCard>
            </AccordionStart>
          </div>
        </Col>
        <Col lg={4} md={12} className='mt-5'>
          <AccordionStart>
            {/* <AccordionCard heading={h} eventKey={i}></AccordionCard> */}
          </AccordionStart>
        </Col>
      </Row>
    </div>
  )
}
