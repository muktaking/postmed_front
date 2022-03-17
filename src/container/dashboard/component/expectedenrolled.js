import axios from 'axios'
import React, { useState } from 'react'
import { Button, Form, ListGroup } from 'react-bootstrap'

export default function Expectedenrolled({ expectedEnrolled, updater }) {
  const [ids, setIds] = useState([])

  function handleChange(e) {
    if (e.target.checked) {
      if (!ids.includes(+e.target.name)) {
        setIds([...ids, +e.target.name])
      }
    } else {
      setIds(ids.filter((id) => id !== +e.target.name))
    }
  }
  function submitHandler(courseId, deny = false) {
    axios
      .patch(process.env.REACT_APP_SITE_URL + '/courses/enrolled', {
        id: courseId,
        stuIds: ids,
        deny
      })
      .then((response) => {
        updater()
        setIds([])
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className='mt-5 px-3'>
      <h3>Enrollment List</h3>
      {!expectedEnrolled ? (
        <p className='text-danger'> No enrollment</p>
      ) : (
        expectedEnrolled.map((course) => (
          <div className='mt-3'>
            <h4 className='bg-warning text-white p-2 text-center'>
              {course.title}
            </h4>
            <ListGroup as='ul'>
              {course.stuInfos.length < 1 ? (
                <p className='text-danger'>
                  No more pending students to enroll
                </p>
              ) : (
                course.stuInfos.map((stuInfo) => (
                  <ListGroup.Item key={stuInfo.firstName + stuInfo.id} as='li'>
                    <div className='d-flex'>
                      <Form.Check
                        type='checkbox'
                        label=''
                        name={stuInfo.id}
                        onChange={handleChange}
                        className='border-right mr-2 pr-2'
                      />
                      <p>
                        <span>{`${stuInfo.firstName} ${stuInfo.lastName}`}</span>
                        <span className='text-danger'>{` id: < ${stuInfo.id} > `}</span>
                        <span className='text-danger'>{` email: < ${stuInfo.email} > `}</span>
                        <span>{`from ${stuInfo.institution} choose ${stuInfo.faculty} faculty`}</span>
                      </p>
                    </div>
                  </ListGroup.Item>
                ))
              )}
            </ListGroup>
            <Button
              className='mt-2'
              onClick={() => {
                submitHandler(course.id)
              }}
              //disabled={feedbacks.length < 1}
            >
              Approve
            </Button>
            <Button
              variant='danger'
              className='mt-2 ml-2'
              onClick={() => {
                submitHandler(course.id, true)
              }}
              //disabled={feedbacks.length < 1}
            >
              Deny
            </Button>
          </div>
        ))
      )}
    </div>
  )
}
