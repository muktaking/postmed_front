import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Form, Spinner, Toast } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import validator from 'validator'
import { fetchCategory } from '../../store/category'
import errorHandler from '../../utils/errorHandler'
import MiniManyQues from './component/miniManyQues'

const formValid = (formErrors, ...rest) => {
  //to check if form fields are null or contain error
  let valid = true
  let error = ''
  Object.values(formErrors).forEach((v) => {
    v && (valid = false) && (error = v)
    v && (error = v)
  })

  Object.values(rest).forEach((v) => {
    v === undefined && (valid = false)
  })
  return { valid, error } // valid: is it valid ; error: what is the error message
}

const QuestionUpload = ({ viewHandler }) => {
  const dispatch = useDispatch()
  const categories = useSelector((state) => state.category.categories)
  const [formErrors, setFormErrors] = useState({
    category: undefined,
    file: undefined
  })
  const [file, setFile] = useState(undefined)
  const [cat, setCat] = useState(undefined)
  const [res, setRes] = useState(null)
  const [loading, setLoading] = useState(false)
  const [uploadedExcelQuestion, setUploadedExcelQuestion] = useState([])

  useEffect(() => {
    dispatch(fetchCategory())
  }, [dispatch])

  const closeRes = () => {
    setRes(null)
    setUploadedExcelQuestion([])
  }

  const handleChange = (e) => {
    const { name, value, files } = e.target
    const errors = formErrors

    switch (name) {
      case 'category':
        errors.category =
          validator.isInt(value) || validator.isMongoId(value)
            ? undefined
            : 'Category is not valid'
        break
      default:
        break
    }

    setFormErrors(errors)
    if (name === 'file') setFile(files ? files[0] : undefined)
    if (name === 'category') setCat(value)
  }

  const uploadHandler = (e) => {
    e.preventDefault()

    const { valid, error } = formValid(formErrors, file, cat)

    if (valid) {
      const data = new FormData()
      data.append('file', file)
      data.append('category', cat)

      setLoading(true)
      axios
        .post(process.env.REACT_APP_SITE_URL + '/questions/files', data, {
          headers: { 'Content-Type': 'multipart/form-data' }
        })
        .then((response) => {
          setUploadedExcelQuestion(response.data)
          setRes('Successfully Updated')
          setLoading(false)
        })
        .catch((error) => {
          setRes(errorHandler(error))
          setLoading(false)
        })
    } else {
      setRes(
        'Please fill form corectly' +
          (error ? ' __ ' + error.toUpperCase() + ' __' : '')
      )
    }
  }

  return (
    <div>
      {loading && (
        <Spinner
          animation='grow'
          role='status'
          variant='dark'
          className='content-center'
        ></Spinner>
      )}
      {
        <Toast
          show={res}
          onClose={closeRes}
          style={{
            height: '100vh',
            position: 'fixed',
            right: '20px',
            overflowY: 'scroll',
            overflowX: 'hidden'
          }}
        >
          <Toast.Header>
            <strong className='mr-auto'>Response</strong>
          </Toast.Header>
          <Toast.Body>
            <p>
              {res + ' '}
              {uploadedExcelQuestion.length > 0 && uploadedExcelQuestion.length}
            </p>
            <div>
              {uploadedExcelQuestion.length > 0 &&
                uploadedExcelQuestion.map((ques, ind) => (
                  <MiniManyQues
                    key={ind}
                    index={ind}
                    question={ques}
                    viewHandler={viewHandler}
                  />
                ))}
            </div>
          </Toast.Body>
        </Toast>
      }

      <h3> Upload by Excel file</h3>
      <Form className='mt-2' onSubmit={uploadHandler}>
        <Form.Group controlId='formGridCategory'>
          <Form.Label>Question Category</Form.Label>
          <Form.Control as='select' name='category' onChange={handleChange}>
            <option value=''>Select</option>
            {categories.map((value, index) => {
              let CategorySlug = value.slug.replace(/_/g, ' / ')
              return (
                <option key={index} value={value.id}>
                  {CategorySlug}
                </option>
              )
            })}
          </Form.Control>
          {formErrors.category && (
            <span className='errorMessage'>{formErrors.category}</span>
          )}
        </Form.Group>
        <Form.Group>
          <Form.Label>Upload an excel file</Form.Label>
          <input
            type='file'
            name='file'
            className={'form-control-file'}
            onChange={handleChange}
          />
        </Form.Group>
        <Button type='submit' className='btn-submit'>
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default QuestionUpload
