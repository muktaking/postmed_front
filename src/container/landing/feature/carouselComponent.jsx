import React from 'react'
import { Carousel } from 'react-bootstrap'
import MiniBlock from '../miniBlock/miniBlock'
import { FormattedMessage } from 'react-intl'

export default function CarouselComponent({ items }) {
  return (
    <div className='mox-custom-carousel'>
      <h3 className='heading text-center'>
        <FormattedMessage id='features' defaultMessage='Features' />
      </h3>
      <div className='heading-underline'></div>
      <Carousel>
        {items.faIcons.map((value, index) => (
          <Carousel.Item className='text-center mb-4 px-1'>
            <MiniBlock
              key={value + index}
              icon={value}
              heading={items.heading[index]}
              para={items.para[index]}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}
