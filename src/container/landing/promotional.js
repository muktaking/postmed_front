import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Carousel, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Promotional() {
  const [images, setImages] = useState([])
  useEffect(() => {
    Axios.get(process.env.REACT_APP_SITE_URL + '/promotional')
      .then((res) => {
        setImages(res.data)
      })
      .catch((e) => console.log(e))
  }, [])
  return (
    <div className={images.length > 0 && 'shadow bg-white px-2 pt-2 pb-3 mb-3'}>
      {/* <Container className='bg-secondary'> */}
      <Carousel>
        {images.map((img) => (
          <Carousel.Item key={img.title}>
            <div className='d-flex justify-content-center'>
              <Link to={img.link}>
                <Image
                  src={process.env.REACT_APP_SITE_URL + img.imageUrl}
                  fluid
                  alt={img.title}
                />
              </Link>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      {/* </Container> */}
    </div>
  )
}
