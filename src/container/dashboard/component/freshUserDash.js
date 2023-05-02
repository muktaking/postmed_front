import React from 'react'
import { Button, Jumbotron } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function FreshUserDash() {
  return (
    <div>
      <Jumbotron>
        <h1>Welcome!</h1>
        <p>
          We warmly welcome you to our MediOnExam Dashboard. It seems you are
          newbee. Do not worry, i will guide you. It is very simple. At first
          step, Please enroll for a course. Then start taking part in exams
          under the courses. You can also take part in free exams of other
          courses. Please click the below button to go to course's page.
        </p>
        <Link to='/courses'>
          <Button>Courses</Button>
        </Link>
        <p>
          That's all. Hope you will be benefited from this learning platform.
        </p>
        <p>
          For help, please go to{' '}
          <Link to='/help' className=''>
            Help section
          </Link>
        </p>
      </Jumbotron>
    </div>
  )
}
