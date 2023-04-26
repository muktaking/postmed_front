import axios from 'axios'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import CircleLoader from '../../../components/customSpinner/circleLoader/circleLoader'
import { examTypes } from '../../../utils/faculty'

export default function ExamFilter({ setExams, id, setCurrentPage }) {
  const [loading, setLoading] = useState(false)
  const [showFilter, setShowFilter] = useState(false)

  return (
    <div>
      <Formik
        initialValues={{ text: '' }}
        onSubmit={(values, { setSubmitting }) => {
          setLoading(true)
          let { text, examType } = values
          console.log(values)

          if (examType.length < 1) {
            examType = ['0', '1', '2', '3', '4', '5', '6']
          }

          axios
            .post(process.env.REACT_APP_SITE_URL + '/exams/course/' + id, {
              text,
              examType
            })
            .then((response) => {
              setLoading(false)
              setExams(response.data)
              setCurrentPage(1)
            })
            .catch((e) => {
              setLoading(false)
              console.log(e)
            })
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
          <Form onSubmit={handleSubmit}>
            {loading && <CircleLoader />}
            <h3>
              <Button
                onClick={() => {
                  setShowFilter(!showFilter)
                }}
              >
                Filter
              </Button>
            </h3>
            <p className='text-muted'>(Click to expand filter options)</p>
            {showFilter && (
              <>
                <Form.Group className='mb-3' controlId='formBasicPassword'>
                  <Form.Label>Search</Form.Label>
                  <Form.Control
                    type='text'
                    name='text'
                    placeholder='e.g. Abcde..'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.text}
                  />
                </Form.Group>
                <h4>{'Select Exam Type'}</h4>
                <div className='d-flex flex-wrap'>
                  {examTypes.map((examType, ind) => (
                    <Form.Check
                      label={examType.name}
                      name='examType'
                      type={'checkbox'}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id={examType.name}
                      value={examType.value}
                      className='mr-2 mb-2'
                    />
                  ))}
                </div>
                <div className='mt-1 d-flex justify-content-center'>
                  <Button type='submit'>Apply</Button>
                </div>
              </>
            )}
          </Form>
        )}
      </Formik>
    </div>
  )
}
