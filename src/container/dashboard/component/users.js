import axios from 'axios'
//import moment from 'moment'
import * as moment from 'dayjs'
import React, { useEffect, useState } from 'react'
import { Button, Image, Modal, Table } from 'react-bootstrap'
import { FaEdit, FaTimes } from 'react-icons/fa'
import {
  identityStatusToString,
  loginProviderToString,
  rolePermitted,
  roleToString
} from '../../../utils/canActivate'
import EditUser from './editUser'

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

export default function Users({ role, users, updater }) {
  const [show, setShow] = useState(false)
  const [userDetails, setUserDetails] = useState({})
  const [modalType, setModalType] = useState(null)
  const [courses, setCourses] = useState([])

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_SITE_URL + '/courses/')
      .then((res) => {
        setCourses(res.data)
      })
      .catch((e) => console.log(e))
  }, [])

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
          <EditUser
            role={role}
            user={userDetails}
            courses={courses}
            updater={updater}
            handleClose={handleClose}
          />
        )}
      </Modal>
      <Table striped bordered hover responsive size='sm'>
        <thead>
          <tr>
            <th>#</th>
            <th>Avatar</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
            <th>Login Provider</th>
            <th>Identity Status</th>
            <th>User From</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, ind) => (
            <tr
              key={ind}
              className={
                user.loginProvider === 1
                  ? user.identityStatus === 1
                    ? 'bg-primary text-white'
                    : 'bg-warning'
                  : ''
              }
            >
              <td>{ind + 1}</td>
              <td className=''>
                <Image
                  height='35'
                  width='35'
                  src={
                    user.avatar &&
                    user.avatar.includes('platform-lookaside.fbsbx.com')
                      ? user.avatar
                      : '/assets/image/avatar/' +
                        (user.avatar ? user.avatar : 'boy') +
                        '.png'
                  }
                  roundedCircle
                />
              </td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.userName}</td>
              <td>{user.email}</td>
              <td>{roleToString(user.role)}</td>
              <td>{loginProviderToString(user.loginProvider)}</td>
              <td>{identityStatusToString(user.identityStatus)}</td>
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
                {role >= rolePermitted.coordinator && (
                  <span className='px-1 text-danger' style={styles}>
                    <FaTimes
                      onClick={() => {
                        setModalType('delete')
                        setUserDetails(user)
                        handleShow()
                      }}
                    />
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}
