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
      <h4>Payment FAQ</h4>

      <h5>Q. Which payment gateway can i use?</h5>
      <p>
        Answer: Currently, bKash payment system is only avaiable for merchant
        payment.
      </p>
      <p className='text-muted'>
        You can also send money to Personal Rocket Account
      </p>
      <h5>Q. I have paid for the course. What i have to do now?</h5>
      <p>
        Answer: After successful payment with bKash, you will be automatically
        enrolled. Go to <Link to='/exams'>Exams</Link>
      </p>
      <p className='text-muted'>
        For Personal Rocket Account payment, you have to message us and we will
        enroll you for the course.
      </p>
      <h5>Q. Can i get a refund? What is the refund policiy?</h5>
      <p>
        Answer: Yes you can avail a refund. Please read our{' '}
        <Link to='/terms'>return policy</Link>. It may take seven working hours
        to refund if you worth.
      </p>
      <h5>Q. How can i Pay with Rocket?</h5>
      <p className='mt-1'>
        Answer: 1) At first scan the below QR code with you Rocket app or send
        money to 01737313915 (Personal).
      </p>
      <Row>
        <Col lg={4}>
          <PaymentCard
            pTitle='Payment With Rocket'
            pText='Just scan the QR code with your Rocket App and send money easily.'
            pImg='/assets/image/payment/rocket_payment.jpg'
          />
        </Col>
      </Row>
      <p className='mt-1'>
        2) Enter a reference about the transaction.* (Enter Your User ID)
      </p>
      <Alert variant='warning'>
        You will Get Your user id at Topbar with golden color text or your{' '}
        <Link to='/profile'>Profile</Link> marked with golden background at the
        top section
      </Alert>
      <p className='mt-2'>3) Now Message at 01737313915</p>
      <Alert variant='info'>
        Write - Your name &lt;Space&gt; Your User ID / Your Email &lt;Space&gt;
        The bKash Number (From which you send money)
      </Alert>
      <Alert variant='warning'>
        You will Get Your user id at Topbar with golden color text or your{' '}
        <Link to='/profile'>Profile</Link> marked with golden background at the
        top section
      </Alert>
      <p>4) Or message at Facebook messenger</p>
      <Alert variant='primary'>
        Write - Your name &lt;Space&gt; Your User ID / Your Email &lt;Space&gt;
        The bKash Number (From you send money)
      </Alert>
      <Alert variant='warning'>
        You will Get Your user id at Topbar with golden color text or your{' '}
        <Link to='/profile'>Profile</Link> marked with golden background at the
        top section
      </Alert>
      <p>
        5) You will be informed through message or mobile call shortly (may take
        maximum 8 hours.)
      </p>
      <p>
        To get more help, go to <Link to='/help'>Help Section</Link>
      </p>
    </div>
  )
}
