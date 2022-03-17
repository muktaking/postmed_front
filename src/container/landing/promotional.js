import React from 'react'
import { Image } from 'react-bootstrap'

export default function Promotional() {
  return (
    <div className='bg-warning text-white'>
      {/* <Container className='bg-secondary'> */}
      <div className='d-flex justify-content-center'>
        <Image
          src='https://via.placeholder.com/1200x55.png?text=Visit+WhoIsHostingThis.com+Buyers+Guide'
          fluid
        />
      </div>
      {/* </Container> */}
    </div>
  )
}
