import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { Button, Form } from 'react-bootstrap'
import ReactJson from 'react-json-view'
import MultiSquareLoader from '../../components/customSpinner/multiSquare/multiSquareLoader'

export default function Refund({ paymentId, trxId, amount }) {
  const [loading, setLoading] = useState(false)
  const [refundData, setRefundData] = useState(null)
  const [refundRes, setRefundRes] = useState(null)
  const amountRef = useRef()
  const skuRef = useRef()
  const reasonRef = useRef()
  useEffect(() => {
    setLoading(true)
    axios
      .get(
        process.env.REACT_APP_SITE_URL + '/payment/bkash/refund/' + paymentId
      )
      .then(({ data }) => {
        setLoading(false)
        setRefundData(data)
      })
      .catch((error) => {
        setLoading(false)
        console.log(error)
      })
  }, [paymentId])

  const handleRefund = () => {
    setLoading(true)
    axios
      .post(
        process.env.REACT_APP_SITE_URL + '/payment/bkash/refund/' + paymentId,
        {
          paymentId,
          trxId,
          amount: amountRef.current.value,
          sku: skuRef.current.value,
          reason: reasonRef.current.value
        }
      )
      .then(({ data }) => {
        setLoading(false)
        setRefundRes(data)
      })
      .catch(({ response }) => {
        setLoading(false)
        setRefundRes(response?.data.message)
      })
  }

  return (
    <div>
      {loading && <MultiSquareLoader />}
      {refundData && <ReactJson src={refundData} name={'OldData'} />}

      {refundRes && <ReactJson src={refundRes} name={'RecentData'} />}
      <Form>
        <Form.Group controlId='formAmount'>
          <Form.Label>Amount</Form.Label>
          <Form.Control
            type='text'
            placeholder='500'
            ref={amountRef}
            defaultValue={amount}
          />
        </Form.Group>
        <Form.Group controlId='formSku'>
          <Form.Label>Sku</Form.Label>
          <Form.Control
            type='text'
            placeholder='Basic MD Course'
            ref={skuRef}
          />
        </Form.Group>
        <Form.Group controlId='formReason'>
          <Form.Label>Reason</Form.Label>
          <Form.Control
            type='text'
            placeholder='Can not enroll'
            ref={reasonRef}
          />
        </Form.Group>
        <Button variant='primary' onClick={handleRefund}>
          Submit
        </Button>
      </Form>
    </div>
  )
}
