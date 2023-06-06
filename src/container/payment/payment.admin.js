import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ReactJson from 'react-json-view'
import { Button, Modal, Table } from 'react-bootstrap'

export default function PaymentAdmin() {
  const [payments, setPayments] = useState(null)
  const [show, setShow] = useState(false)
  const [paymentIdDetail, setPaymentIdDetail] = useState(null)
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_SITE_URL + '/payment/')
      .then(({ data }) => {
        setPayments(data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const showPaymentIdDetails = (paymentId) => {
    handleShow()
    axios
      .post(
        process.env.REACT_APP_SITE_URL + '/payment/bkash/status/' + paymentId
      )
      .then(({ data }) => {
        setPaymentIdDetail(data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {paymentIdDetail && <ReactJson src={paymentIdDetail} name={null} />}
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>PaymentId</th>
            <th>User Id</th>
            <th>AgreementId</th>
            <th>CustomerMsisdn</th>
            <th>Product Type</th>
            <th>ProductId</th>
            <th>TxId</th>
            <th>Amount</th>
            <th>Ref</th>
            <th>PaymentGateway</th>
            <th>TransactionAt</th>
            <th>PaymentCreateTime</th>
            <th>PaymentExecuteTime</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {payments?.map((payment, index) => {
            return (
              <tr>
                <td
                  onClick={() => {
                    showPaymentIdDetails(payment.id)
                  }}
                >
                  {index + 1}
                </td>
                {Object.keys(payment).map((key) => (
                  <td>{payment[key]}</td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  )
}
