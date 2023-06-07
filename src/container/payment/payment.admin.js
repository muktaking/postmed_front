import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ReactJson from 'react-json-view'
import { Button, Modal, Table } from 'react-bootstrap'
import Pagination from 'react-js-pagination'
import Refund from './refund'
import { paginate } from '../../utils/paginate'

export default function PaymentAdmin() {
  const [payments, setPayments] = useState(null)
  const [refundForm, setRefundForm] = useState(null)
  const [show, setShow] = useState(false)
  const [paymentIdDetail, setPaymentIdDetail] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 10

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

  const handleClose = () => {
    setShow(false)
    setPaymentIdDetail(null)
    setRefundForm(null)
  }
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

  const handleRefund = (paymentId, trxId, amount) => {
    handleShow()
    setRefundForm({ paymentId, trxId, amount })
  }

  const paginatedPayments = paginate(payments, currentPage, pageSize)

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {paymentIdDetail && <ReactJson src={paymentIdDetail} name={null} />}
          {refundForm && (
            <Refund
              paymentId={refundForm?.paymentId}
              trxId={refundForm?.trxId}
              amount={refundForm?.amount}
            />
          )}
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
            <th>InvoiceId</th>
            <th>TrxId</th>
            <th>Amount</th>
            <th>Ref</th>
            <th>PaymentGateway</th>
            <th>TransactionAt</th>
            <th>PaymentCreateTime</th>
            <th>PaymentExecuteTime</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedPayments?.map((payment, index) => {
            return (
              <tr>
                <td
                  onClick={() => {
                    showPaymentIdDetails(payment.id)
                  }}
                >
                  {index + 1 + (currentPage - 1) * pageSize}
                </td>
                {Object.keys(payment).map((key) => (
                  <td>{payment[key]}</td>
                ))}
                <td>
                  <Button
                    disabled={!payment.trxId}
                    onClick={() => {
                      handleRefund(
                        payment.id,
                        payment.trxId,
                        payment.paymentAmount
                      )
                    }}
                  >
                    Make Refund
                  </Button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
      <div className='d-flex justify-content-center mt-3'>
        <Pagination
          activePage={currentPage}
          itemsCountPerPage={pageSize}
          totalItemsCount={payments ? payments.length : null}
          pageRangeDisplayed={2}
          onChange={(page) => {
            setCurrentPage(page)
          }}
          itemClass='page-item'
          linkClass='page-link'
          prevPageText='Previous'
          nextPageText='Next'
        />
      </div>
    </div>
  )
}
