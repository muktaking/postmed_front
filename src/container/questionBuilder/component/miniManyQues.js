import React, { useState } from 'react'
import { Badge, Button, Modal, OverlayTrigger } from 'react-bootstrap'
import EditQuestion from '../edit'
import { PopoverWrapper } from './miniques'

export default function Miniques({ index, question, viewHandler }) {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Question</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditQuestion id={question.id} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <p style={{ fontSize: '1.1rem' }}>
        {index + 1 + '. ' + question.qText + ' -->  '}
        <Badge variant='secondary'>{question.qType + ' '}</Badge>
        <Button
          variant='primary'
          size='sm'
          className='mx-2'
          onClick={handleShow}
        >
          {' '}
          Edit{' '}
        </Button>

        <OverlayTrigger
          trigger='click'
          placement='bottom'
          overlay={<PopoverWrapper questionId={question.id} />}
        >
          <Button variant='danger' size='sm' className='mr-2'>
            Delete
          </Button>
        </OverlayTrigger>
      </p>
    </div>
  )
}
