import React from 'react'
import { Button, Jumbotron } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function FreshUserDash() {
  return (
    <div>
      <Jumbotron>
        <h1>Welcome!</h1>
        <p>
          We are warmly welcome you. To get your desired success, you should use
          the most of this application. For this, please enroll for a course and
          then take exam regularly.
        </p>
        <hr />
        <Link to='/courses'>
          <Button>Courses</Button>
        </Link>
      </Jumbotron>
    </div>
  )
}
