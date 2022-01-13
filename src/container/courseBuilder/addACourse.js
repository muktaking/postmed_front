import axios from 'axios'
import React, { useRef, useState } from 'react'
import { Button, Form, Toast } from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { FaRegCalendarAlt } from 'react-icons/fa'
import Spinner from '../../components/shared/spinner/spinner'

export default function AddACourse({ defaultValue = [] }) {
  const [loading, setLoading] = useState(false)
  const [msg, setMsg] = useState(null)
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const ref = useRef()
  const ref1 = useRef()

  function submitHandler() {
    setLoading(true)
    if (defaultValue.length > 0) {
      axios
        .patch(process.env.REACT_APP_SITE_URL + '/courses/' + defaultValue[0], {
          id: defaultValue[0],
          title: defaultValue[1],
          description: defaultValue[2],
          startDate: defaultValue[3],
          endDate: defaultValue[4]
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
      .post(process.env.REACT_APP_SITE_URL + '/courses', {
        title: ref.current.value,
        description: ref1.current.value,
        startDate,
        endDate
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
      <h4>Course Builder</h4>
      <div className='d-flex'>
        <div className='my-3 mr-5'>
          <p>Start Date</p>
          <DatePicker
            selected={defaultValue.length > 0 ? defaultValue[3] : startDate}
            onChange={(date) => {
              if (defaultValue.length > 0) {
                defaultValue[3] = date
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
            selected={defaultValue.length > 0 ? defaultValue[4] : endDate}
            onChange={(date) => {
              if (defaultValue.length > 0) {
                defaultValue[4] = date
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
        <Form.Label>Title</Form.Label>
        <Form.Control
          as='textarea'
          ref={ref}
          rows={1}
          defaultValue={defaultValue.length > 0 ? defaultValue[1] : ''}
        />
      </Form.Group>

      <Form.Group controlId='exampleForm.ControlTextarea2'>
        <Form.Label>description</Form.Label>
        <Form.Control
          as='textarea'
          ref={ref1}
          rows={2}
          defaultValue={defaultValue.length > 0 ? defaultValue[2] : ''}
        />
      </Form.Group>

      <Button variant='primary' onClick={submitHandler}>
        Submit
      </Button>
    </div>
  )
}
