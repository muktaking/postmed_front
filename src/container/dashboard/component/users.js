import axios from 'axios'
import moment from 'moment'
import React, { useRef, useState } from 'react'
import { Button, Form, Image, Modal, Table, Toast } from 'react-bootstrap'
import { FaEdit, FaTimes } from 'react-icons/fa'
import { roleToString } from '../../../utils/canActivate'

const styles = {
  cursor: 'pointer'
}

const DeleteModal = ({ handleClose, user, updater, ...props }) => {
  const submitHandler = () => {
    handleClose()
    axios
      .delete(process.env.REACT_APP_SITE_URL + '/users/' + user.id)
      .then((response) => {
        console.log(response)
        updater()
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <div props={props}>
      <Modal.Header closeButton>
        <Modal.Title>Delete This User</Modal.Title>
      </Modal.Header>
      <Modal.Body>{`Are you sure to delete ${user.firstName} ${user.lastName}!`}</Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={handleClose}>
          Close
        </Button>
        <Button variant='danger' onClick={submitHandler}>
          Yes
        </Button>
      </Modal.Footer>
    </div>
  )
}

const EditModal = ({ handleClose, user, updater, ...props }) => {
  const [res, setRes] = useState(null)
  const [showPassword, setShowPassword] = useState(false)
  const firstNameRef = useRef()
  const lastNameRef = useRef()
  const userNameRef = useRef()
  const emailRef = useRef()
  const roleRef = useRef()
  const genderRef = useRef()
  const passwordRef = useRef()

  const showPasswordToggle = () => {
    setShowPassword(!showPassword)
  }
  const uploadHandler = (e) => {
    e.preventDefault()
    const data = {
      id: user.id,
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      userName: userNameRef.current.value,
      email: emailRef.current.value,
      role: roleRef.current.value,
      gender: genderRef.current.value,
      password: passwordRef.current ? passwordRef.current.value : null
    }
    axios
      .put(process.env.REACT_APP_SITE_URL + '/users/' + user.id, data)
      .then((response) => {
        console.log(response)
        setRes(response.data.message)
        updater()
      })
      .catch((error) => {
        console.log(error)
        setRes(error.message)
      })
  }
  return (
    <div props={props}>
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
      <Modal.Header closeButton>
        <Modal.Title>Edit {' ' + user.userName}</Modal.Title>
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
          <Form.Group>
            <Form.Label>Assign A Role</Form.Label>
            <Form.Control
              ref={roleRef}
              as='select'
              name='role'
              defaultValue={user.role}
            >
              <option value='1'>Student</option>
              <option value='2'>Mentor</option>
              <option value='3'>Moderator</option>
              <option value='4'>Coordinator</option>
              <option value='5'>Admin</option>
            </Form.Control>
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
          <div className='mb-3'>
            <Button onClick={showPasswordToggle}>Assaign A New Password</Button>
            {showPassword && (
              <Form.Group controlId='formBasicPassword'>
                <Form.Label></Form.Label>
                <Form.Control
                  ref={passwordRef}
                  type='password'
                  placeholder='Password'
                />
              </Form.Group>
            )}
          </div>
          <Button variant='primary' type='submit' onClick={uploadHandler}>
            Submit
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </div>
  )
}

export default function Users({ users, updater }) {
  const [show, setShow] = useState(false)
  const [userDetails, setUserDetails] = useState({})
  const [modalType, setModalType] = useState(null)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div style={{ maxHeight: '350px', overflowY: 'scroll' }}>
      <Modal show={show} onHide={handleClose}>
        {modalType === 'delete' ? (
          <DeleteModal
            handleClose={handleClose}
            user={userDetails}
            updater={updater}
          />
        ) : (
          <EditModal
            handleClose={handleClose}
            user={userDetails}
            updater={updater}
          />
        )}
      </Modal>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Avatar</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
            <th>User From</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, ind) => (
            <tr key={ind}>
              <td>{ind + 1}</td>
              <td className=''>
                <Image
                  height='35'
                  width='35'
                  src={'/assets/image/avatar/' + user.avatar + '.png'}
                  roundedCircle
                />
              </td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.userName}</td>
              <td>{user.email}</td>
              <td>{roleToString(user.role)}</td>
              <td>{moment(user.createdAt).format('YYYY-MM-DD')}</td>
              <td>
                <span
                  onClick={() => {
                    setModalType('edit')
                    setUserDetails(user)
                    handleShow()
                  }}
                  className='px-1 mr-2'
                  style={styles}
                >
                  <FaEdit />
                </span>
                <span className='px-1 text-danger' style={styles}>
                  <FaTimes
                    onClick={() => {
                      setModalType('delete')
                      setUserDetails(user)
                      handleShow()
                    }}
                  />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}
