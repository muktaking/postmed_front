import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { Button, Form, Toast } from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { FaRegCalendarAlt } from 'react-icons/fa'
import Spinner from '../shared/spinner/spinner'

export default function AddASyllabus({ defaultValue = [], ...props }) {
  const [loading, setLoading] = useState(false)
  const [msg, setMsg] = useState(null)
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [courses, setCourses] = useState([])
  const ref = useRef()
  const courseRef = useRef()

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_SITE_URL + '/courses/auth')
      .then((response) => {
        setCourses(response.data)
      })
      .catch((e) => console.log(e))
  }, [])

  function submitHandler() {
    setLoading(true)
    if (defaultValue.length > 0) {
      axios
        .put(process.env.REACT_APP_SITE_URL + '/routine', {
          id: defaultValue[0],
          startDate: defaultValue[1],
          endDate: defaultValue[2],
          syllabus: ref.current.value,
          courseId: courseRef.current.value
        })
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
      .post(process.env.REACT_APP_SITE_URL + '/routine', {
        startDate,
        endDate,
        syllabus: ref.current.value,
        courseId: courseRef.current.value
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
      <h4>Routine Builder</h4>
      <div className='d-flex'>
        <div className='my-3 mr-5'>
          <p>Start Date</p>
          <DatePicker
            selected={defaultValue.length > 0 ? defaultValue[1] : startDate}
            onChange={(date) => {
              if (defaultValue.length > 0) {
                defaultValue[1] = date
              }
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
            selected={defaultValue.length > 0 ? defaultValue[2] : endDate}
            onChange={(date) => {
              if (defaultValue.length > 0) {
                defaultValue[2] = date
              }
              setEndDate(date)
            }}
            showTimeSelect
            minDate={new Date()}
            dateFormat='yyyy-MMM-dd, hh:mm a'
          />
          <FaRegCalendarAlt size='1.7rem' />
        </div>
      </div>

      <Form.Group controlId='exampleForm.ControlTextarea1'>
        <Form.Label>Syllabus</Form.Label>
        <Form.Control
          as='textarea'
          ref={ref}
          rows={2}
          defaultValue={defaultValue.length > 0 ? defaultValue[3] : ''}
        />
      </Form.Group>

      <Form.Group controlId='exampleForm.ControlSelect1'>
        <Form.Label>Select A Course</Form.Label>
        <Form.Control
          as='select'
          ref={courseRef}
          value={defaultValue.length > 0 ? defaultValue[4] : ''}
        >
          {courses &&
            courses.map((course) => (
              <option value={course.id}>{course.title}</option>
            ))}
        </Form.Control>
      </Form.Group>

      <Button variant='primary' onClick={submitHandler}>
        Submit
      </Button>
    </div>
  )
}
