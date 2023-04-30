import React from 'react'
import { Carousel, Image } from 'react-bootstrap'

export default function Promotional() {
  return (
    <div className='shadow bg-white px-2 pt-2 pb-3 mb-3'>
      {/* <Container className='bg-secondary'> */}
      <Carousel>
        {[1, 2, 3].map((img) => (
          <Carousel.Item>
            <div className='d-flex justify-content-center'>
              <Image
                src={
                  // process.env.REACT_APP_SITE_URL + '/images/bootstrap/promotional.png'
                  '/assets/image/promotional/' + img + '.png'
                }
                height='100'
                className='w-100'
              />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      {/* </Container> */}
    </div>
  )
}
