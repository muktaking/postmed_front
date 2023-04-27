import React, { useRef } from 'react'
import { Button, Card, Carousel, Form, ListGroup, Modal } from 'react-bootstrap'
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

                    <Form.Group controlId='formBasicEmail'>
                      <Form.Label>Please input any Reference</Form.Label>
                      <Form.Control
                        ref={refRef}
                        type='text'
                        placeholder='e.g. CUPONCODE360'
                      />
                    </Form.Group>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Carousel.Item>
            <Carousel.Item>
              <Card style={{ height: '30rem' }}>
                <Card.Header>Step Three</Card.Header>
                <Card.Body>
                  <Card.Text className='text-center'>
                    <Button
                      className='rounded-circle'
                      style={{
                        width: '150px',
                        height: '150px',
                        fontSize: '1.6rem'
                      }}
                      variant='primary'
                      onClick={() => {
                        const paymentRecord = {
                          senderMobile: senderMobileRef.current.value,
                          txId: txIdRef.current.value,
                          paymentGateway: paymentGatewayref.current.value,
                          ref: refRef.current.value
                        }
                        enrollmentHandler(course, paymentRecord)
                        handleClose()
                      }}
                    >
                      Confirm
                    </Button>
                  </Card.Text>
                  <Card.Text className='lead text-center'>
                    Tab to confirm.
                  </Card.Text>
                  <Card.Text>
                    Please wait until admin approves your payment. For any
                    problems, go to <Link to='/help'>Help section.</Link>. Or
                    contact us with: <span>{ContactConfig.mobile}</span>
                    <br />
                    Email: <span>{ContactConfig.email}</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Carousel.Item>
          </Carousel>
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
