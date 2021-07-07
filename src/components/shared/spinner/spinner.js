import React from 'react'
import { Spinner } from 'react-bootstrap'

const contentCenter = {
  //styling to display server response in middle of screen
  position: 'fixed',
  top: '45vh',
  left: '50%',
  zIndex: '10000000000'
}

export default function SpinnerCustom() {
  return (
    <Spinner
      animation='grow'
      role='status'
      variant='dark'
      style={contentCenter}
    ></Spinner>
  )
}
