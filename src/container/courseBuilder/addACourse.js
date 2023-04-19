import axios from 'axios'
import React, { useRef, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { FaRegCalendarAlt } from 'react-icons/fa'
import ReactMarkdown from 'react-markdown'
import MdEditor from 'react-markdown-editor-lite'
import 'react-markdown-editor-lite/lib/index.css'
import remarkGfm from 'remark-gfm'
import Spinner from '../../components/shared/spinner/spinner'
import {
  PgCourseType as pgCourseTypeObj,
  faculty as facultyObj
} from '../../utils/faculty'

export default function AddACourse({
  defaultValue = [],
  updater,
  modalClose,
  msg,
  setMsg
}) {
  const [loading, setLoading] = useState(false)
  //const [msg, setMsg] = useState(null)
  const [startDate, setStartDate] = useState(
    defaultValue.length > 0 ? defaultValue[8] : new Date()
  )
  const [endDate, setEndDate] = useState(
    defaultValue.length > 0 ? defaultValue[9] : new Date()
  )
  const [des, setDes] = useState(
    defaultValue.length > 0 ? defaultValue[2] : null
  )
  const [pgCourseType, setPgCourseType] = useState(
    defaultValue.length > 0 ? defaultValue[6] : 0
  )
  const [faculty, setFaculty] = useState(
    defaultValue.length > 0 ? defaultValue[7] : 0
  )

  const ref = useRef()
  const priceRef = useRef()
  const discountPricePercentageRef = useRef()
  const imageFileRef = useRef()

  function submitHandler() {
    setLoading(true)

    if (defaultValue.length > 0) {
      modalClose()

      const dataObj = {
        id: defaultValue[0],
        title: ref.current.value,
        description: des,
        image: imageFileRef.current.files[0],
        price: priceRef.current.value,
        discountPricePercentage: discountPricePercentageRef.current.value,
        pgCourseType,
        faculty,
        startDate,
        endDate
      }
      const data = new FormData()
      Object.keys(dataObj).forEach((key) => {
        dataObj[key] && data.append(key, dataObj[key])
      })
      if (defaultValue[10]) {
        axios
          .post(
            process.env.REACT_APP_SITE_URL +
              '/courses/duplicate/' +
              defaultValue[0],
            data
          )
          .then((res) => {
            setLoading(false)
            setMsg(res.data.message)
            updater()
          })
          .catch((e) => {
            setLoading(false)
            setMsg(e.message)
          })
      } else {
        axios
          .patch(
            process.env.REACT_APP_SITE_URL + '/courses/' + defaultValue[0],
            data
          )
          .then((res) => {
            setLoading(false)
            setMsg(res.data.message)
            updater()
          })
          .catch((e) => {
            setLoading(false)
            //setMsg(e.message)
          })
      }

      return
    }
    const dataObj = {
      title: ref.current.value,
      description: des,
      image: imageFileRef.current.files[0],
      price: priceRef.current.value,
      discountPricePercentage: discountPricePercentageRef.current.value,
      pgCourseType,
      faculty,
      startDate,
      endDate
    }
    const data = new FormData()
    Object.keys(dataObj).forEach((key) => {
      dataObj[key] && data.append(key, dataObj[key])
    })

    axios
      .post(process.env.REACT_APP_SITE_URL + '/courses', data)
      .then((res) => {
        setLoading(false)
        setMsg(res.data.message)
      })
      .catch((e) => {
        setLoading(false)
        setMsg(e.message)
      })
  }

  function handleEditorChange({ html, text }) {
    setDes(text)
  }

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'pgCourseType':
        setPgCourseType(e.target.value)
        break
      case 'faculty':
        setFaculty(e.target.value)
        break
      default:
        break
    }
  }

  return (
    <div>
      {loading && <Spinner />}

      <h4>Course Builder</h4>
      <div className='d-flex'>
        <div className='my-3 mr-5'>
          <p>Start Date</p>
          <DatePicker
            selected={defaultValue.length > 0 ? defaultValue[8] : startDate}
            onChange={(date) => {
              if (defaultValue.length > 0) {
                defaultValue[8] = date
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
            selected={defaultValue.length > 0 ? defaultValue[9] : endDate}
            onChange={(date) => {
              if (defaultValue.length > 0) {
                defaultValue[9] = date
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

      {/* <Form.Group controlId='exampleForm.ControlTextarea2'>
        <Form.Label>description</Form.Label>
        <Form.Control
          as='textarea'
          ref={ref1}
          rows={10}
          defaultValue={defaultValue.length > 0 ? defaultValue[2] : ''}
        />
      </Form.Group> */}
      <p>Description</p>
      <MdEditor
        style={{ height: '500px' }}
        defaultValue={defaultValue.length > 0 ? defaultValue[2] : ''}
        renderHTML={(text) => (
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{text}</ReactMarkdown>
        )}
        onChange={handleEditorChange}
      />
      <Form.Group controlId='exampleForm.ControlTextarea3'>
        <Form.Label>Price</Form.Label>
        <Form.Control
          as='textarea'
          name='price'
          rows={1}
          ref={priceRef}
          defaultValue={defaultValue.length > 0 ? defaultValue[3] : ''}
        />
      </Form.Group>
      <Form.Group controlId='exampleForm.ControlTextarea3'>
        <Form.Label>Discount Price (%)</Form.Label>
        <Form.Control
          as='textarea'
          name='discounPricePercentage'
          rows={1}
          ref={discountPricePercentageRef}
          defaultValue={defaultValue.length > 0 ? defaultValue[4] : ''}
        />
      </Form.Group>

      <Form.Group controlId='formGridState'>
        <Form.Label>Postgraduate Course Type</Form.Label>
        <Form.Control
          name='pgCourseType'
          as='select'
          defaultValue={defaultValue.length > 0 ? defaultValue[6] : ''}
          onChange={handleChange}
        >
          {Object.keys(pgCourseTypeObj).map((key) => (
            <option value={pgCourseTypeObj[key]}>{key}</option>
          ))}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId='formGridState'>
        <Form.Label>Faculty</Form.Label>
        <Form.Control
          name='faculty'
          as='select'
          defaultValue={defaultValue.length > 0 ? defaultValue[7] : ''}
          onChange={handleChange}
        >
          {Object.keys(facultyObj).map((key) => (
            <option value={facultyObj[key]}>{key}</option>
          ))}
        </Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.Label>Upload Image</Form.Label>
        <input
          type='file'
          name='image'
          className={'form-control-file'}
          ref={imageFileRef}
        />
      </Form.Group>

      <Button variant='primary' onClick={submitHandler}>
        Submit
      </Button>
    </div>
  )
}
