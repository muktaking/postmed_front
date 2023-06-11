import React, { useState } from 'react'
import { Button, Form, OverlayTrigger, Table } from 'react-bootstrap'
import * as moment from 'dayjs'

import { getStatus } from './showRoutine'
import { RenderTooltip } from './singleRoutineCard'

export default function ShowRoutineTableView({
  courses,
  routines,
  setShowModal,
  showRaw,
  setEditSyllabusValue,
  setMsg
}) {
  const [routinesByCourse, setRoutinesByCourse] = useState(null)
  const changeHandler = (e) => {
    setRoutinesByCourse(
      routines &&
        routines.filter(
          (syllabus) => syllabus.courseId === parseInt(e.target.value)
        )
    )
  }
  return (
    <div>
      <Form.Group controlId='courseSelect'>
        <Form.Label>Example select</Form.Label>
        <Form.Control as='select' onChange={changeHandler}>
          <option>Select A Course</option>
          {courses &&
            courses.map((course) => (
              <option value={course.id}>{course.title}</option>
            ))}
        </Form.Control>
      </Form.Group>
      {routinesByCourse && routinesByCourse.length > 0 ? (
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Syllabus</th>
                <th>Status</th>
                <th>StartDate</th>

                <th>Endate</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {routinesByCourse.map((rbc, ind) => (
                <tr>
                  <td>{ind + 1}</td>
                  <td>{rbc.syllabus}</td>
                  <td>{getStatus(rbc.startDate, rbc.endDate)}</td>
                  <td>{moment(rbc.startDate).format('DD-MMM-YYYY, h:mm a')}</td>
                  <td>{moment(rbc.endDate).format('DD-MMM-YYYY, h:mm a')}</td>
                  <td>
                    <Button
                      variant='warning'
                      className='mr-2 mb-2'
                      onClick={() => {
                        setShowModal(true)
                        setEditSyllabusValue([
                          rbc.id,
                          new Date(rbc.startDate),
                          new Date(rbc.endDate),
                          rbc.syllabus,
                          rbc.courseId
                        ])
                      }}
                    >
                      Edit
                    </Button>
                    <OverlayTrigger
                      trigger='click'
                      placement='right'
                      overlay={<RenderTooltip setMsg={setMsg} id={rbc.id} />}
                    >
                      <Button variant='danger' className=''>
                        Delete
                      </Button>
                    </OverlayTrigger>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      ) : (
        <p className='text-danger text-center'>No Routine is available</p>
      )}
    </div>
  )
}
