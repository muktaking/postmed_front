import axios from 'axios'
import React, { useState } from 'react'
import { Button, Form, Modal, Toast } from 'react-bootstrap'

export default function UploadUsers({ updater }) {
  const [show, setShow] = useState(false)
  const [loading, setLoading] = useState(false)
  const [res, setRes] = useState(null)
  const [file, setFile] = useState(null)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handleChange = (e) => {
    const { files } = e.target
    setFile(files ? files[0] : undefined)
  }

  const uploadHandler = (e) => {
    e.preventDefault()

    const data = new FormData()
    data.append('file', file)

    setLoading(true)
    axios
      .post(process.env.REACT_APP_SITE_URL + '/users/files', data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      .then((response) => {
        setRes(response.data.message)
        updater()
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setRes(error.message)
        setLoading(false)
      })
  }
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Upload Csv File</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Toast
            show={res}
            onClose={() => {
              setRes(null)
            }}
            style={{ position: 'absolute', top: '-80px', right: '50px' }}
          >
            <Toast.Header>
              <strong className='mr-auto'>Server Response</strong>
            </Toast.Header>
            <Toast.Body>{res}</Toast.Body>
          </Toast>
          <Form>
            <input
              type='file'
              id='myfile'
              name='myfile'
              onChange={handleChange}
            />
            <Button onClick={uploadHandler}>Submit</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Button onClick={handleShow}>Upload Users</Button>
    </div>
  )
}
