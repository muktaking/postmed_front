import React from 'react'
import { Link } from 'react-router-dom'

const cardHeader = ({ heading, color, value, id, courseId }) => (
  <div className='text-right text-secondary'>
    <h5>{heading}</h5>
    <p className={'lead text-' + color}>
      {courseId ? (
        <Link to={'exams/' + id + '_' + courseId}> {value} </Link>
      ) : (
        value
      )}
    </p>
  </div>
)

export default cardHeader
