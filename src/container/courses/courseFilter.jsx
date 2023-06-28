import { Formik } from 'formik'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Form, Jumbotron } from 'react-bootstrap'
import CircleLoader from '../../components/customSpinner/circleLoader/circleLoader'
import {
  PgCourseType,
  faculty as Faculty,
  facultyToString,
  pgCourseTypeToString
} from '../../utils/faculty'
import { fetchCourseByFilterLoader } from '../../store/courses'

//centering fixed element
// const styles = {
//   container: {
//     width: '300px',
//     position: 'fixed',
//     left: '50%',
//     zIndex: 1,
//     marginLeft: '-150px',
//     font: 'center'
//   }
// }

export default function CourseFilter({
  search = '',
  pgCourseType = null,
  faculty = null
}) {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [showFilter, setShowFilter] = useState(false)
  return (
    <div>
      <Formik
        initialValues={{ search, pgCourseType, faculty }}
        onSubmit={(values, { setSubmitting }) => {
          setLoading(false)
          const { search, pgCourseType, faculty } = values
          dispatch(
            fetchCourseByFilterLoader(
              pgCourseType === '-1' ? null : pgCourseType,
              faculty === '-1' ? null : faculty,
              search
            )
          )
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
            <h3 className='text-center'>
              <Button
                onClick={() => {
                  setShowFilter(!showFilter)
                }}
              >
                Filter
              </Button>
            </h3>
            {/* <p className='text-muted'>(Click to expand filter options)</p> */}
            {showFilter && (
              <Jumbotron>
                <Form.Group className='mb-3' controlId='formBasicPassword'>
                  <Form.Label>Search</Form.Label>
                  <Form.Control
                    type='text'
                    name='search'
                    placeholder='e.g. Abcde..'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.search}
                  />
                </Form.Group>
                <div className='pl-2'>
                  <Form.Group
                    controlId='courseFilter.pgCourseType'
                    className='mr-2'
                  >
                    <Form.Label>Select Programme</Form.Label>
                    <Form.Control
                      as='select'
                      name='pgCourseType'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.pgCourseType}
                    >
                      <option value='-1'>All</option>
                      {Object.values(PgCourseType)
                        .slice(1) // removing the first value (All: 0)
                        .map((value) => (
                          <option value={value}>
                            {pgCourseTypeToString(value)}
                          </option>
                        ))}
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId='courseFilter.faculty'>
                    <Form.Label>Select Subject</Form.Label>
                    <Form.Control
                      as='select'
                      name='faculty'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.faculty}
                    >
                      <option value='-1'>All</option>
                      {Object.values(Faculty)
                        .slice(1) // removing the first value (all: 0)
                        .map((value) => (
                          <option value={value}>
                            {facultyToString(value)}
                          </option>
                        ))}
                    </Form.Control>
                  </Form.Group>
                </div>
                <div className='mt-1 d-flex justify-content-around'>
                  <Button type='submit'>Apply</Button>
                  <Button
                    onClick={() => {
                      setShowFilter(false)
                    }}
                  >
                    close
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
