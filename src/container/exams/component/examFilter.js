import axios from 'axios'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import CircleLoader from '../../../components/customSpinner/circleLoader/circleLoader'

export default function ExamFilter({ setExams, id, setCurrentPage }) {
  const [loading, setLoading] = useState(false)
  const [showFilter, setShowFilter] = useState(false)
  const examTypes = [
    { name: 'Assignment', value: 0 },
    { name: 'Weekly', value: 1 },
    { name: 'Monthly', value: 2 },
    { name: 'Assesment', value: 3 },
    { name: 'Term', value: 4 },
    { name: 'Test', value: 5 },
    { name: 'Final', value: 6 }
  ]
  return (
    <div>
      <Formik
        initialValues={{ text: '' }}
        onSubmit={(values, { setSubmitting }) => {
          setLoading(true)
          const { text, ...rest } = values
          let examType = Object.values(rest).map((e) => e[0])
          //discarding all null values
          examType = examType.filter((eT) => eT)
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
                <div className='pl-2'>
                  {examTypes.map((examType, ind) => (
                    <Form.Check
                      label={examType.name}
                      name={examType.name}
                      type={'checkbox'}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id={examType.name}
                      value={examType.value}
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
