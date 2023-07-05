import { Formik } from 'formik'
import React, { useState } from 'react'
import { Button, Form, Jumbotron } from 'react-bootstrap'
import { examTypes } from '../../../utils/faculty'

export default function ExamFilter({
  exams,
  setFilteredExams,
  setCurrentPage
}) {
  const [showFilter, setShowFilter] = useState(false)

  return (
    <div>
      <Formik
        initialValues={{ text: '' }}
        onSubmit={(values) => {
          let filteredExams = exams
          let { text, examType } = values
          if (text !== '') {
            filteredExams = filteredExams.filter((exam) =>
              exam.title.toLowerCase().includes(text.trim().toLowerCase())
            )
          }
          if (examType && examType.length > 0) {
            filteredExams = filteredExams.filter((exam) =>
              examType.includes(exam.type.toString())
            )
          }
          setFilteredExams(filteredExams)
          setCurrentPage(1)
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Button
              onClick={() => {
                setShowFilter(!showFilter)
              }}
            >
              Filter
            </Button>

            {showFilter && (
              <Jumbotron>
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
                <div className='mt-1 d-flex justify-content-around'>
                  <Button type='submit'>Apply</Button>
                  <Button
                    onClick={() => {
                      setShowFilter(false)
                    }}
                  >
                    Close
                  </Button>
                </div>
              </Jumbotron>
            )}
          </Form>
        )}
      </Formik>
    </div>
  )
}
