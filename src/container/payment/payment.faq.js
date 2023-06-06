import React from 'react'
import { Col, Row, Card, Alert } from 'react-bootstrap'
import { LazyLoadComponent } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom'

function PaymentCard({ width = '18rem', pTitle, pText, pImg }) {
  return (
    <Card className='mt-2 mr-2' style={{ width: width }}>
      <Card.Body>
        <Card.Title>{pTitle}</Card.Title>
        <Card.Text>{pText}</Card.Text>
      </Card.Body>
      <LazyLoadComponent>
        <Card.Img variant='top' src={pImg} />
      </LazyLoadComponent>
    </Card>
  )
}

export default function Payment() {
  return (
    <div>
      <h4>Payment Procedure</h4>
      <p className='text-muted'>
        (To get more help on payment method go to{' '}
        <Link to='/help#payment'>Payment Help Section</Link>)
      </p>
      <h5>A. Payment Options</h5>
      <p>First Pay with one of available payment options</p>
      <Row>
        <Col lg={4}>
          <PaymentCard
            pTitle='Payment With bKash'
            pText='Just scan the QR code with your bKash App and send money easily.'
            pImg='/assets/image/payment/bkash_payment.png'
          />
        </Col>
        <Col lg={4}>
          <PaymentCard
            pTitle='Payment With Rocket'
            pText='Just scan the QR code with your Rocket App and send money easily.'
            pImg='/assets/image/payment/rocket_payment.jpg'
          />
        </Col>
        <Col lg={4}>
          <PaymentCard
            pTitle='Payment With Nagad'
            pText='Sorry, yet not Available. Pay with either bKash or Rocket'
            pImg='/assets/image/payment/bkash_payment.png'
          />
        </Col>
      </Row>
      <p className='mt-1'>
        Enter a reference about the transaction.* (Enter Your User ID)
      </p>
      <Alert variant='warning'>
        You will Get Your user id at Topbar with golden color text or your{' '}
        <Link to='/profile'>Profile</Link> marked with golden background at the
        top section
      </Alert>
      <h5 className='mt-3'>B. Send SMS Or Email</h5>
      <p className='mt-2'>Now Message at 01737313915</p>
      <Alert variant='info'>
        Write - Your name &lt;Space&gt; Your User ID / Your Email &lt;Space&gt;
        The bKash Number (From which you send money)
      </Alert>
      <Alert variant='warning'>
        You will Get Your user id at Topbar with golden color text or your{' '}
        <Link to='/profile'>Profile</Link> marked with golden background at the
        top section
      </Alert>
      <p>Or message at Facebook messenger</p>
      <Alert variant='primary'>
        Write - Your name &lt;Space&gt; Your User ID / Your Email &lt;Space&gt;
        The bKash Number (From you send money)
      </Alert>
      <Alert variant='warning'>
        You will Get Your user id at Topbar with golden color text or your{' '}
        <Link to='/profile'>Profile</Link> marked with golden background at the
        top section
      </Alert>
      <h5>C. Wait For Response</h5>
      <p>
        You will be informed through message or mobile call shortly (may take
        maximum 8 hours.)
      </p>
      <p>
        To get more help on payment method go to{' '}
        <Link to='/help#payment'>Payment Help Section</Link>
      </p>
    </div>
  )
}
