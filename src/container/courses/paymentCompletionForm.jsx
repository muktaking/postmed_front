import React from 'react'
import { Alert, Button, ListGroup, Modal } from 'react-bootstrap'
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
    <div className='paymentCompletionForm'>
      <Modal show={showPaymentModalForm} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Payment Required</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Thanks for enrolling this course. You are few steps apart.</p>
          <p>
            Step 1. Please make Payment first to Personal Bkash (01737313915) |
            Rocket account (01737313915). For detail procedure go to{' '}
            <Link to='/payment'>Payment page</Link>{' '}
          </p>
          <div>
            <p>Step 2. Message at 01737313915</p>
            <Alert variant='info'>
              Write - Your name &lt;Space&gt; Your User ID / Your Email
              &lt;Space&gt; The bKash Number (From which you send money)
            </Alert>
          </div>
          <p>
            Now, Click the 'Confirm' button to complete this course enrollment.
          </p>
          <p>
            Please wait until admin approves your payment. For any problems, go
            to <Link to='/help'>Help section.</Link>. Or contact us with{' '}
            <span>{ContactConfig.mobile}</span>
            <br />
            or email us <span>{ContactConfig.email}</span>
          </p>
          <div className='d-flex justify-content-center mt-1'>
            <Button
              variant='primary'
              onClick={() => {
                enrollmentHandler(course.id)
                handleClose()
              }}
              size='lg'
            >
              Confirm
            </Button>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
