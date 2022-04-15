import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import ExamBuilder from './examBuilder'

export default function EditExam({ editExamId, editExamHandleClose }) {
  const [exam, setExam] = useState(null)
  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_SITE_URL}/exams/${editExamId}`)
      .then((res) => {
        setExam(res.data)
      })
      .catch((e) => console.log(e))
  }, [])
  return (
    <div>
      <Modal show={editExamId} onHide={editExamHandleClose} size='xl'>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ExamBuilder editExam={exam} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={editExamHandleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={editExamHandleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
