import React from 'react'
import { Badge } from 'react-bootstrap'

export default function ExamCountDownClock({
  hours,
  minutes,
  seconds,
  completed
}) {
  if (completed) {
    // Render a completed state
    return <span className='text-danger'>Your Time is Finished</span>
  } else {
    // Render a countdown
    return (
      <span>
        {[`${hours} H`, `${minutes} M`, `${seconds} S`].map((val, ind) => (
          <>
            <Badge
              variant={(hours < 1) & (minutes < 5) ? 'danger' : 'success'}
              style={{ fontSize: '1rem' }}
            >
              {val}
            </Badge>
            {ind < 2 && (
              <Badge variant='light' style={{ fontSize: '.8rem' }}>
                :
              </Badge>
            )}
          </>
        ))}
      </span>
    )
  }
}
