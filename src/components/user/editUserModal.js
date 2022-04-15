import axios from 'axios'
import React, { useRef, useState } from 'react'
import { Button, Form, Modal, Toast } from 'react-bootstrap'

export default function EditUserModal({ user, updater, show, handleClose }) {
  const [res, setRes] = useState(null)

  const firstNameRef = useRef()
  const lastNameRef = useRef()
  const userNameRef = useRef()
  const emailRef = useRef()
  const mobileRef = useRef()
  const facultyRef = useRef()
  const genderRef = useRef()
  const institutionRef = useRef()
  const addressRef = useRef()

  const uploadHandler = (e) => {
    e.preventDefault()
    const data = {
      id: user.id,
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      userName: userNameRef.current.value,
      email: emailRef.current.value,
      mobile: mobileRef.current.value,
      faculty: facultyRef.current.value,
      institution: institutionRef.current.value,
      address: addressRef.current.value,
      gender: genderRef.current.value
    }
    axios
      .put(process.env.REACT_APP_SITE_URL + '/users/' + user.id, data)
      .then((response) => {
        setRes(response.data.message)
        updater()
        handleClose()
      })
      .catch((error) => {
        console.log(error)
        setRes(error.message)
      })
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
          top: '20px',
          left: '10px',
          zIndex: '11111'
        }}
      >
        <Toast.Header>
          <strong className='mr-auto'>Server Response</strong>
        </Toast.Header>
        <Toast.Body>{res}</Toast.Body>
      </Toast>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Your Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId='formBasicFirstName'>
              <Form.Label>FirstName</Form.Label>
              <Form.Control
                ref={firstNameRef}
                type='text'
                placeholder='FirstName'
                defaultValue={user.firstName}
              />
            </Form.Group>
            <Form.Group controlId='formBasicLastName'>
              <Form.Label>LastName</Form.Label>
              <Form.Control
                ref={lastNameRef}
                type='text'
                placeholder='LastName'
                defaultValue={user.lastName}
              />
            </Form.Group>
            <Form.Group controlId='formBasicUserName'>
              <Form.Label>UserName</Form.Label>
              <Form.Control
                ref={userNameRef}
                type='text'
                placeholder='UserName'
                defaultValue={user.userName}
              />
            </Form.Group>
            <Form.Group controlId='formBasicEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                ref={emailRef}
                type='email'
                placeholder='Enter email'
                defaultValue={user.email}
              />
              <Form.Text className='text-muted'>
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId='formBasicMobile'>
              <Form.Label>Mobile(+88)</Form.Label>
              <Form.Control
                ref={mobileRef}
                type='text'
                placeholder='mobile'
                defaultValue={user.mobile}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Faculty</Form.Label>
              <Form.Control
                ref={facultyRef}
                as='select'
                name='faculty'
                defaultValue={user.faculty}
              >
                <option value='0'>Basic</option>
                <option value='1'>Medicine</option>
                <option value='2'>Surgery</option>
                <option value='3'>Gynecology</option>
                <option value='4'>Paediatrics</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId='formBasicInstitution'>
              <Form.Label>Institution</Form.Label>
              <Form.Control
                ref={institutionRef}
                type='text'
                placeholder='Institution'
                defaultValue={user.institution}
              />
            </Form.Group>
            <Form.Group controlId='formBasicAddress'>
              <Form.Label>Address</Form.Label>
              <Form.Control
                ref={addressRef}
                type='text'
                placeholder='Address'
                defaultValue={user.address}
              />
            </Form.Group>
            <Form.Group controlId='formGridState'>
              <Form.Label>Gender</Form.Label>
              <Form.Control
                ref={genderRef}
                name='gender'
                as='select'
                defaultValue={user.gender}
                //onChange={this.handleChange}
              >
                <option value='male'>Male</option>
                <option value='female'>Female</option>
              </Form.Control>
            </Form.Group>
            {/* <Button variant='primary' type='submit' onClick={uploadHandler}>
              Submit
            </Button> */}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={uploadHandler}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
