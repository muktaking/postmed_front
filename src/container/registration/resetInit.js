import axios from 'axios'
import React, { useState } from 'react'
import { Alert, Button, FormControl, InputGroup, Modal } from 'react-bootstrap'
import { MdEmail } from 'react-icons/md'
import validator from 'validator'

export default function Reset({ show, handleClose }) {
  const [email, setEmail] = useState(null)
  const [formErrors, setFormErrors] = useState('')

  const changeHandler = (e) => {
    const value = e.target.value
    let msg = ''
    msg = validator.isEmail(value) ? '' : 'Please provide valid email'
    setEmail(value)
    setFormErrors(msg)
  }

  const submitHandler = () => {
    if (!email) {
      setFormErrors('Email can not be empty')
      return
    } else if (formErrors) {
      return
    } else {
      axios.post(process.env.REACT_APP_SITE_URL + '/auth/reset', { email })
      setFormErrors('Please check your email, also in spam section.')
    }
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Reset</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className='mb-3'>
            <InputGroup.Prepend>
              <InputGroup.Text id='basic-addon1'>
                <MdEmail />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder='Email'
              name='email'
              aria-label='Email'
              aria-describedby='basic-addon1'
              onChange={changeHandler}
            />
          </InputGroup>
          {formErrors !== '' && <Alert variant='danger'> {formErrors} </Alert>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={submitHandler}>
            Request for Passwod Reset
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
