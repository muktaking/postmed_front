import React from 'react'
import { Image } from 'react-bootstrap'

export default function Promotional() {
  return (
    <div className='bg-warning text-white'>
      {/* <Container className='bg-secondary'> */}
      <div className='d-flex justify-content-center'>
        <Image
          src={
            process.env.REACT_APP_SITE_URL + '/images/bootstrap/promotional.png'
          }
          fluid
        />
      </div>
      {/* </Container> */}
    </div>
  )
}
