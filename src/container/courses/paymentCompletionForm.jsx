import React, { useState } from 'react'
import { Alert, Button, Modal, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ContactConfig } from '../../config/contact.config'
// import { grantTokenRequestPromise } from '../payment/pgw.bkash'
import axios from 'axios'
import CircleLoader from '../../components/customSpinner/circleLoader/circleLoader'
import { PaymentGateway, ProductType } from '../../utils/paymentClass'

export default function PaymentCompletionForm({
  showPaymentModalForm,
  setShowPaymentModalForm,
  course
}) {
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState(null)
  const handleClose = () => setShowPaymentModalForm(false)

  const paymentHandler = () => {
    setLoading(true)
    setErrorMsg(null)
    console.log(course)
    const data = {
      paymentGateway: PaymentGateway.Bkash,
      productType: ProductType.Course,
      productId: course.id,
      ref: 'no-ref'
    }

    axios
      .post(process.env.REACT_APP_SITE_URL + '/payment/bkash/create', data)
      .then(({ data }) => {
        setLoading(false)
        window.location.replace(data.bkashURL)
      })
      .catch((error) => {
        setLoading(false)
        setErrorMsg(error.message)
        console.log(error)
      })
  }

  return (
    <div className='paymentCompletionForm'>
      {loading && <CircleLoader />}
      <Modal show={showPaymentModalForm} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Payment Required</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Thanks for choosing this course. For payment we encourage you to
            make payment with Bkash. You will be auto enrolled after successful
            payment.
          </p>
          <div>
            <p className='d-flex justify-content-center'>
              <Button
                variant='outline-danger'
                className='d-flex justify-content-around align-items-center'
                onClick={paymentHandler}
              >
                <span className='mr-4'>Pay With Bkash</span>
                <Image src='/assets/image/payment/bkash-logo.png' width='35' />
              </Button>
            </p>
            {errorMsg && (
              <Alert variant='danger' className='text-center'>
                {errorMsg}
              </Alert>
            )}
            <Alert variant='info' className='text-center'>
              For other options go to <Link to='/payment'>Payment page</Link>
              <br />
              For any problems or refund, go to{' '}
              <Link to='/help'>Help section</Link> <br /> Contact us with{' '}
              <span>{ContactConfig.mobile}</span>
              <br /> Email us <span>{ContactConfig.email}</span>
            </Alert>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Go Back
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
