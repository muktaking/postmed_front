import axios from 'axios'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { FaLaughBeam, FaRegMeh, FaRegSadCry, FaRegSmile } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import validator from 'validator'

const validate = (values) => {
  const errors = {}
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if (!values.name) {
    errors.name = 'Required'
  } else if (!validator.isLength(values.name, { min: 3, max: 30 })) {
    errors.name = 'Name should be within 3 to 30 characters'
  }
  if (!validator.isLength(values.message, { min: 5, max: 255 })) {
    errors.message = 'Message should be within 5 to 255 characters'
  }
  return errors
}
const submit = (values, examId, setRes, { setSubmitting }) => {
  axios
    .post(process.env.REACT_APP_SITE_URL + '/exams/feedback', {
      ...values,
      examId
    })
    .then((response) => {
      setRes(response.data)
    })
    .catch((e) => {
      console.log(e)
    })
}

export default function Feedback({ examId }) {
  const [res, setRes] = useState(null)
  const user = useSelector((state) => state.user)
  const initialValues = {
    name: user.firstName,
    email: user.email,
    feedbackStatus: '3',
    message: ''
  }

  return (
    <Row className='mt-5'>
      <Col md={4} sm={6}>
        {res ? (
          <h3 className='text-success'>Thank You for submitting a feedback.</h3>
        ) : (
          <>
            <h3>Please give us a feedback.</h3>
            <hr />
            <Formik
              enableReinitialize
              initialValues={initialValues}
              validate={validate}
              onSubmit={(values, { setSubmitting }) => {
                submit(values, examId, setRes, { setSubmitting })
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleSubmit
                /* and other goodies */
              }) => (
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId='formBasicName'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type='text'
                      name='name'
                      placeholder='Enter name'
                      onChange={handleChange}
                      value={values.name}
                    />
                    <Form.Text as='span' className='text-danger'>
                      {errors.name && touched.name && errors.name}
                    </Form.Text>
                  </Form.Group>
                  <Form.Group controlId='formBasicEmail'>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type='email'
                      name='email'
                      placeholder='Enter email'
                      onChange={handleChange}
                      value={values.email}
                    />
                    <Form.Text className='text-muted'>
                      We'll never share your email with anyone else.
                    </Form.Text>
                    <Form.Text as='span' className='text-danger'>
                      {errors.email && touched.email && errors.email}
                    </Form.Text>
                  </Form.Group>
                  <p classname='lead'>Rating</p>
                  <Form.Group
                    controlId='formGroupFeedback'
                    className='d-flex mb-4'
                  >
                    <Form.Check type='radio' className='mr-2'>
                      <Form.Check.Input
                        type='radio'
                        name='feedbackStatus'
                        isValid
                        value='1'
                        onChange={handleChange}
                      />
                      <Form.Check.Label className='text-danger'>
                        <FaRegSadCry />
                        <span className='ml-1'>Below average</span>
                      </Form.Check.Label>
                    </Form.Check>
                    <Form.Check type='radio' className='mr-2'>
                      <Form.Check.Input
                        type='radio'
                        name='feedbackStatus'
                        value='2'
                        isValid
                        onChange={handleChange}
                      />
                      <Form.Check.Label className='text-warning'>
                        <FaRegMeh />
                        <span className='ml-1'>Average</span>
                      </Form.Check.Label>
                    </Form.Check>
                    <Form.Check type='radio' className='mr-2'>
                      <Form.Check.Input
                        type='radio'
                        name='feedbackStatus'
                        value='3'
                        isValid
                        defaultChecked
                        onChange={handleChange}
                      />
                      <Form.Check.Label>
                        <FaRegSmile />
                        <span className='ml-1'>Good</span>
                      </Form.Check.Label>
                    </Form.Check>
                    <Form.Check type='radio' className='mr-2'>
                      <Form.Check.Input
                        type='radio'
                        name='feedbackStatus'
                        value='4'
                        isValid
                        onChange={handleChange}
                      />
                      <Form.Check.Label>
                        <FaLaughBeam />
                        <span className='ml-1'>Best</span>
                      </Form.Check.Label>
                    </Form.Check>
                    <Form.Text as='span' className='text-danger'>
                      {errors.feedbackStatus &&
                        touched.feedbackStatus &&
                        errors.feedbackStatus}
                    </Form.Text>
                  </Form.Group>

                  <Form.Group controlId='formBasicFeedback'>
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as='textarea'
                      name='message'
                      rows={3}
                      placeholder='Write a feedback message for this exam'
                      onChange={handleChange}
                      value={values.message}
                    />
                    <Form.Text as='span' className='text-danger'>
                      {errors.message && touched.message && errors.message}
                    </Form.Text>
                  </Form.Group>

                  <Button variant='primary' type='submit'>
                    Submit
                  </Button>
                </Form>
              )}
            </Formik>
          </>
        )}
      </Col>
      <Col md={4} sm={6}></Col>
      <Col md={4}>
        <h3>Correction Form.</h3>
        <hr />
        <Form>
          <Form.Group controlId='formBasicName'>
            <Form.Label>Name</Form.Label>
            <Form.Control type='text' placeholder='Enter name' />
          </Form.Group>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type='email' placeholder='Enter email' />
            <Form.Text className='text-muted'>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId='formBasicMessage'>
            <Form.Label>Message</Form.Label>
            <Form.Control
              as='textarea'
              rows={3}
              placeholder='Write more details about the wrong information'
            />
          </Form.Group>

          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  )
}
