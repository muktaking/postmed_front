import axios from 'axios'
import React, { useState } from 'react'
import { Button, Modal, Toast } from 'react-bootstrap'

export default function DeleteExam({ title, delExamId, delExamHandleClose }) {
  const [res, setRes] = useState(null)
  return (
    <div>
      <Modal show={delExamId} onHide={delExamHandleClose} size='xl'>
        <Modal.Header closeButton>
          <Modal.Title>Delete "{title}"</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are You sure to delete "{title}"</Modal.Body>
        <Modal.Footer>
          <Button variant='success' onClick={delExamHandleClose}>
            Close
          </Button>
          <Button
            variant='danger'
            onClick={() => {
              axios({
                baseURL: process.env.REACT_APP_SITE_URL,
                url: '/exams/' + delExamId,
                method: 'delete'
              })
                .then((response) => {
                  setRes('Successfully Deleted')
                })
                .catch((error) => {
                  setRes('Can not delete the exam' + JSON.stringify(error))
                })
              //delExamHandleClose()
            }}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      <Toast
        show={res}
        onClose={() => {
          setRes(null)
          delExamHandleClose()
        }}
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          zIndex: '10000'
        }}
      >
        <Toast.Header>
          <strong className='mr-auto'>Response</strong>
        </Toast.Header>
        <Toast.Body>{res}</Toast.Body>
      </Toast>
    </div>
  )
}
