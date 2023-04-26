import React from 'react'
import { Button, Form, ListGroup, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ContactConfig } from '../../config/contact.config'

export default function PaymentCompletionForm({
  showPaymentModalForm,
  setShowPaymentModalForm,
  course,
  enrollmentHandler
}) {
  const handleClose = () => setShowPaymentModalForm(false)

  return (
    <div>
      <Modal show={showPaymentModalForm} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Payment Required</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Thanks for enrolling this course. You are few steps apart.</p>

          <ListGroup horizontal className='mb-2'>
            <ListGroup.Item>Step One</ListGroup.Item>
            <ListGroup.Item>
              Please make Payment first with Bkash Personal (01737313915) |
              Rocket Personal aacount (01737313915). For detail procedure go to{' '}
              <Link to='/payment'>Payment page</Link>{' '}
            </ListGroup.Item>
          </ListGroup>

          <ListGroup horizontal className='mb-2'>
            <ListGroup.Item>Step Two</ListGroup.Item>
            <ListGroup.Item>
              <Form.Group controlId='formBasicEmail'>
                <Form.Label>
                  After Payment, please fill the Bkash / Rocket Number (From
                  which payemnt given) or TrxId (Transaction Id){' '}
                </Form.Label>
                <Form.Control type='text' placeholder='e.g. 017000111222' />
              </Form.Group>
            </ListGroup.Item>
          </ListGroup>
          <p>
            Now, click the 'Confirm' button to complete this course enrollment.
            Please wait until admin approves your payment. For any problems, go
            to <Link to='/help'>Help section.</Link>. Or contact us with{' '}
            <span>{ContactConfig.mobile}</span>
            <br />
            <span>{ContactConfig.email}</span>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button
            variant='primary'
            onClick={() => {
              enrollmentHandler(course.id)
              handleClose()
            }}
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
