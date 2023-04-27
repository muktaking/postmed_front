import React from 'react'
import { Alert, Button, ListGroup, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ContactConfig } from '../../config/contact.config'
import { PaymentGateway } from '../../utils/paymentClass'

export default function PaymentCompletionForm({
  showPaymentModalForm,
  setShowPaymentModalForm,
  course,
  enrollmentHandler
}) {
  const refRef = useRef()
  const txIdRef = useRef()
  const senderMobileRef = useRef()
  const paymentGatewayref = useRef()
  const handleClose = () => setShowPaymentModalForm(false)

  return (
    <div className='paymentCompletionForm'>
      <Modal show={showPaymentModalForm} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Payment Required</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Thanks for enrolling this course. You are few steps apart.</p>
          <Carousel interval={null}>
            <Carousel.Item>
              <Card style={{ height: '30rem' }}>
                <Card.Header>Step One</Card.Header>
                <Card.Body>
                  <Card.Text>
                    Please make Payment first with Bkash Personal (01737313915)
                    | Rocket Personal aacount (01737313915). For detail
                    procedure go to <Link to='/payment'>Payment page</Link>{' '}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Carousel.Item>
            <Carousel.Item>
              <Card style={{ height: '30rem' }}>
                <Card.Header>Step Two</Card.Header>
                <Card.Body>
                  <Card.Text>
                    <Form.Group controlId='formBasicEmail'>
                      <Form.Label>
                        Please input the Bkash / Rocket Number (From which
                        payement given) or TrxId (Transaction Id)
                      </Form.Label>
                      <Form.Control
                        ref={senderMobileRef}
                        type='text'
                        placeholder='e.g. 017000111222'
                      />
                    </Form.Group>
                    <Form.Group controlId='formBasicEmail'>
                      <Form.Label>
                        Please input TrxId (Transaction Id) (Optional)
                      </Form.Label>
                      <Form.Control
                        ref={txIdRef}
                        type='text'
                        placeholder='e.g. 0XABD567UII'
                      />
                    </Form.Group>
                    <Form.Group controlId='formPaymentGateway'>
                      <Form.Label>State</Form.Label>
                      <Form.Control
                        as='select'
                        defaultValue='0'
                        ref={paymentGatewayref}
                      >
                        {Object.keys(PaymentGateway)
                          .slice(0, 2)
                          .map((key) => (
                            <option value={PaymentGateway[key]}>{key}</option>
                          ))}
                      </Form.Control>
                    </Form.Group>
          <ListGroup className='mb-2'>
            <ListGroup.Item>
              Step 1. Please make Payment first to Personal Bkash (01737313915)
              | Rocket account (01737313915). For detail procedure go to{' '}
              <Link to='/payment'>Payment page</Link>{' '}
            </ListGroup.Item>
            <ListGroup.Item>
              <p className='mt-2'>Step 2. Now Message at 01737313915</p>
              <Alert variant='info'>
                Write - Your name &lt;Space&gt; Your User ID / Your Email
                &lt;Space&gt; The bKash Number (From which you send money)
              </Alert>
              <Alert variant='warning'>
                You will Get Your user id at Topbar with golden color text or
                your <Link to='/profile'>Profile</Link> marked with golden
                background at the top section
              </Alert>
            </ListGroup.Item>
          </ListGroup>
          <p>
            Now, Click the 'Confirm' button to complete this course enrollment.
            Please wait until admin approves your payment. For any problems, go
            to <Link to='/help'>Help section.</Link>. Or contact us with{' '}
            <span>{ContactConfig.mobile}</span>
            <br />
            <span>{ContactConfig.email}</span>
          </p>
          <div className='d-flex justify-content-center mt-2'>
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
