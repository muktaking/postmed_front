import axios from 'axios'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { Button, Form, Modal, Toast } from 'react-bootstrap'
import { roleArray, rolePermitted } from '../../../utils/canActivate'

export default function EditUser({
  role,
  user,
  courses,
  updater,
  handleClose
}) {
  const [showPassword, setShowPassword] = useState(false)
  const [res, setRes] = useState(null)
  const showPasswordToggle = () => {
    setShowPassword(!showPassword)
  }
  const initials = {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    userName: user.userName,
    role: user.role,
    accessableCourseIds: user.accessRight
      ? user.accessRight.accessableCourseIds
      : [],
    canCreateExam: user.accessRight && user.accessRight.canCreateExam,
    identityStatus: user.identityStatus,
    gender: user.gender,
    email: user.email,
    password: ''
  }

  return (
    <div>
      <Toast
        show={res}
        onClose={() => {
          setRes(null)
        }}
        style={{
          position: 'absolute',
          top: '-30px',
          left: '10px',
          zIndex: '11111'
        }}
      >
        <Toast.Header>
          <strong className='mr-auto'>Server Response</strong>
        </Toast.Header>
        <Toast.Body>{res}</Toast.Body>
      </Toast>
      <Modal.Header closeButton>
        <Modal.Title>Edit {' ' + user.userName}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik
          initialValues={initials}
          onSubmit={(values, { setSubmitting }) => {
            axios
              .put(process.env.REACT_APP_SITE_URL + '/users/' + user.id, values)
              .then((response) => {
                setRes(response.data.message)
                updater()
              })
              .catch((error) => {
                console.log(error)
                setRes(error.message)
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
              <Form.Group controlId='formBasicFirstName'>
                <Form.Label>FirstName</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='FirstName'
                  name='firstName'
                  value={values.firstName}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId='formBasicLastName'>
                <Form.Label>LastName</Form.Label>
                <Form.Control
                  type='text'
                  name='lastName'
                  placeholder='LastName'
                  value={values.lastName}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId='formBasicUserName'>
                <Form.Label>UserName</Form.Label>
                <Form.Control
                  type='text'
                  name='userName'
                  placeholder='UserName'
                  value={values.userName}
                  onChange={handleChange}
                />
              </Form.Group>
              {role > rolePermitted.mentor && (
                <>
                  <Form.Group controlId='formBasicEmail'>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type='email'
                      name='email'
                      placeholder='Enter email'
                      value={values.email}
                      onChange={handleChange}
                    />
                    <Form.Text className='text-muted'>
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>
                  {role > rolePermitted.moderator && (
                    <>
                      <Form.Group>
                        <Form.Label>Assign A Role</Form.Label>
                        <Form.Control
                          as='select'
                          name='role'
                          value={values.role}
                          onChange={handleChange}
                        >
                          {roleArray.slice(0, role).map((r, i) => (
                            <option value={i + 1}>{r}</option>
                          ))}
                        </Form.Control>
                      </Form.Group>
                      {user.role >= rolePermitted.mentor && (
                        <>
                          <Form.Group>
                            <Form.Label>Assign To Courses</Form.Label>
                            <Form.Control
                              as='select'
                              name='accessableCourseIds'
                              value={values.accessableCourseIds}
                              multiple
                              onChange={handleChange}
                            >
                              {courses.map((course) => (
                                <option value={course.id}>
                                  {course.title}
                                </option>
                              ))}
                            </Form.Control>
                          </Form.Group>
                          <Form.Group>
                            <Form.Label>
                              Eligibility For Creating Exam
                            </Form.Label>
                            <Form.Check
                              type='radio'
                              label='Yes'
                              name='canCreateExam'
                              value='1'
                              defaultChecked={values.canCreateExam === true}
                              onChange={handleChange}
                            />
                            <Form.Check
                              type='radio'
                              label='No'
                              name='canCreateExam'
                              value='0'
                              defaultChecked={values.canCreateExam === false}
                              onChange={handleChange}
                            />
                          </Form.Group>
                        </>
                      )}
                    </>
                  )}

                  {user.loginProvider === 1 && (
                    <Form.Group>
                      <Form.Label>Change Identity Status</Form.Label>
                      <Form.Control
                        as='select'
                        name='identityStatus'
                        value={values.identityStatus}
                        onChange={handleChange}
                      >
                        <option value='0'>Unchecked</option>
                        <option value='1'>Checked</option>
                        <option value='2'>Unrequired</option>
                      </Form.Control>
                    </Form.Group>
                  )}
                  <div className='mb-3'>
                    <Button onClick={showPasswordToggle}>
                      Assaign A New Password
                    </Button>
                    {showPassword && (
                      <Form.Group controlId='formBasicPassword'>
                        <Form.Label></Form.Label>
                        <Form.Control
                          type='password'
                          name='password'
                          placeholder='Password'
                          handleChange={handleChange}
                        />
                      </Form.Group>
                    )}
                  </div>
                </>
              )}

              <Form.Group controlId='formGridState'>
                <Form.Label>Gender</Form.Label>
                <Form.Control
                  name='gender'
                  as='select'
                  value={values.gender}
                  onChange={handleChange}
                >
                  <option value='male'>Male</option>
                  <option value='female'>Female</option>
                </Form.Control>
              </Form.Group>

              <Button variant='primary' type='submit'>
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </div>
  )
}
