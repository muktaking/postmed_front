import React from 'react'
import { Image } from 'react-bootstrap'

export default function Promotional() {
  return (
    <div className='bg-warning text-white mb-3'>
      {/* <Container className='bg-secondary'> */}
      <div className='d-flex justify-content-center'>
        <Image
          src={
            // process.env.REACT_APP_SITE_URL + '/images/bootstrap/promotional.png'
            '/assets/image/promotional/1.png'
          }
          height='100'
        />
      </div>
      {/* </Container> */}
    </div>
  )
}
