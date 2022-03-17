import axios from 'axios'
import { Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { Button, Form, Spinner, Toast } from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { FaRegCalendarAlt } from 'react-icons/fa'

export default function CreateNotification({ defaultValue = null }) {
  console.log(defaultValue)
  const [loading, setLoading] = useState(false)
  const [msg, setMsg] = useState(null)
  const [startDate, setStartDate] = useState(
    defaultValue ? defaultValue.startDate && defaultValue.startDate : new Date()
  )
  const [endDate, setEndDate] = useState(
    defaultValue ? defaultValue.startDate && defaultValue.endDate : new Date()
  )
  const [courses, setCourses] = useState([])

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_SITE_URL + '/courses/auth')
      .then((response) => {
        setCourses(response.data)
      })
      .catch((e) => console.log(e))
  }, [])

  function submitHandler(values) {
    setLoading(true)
    if (defaultValue) {
      axios
        .patch(
          process.env.REACT_APP_SITE_URL + '/notification/' + defaultValue.id,
          {
            id: defaultValue.id.toString(),
            startDate,
            endDate,
            ...values
          }
        )
        .then((res) => {
          setLoading(false)
          setMsg(res.data.message)
        })
        .catch((e) => {
          setLoading(false)
          setMsg(e.message)
        })
      return
    }
    axios
      .post(process.env.REACT_APP_SITE_URL + '/notification', {
        startDate,
        endDate,
        ...values
      })
      .then((res) => {
        setLoading(false)
        setMsg(res.data.message)
      })
      .catch((e) => {
        setLoading(false)
        setMsg(e.message)
      })
  }

  return (
    <div>
      {loading && <Spinner />}
      <Toast
        show={msg}
        onClose={() => {
          setMsg(null)
        }}
        style={{ position: 'absolute' }}
      >
        <Toast.Header>
          <strong className='mr-auto'>Message</strong>
        </Toast.Header>
        <Toast.Body>{msg}</Toast.Body>
      </Toast>
      <h4>Notification Builder</h4>
      <Formik
        enableReinitialize
        //defaultValue.courseId can be null so another checking is required
        initialValues={{
          title: defaultValue ? defaultValue.title : '',
          priority: defaultValue ? defaultValue.priority.toString() : '1',
          courseId: defaultValue
            ? defaultValue.courseId
              ? defaultValue.courseId.id.toString()
              : '0'
            : '0',
          description: defaultValue ? defaultValue.description : ''
        }}
        onSubmit={(values) => {
          submitHandler(values)
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
          /* and other goodies */
        }) => (
          <Form>
            <Form.Group controlId='formTitle'>
              <Form.Label>Notification Title</Form.Label>
              <Form.Control
                type='textarea'
                name='title'
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder='Enter title'
              />
            </Form.Group>
            <Form.Group controlId='formPriority'>
              <Form.Label>Select Priority </Form.Label>
              <Form.Control
                as='select'
                name='priority'
                value={values.priority}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value='1'>Urgent</option>
                <option value='2'>Immediate</option>
                <option value='3'>Normal</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId='formCourseId'>
              <Form.Label>Select A Course</Form.Label>
              <Form.Control
                as='select'
                name='courseId'
                value={values.courseId}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value='0'>All Courses</option>
                {courses.map((course) => (
                  <option value={course.id}>{course.title}</option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId='formdescription'>
              <Form.Label>Notification Description</Form.Label>
              <Form.Control
                type='textarea'
                name='description'
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder='Enter description'
              />
            </Form.Group>
            <div className='d-flex'>
              <div className='my-3 mr-5'>
                <p>Start Date</p>
                <DatePicker
                  selected={new Date(startDate)}
                  onzChange={(date) => {
                    setStartDate(date)
                  }}
                  showTimeSelect
                  minDate={new Date()}
                  dateFormat='yyyy-MMM-dd, hh:mm a'
                />
                <FaRegCalendarAlt size='1.7rem' />
              </div>
              <div className='my-3'>
                <p>End Date</p>
                <DatePicker
                  selected={new Date(endDate)}
                  onChange={(date) => {
                    setEndDate(date)
                  }}
                  showTimeSelect
                  minDate={new Date()}
                  dateFormat='yyyy-MMM-dd, hh:mm a'
                />
                <FaRegCalendarAlt size='1.7rem' />
              </div>
            </div>
            <Button variant='primary' type='submit' onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
