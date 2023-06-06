import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useQuery } from '../../utils/queryRouter'
import { Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import MultiSquareLoader from '../../components/customSpinner/multiSquare/multiSquareLoader'

export default function Payment() {
  const [loading, setLoading] = useState(false)
  const [executeRes, setExecuteRes] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)
  let query = useQuery()
  const paymentID = query.get('paymentID')
  const status = query.get('status')

  useEffect(() => {
    if (status === 'success') {
      setLoading(true)
      axios
        .post(
          process.env.REACT_APP_SITE_URL + '/payment/bkash/execute/' + paymentID
        )
        .then(({ data }) => {
          setLoading(false)
          setExecuteRes(data)
        })
        .catch(({ response }) => {
          setLoading(false)
          setErrorMsg(
            'Error(' + response?.status + '): ' + response?.data.message
          )
        })
    } else {
      setLoading(true)
      axios
        .post(
          process.env.REACT_APP_SITE_URL +
            '/payment/bkash/failure/' +
            paymentID,
          {
            paymentId: paymentID,
            status: status
          }
        )
        .then(({ data }) => {
          setLoading(false)
          setExecuteRes(data)
        })
        .catch(({ response }) => {
          setLoading(false)
          setErrorMsg(
            'Error(' + response?.status + '): ' + response?.data.message
          )
        })
    }
  }, [paymentID, status])

  let routes = (
    <>
      <br />
      <span> Please try to </span>
      <Link to={'/courses/' + executeRes?.productId}>Enroll again.</Link>
      <br />
      <Link to='/help'>Help</Link>
    </>
  )

  if (executeRes?.statusCode === '0' || executeRes?.statusCode === '1') {
    routes = (
      <>
        <br />
        <span> Go to </span>
        <br />
        <Link to='/dashboard'>Dashboard</Link>
        <br />
        <Link to={'/exams/courses/' + executeRes?.productId}>Exams</Link>
        <br />
        <Link to='/courses'>All Courses</Link>
        <br />
        <Link to='/help'>Help</Link>
      </>
    )
  }

  return (
    <div>
      <h4>Payment Status</h4>
      {status === 'success' && loading && (
        <div className='text-center'>
          <p className={'text-success'}>
            Please wait. Your payment process is ongoing ....
          </p>
          <MultiSquareLoader />
        </div>
      )}
      {executeRes && (
        <div className='text-center'>
          {executeRes && (
            <>
              <Alert
                variant={
                  executeRes.statusCode === '0' || executeRes.statusCode === '1'
                    ? 'success'
                    : 'danger'
                }
                className='lead'
              >
                {executeRes.statusMessage}
              </Alert>
              <span>Invoice No. {executeRes?.merchantInvoice}</span>
              <br />
              <span>Save this invoice number for future inqury.</span>
              <div>{routes}</div>
            </>
          )}
        </div>
      )}
      {status !== 'success' && loading && (
        <Alert variant='danger' className='text-center lead'>
          Sorry! Payment Failure. Try again.
        </Alert>
      )}
      {errorMsg && (
        <Alert variant='danger' className='text-center lead'>
          {errorMsg}
        </Alert>
      )}
    </div>
  )
}
