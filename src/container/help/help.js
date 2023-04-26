import React from 'react'
import { Alert, Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import { AiFillEdit } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { AccordionCard, AccordionStart } from '../../components/customAccordion'
import ContactInfo from '../../components/contactInfo/contactInfo'

export default function Help() {
  return (
    <div>
      <Row>
        <Col lg={4} md={12} className='mb-5'>
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
        <Col lg={4} md={12} className='mb-5'>
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
        <Col lg={4} md={12}>
          <h3 id='payment'>Payement Process</h3>
          <p>
            (For easily payement process with QR code scanning, go to{' '}
            <Link to='/payment'>Payment Page</Link>)
          </p>
          <hr />
          <div className='px-2'>
            <AccordionStart>
              <AccordionCard
                heading={'Steps in bKash Payement Process'}
                eventKey={0}
              >
                <ListGroup>
                  <ListGroupItem>
                    Go to your bKash Mobile Menu by dialing *247# or go to your
                    mobile bKash app
                  </ListGroupItem>
                  <ListGroupItem>Choose “Send Money”</ListGroupItem>
                  <ListGroupItem>
                    Enter the bKash Account Number: 01737313915
                  </ListGroupItem>
                  <ListGroupItem>
                    Enter the amount you want to send (Payment Amount of The
                    Course)
                  </ListGroupItem>
                  <ListGroupItem>
                    Enter a reference about the transaction.* (Enter Your User
                    ID)
                    <Alert variant='warning'>
                      You will Get Your user id at Topbar with golden color text
                      or your <Link to='/profile'>Profile</Link> marked with
                      golden background at the top section
                    </Alert>
                  </ListGroupItem>
                  <ListGroupItem>
                    Now enter your bKash Mobile Menu PIN to confirm the
                    transaction
                  </ListGroupItem>
                  <ListGroupItem>
                    <p className='mt-2'>Now Message at 01737313915</p>
                    <Alert variant='info'>
                      Write - Your name &lt;Space&gt; Your User ID / Your Email
                      &lt;Space&gt; The bKash Number (From which you send money)
                    </Alert>
                    <Alert variant='warning'>
                      You will Get Your user id at Topbar with golden color text
                      or your <Link to='/profile'>Profile</Link> marked with
                      golden background at the top section
                    </Alert>
                  </ListGroupItem>
                  <ListGroupItem>
                    <p>Or message at Facebook messenger</p>
                    <Alert variant='primary'>
                      Write - Your name &lt;Space&gt; Your User ID / Your Email
                      &lt;Space&gt; The bKash Number (From you send money)
                    </Alert>
                    <Alert variant='warning'>
                      You will Get Your user id at Topbar with golden color text
                      or your <Link to='/profile'>Profile</Link> marked with
                      golden background at the top section
                    </Alert>
                  </ListGroupItem>
                  <ListGroupItem>
                    You will be informed through message or mobile call within 8
                    hours.
                  </ListGroupItem>
                </ListGroup>
                <p>
                  *Do not use more than one word, avoid space or special
                  characters
                </p>
              </AccordionCard>
            </AccordionStart>
          </div>
        </Col>
      </Row>
      <Row className='my-3'>
        <Col></Col>
        <Col md={4} className='text-center'>
          <ContactInfo />
        </Col>
        <Col></Col>
      </Row>
    </div>
  )
}
