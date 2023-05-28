import React from 'react'
import { useQuery } from '../../utils/queryRouter'

export default function Payment() {
  let query = useQuery()
  const paymentID = query.get('paymentID')
  const status = query.get('status')

  return (
    <div>
      <h4>Payment Procedure</h4>
      <p className={status === 'success' ? 'text-success' : 'text-danger'}>
        Payment id: {paymentID}
      </p>
    </div>
  )
}
