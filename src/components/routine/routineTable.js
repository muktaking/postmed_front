//import moment from 'moment'
import * as moment from 'dayjs'
import React, { Suspense, lazy } from 'react'
import { Table } from 'react-bootstrap'
import { getStatus } from './showRoutine'
const RoutineTablePdf = lazy(() => import('./routineTablePdf'))

export default function RoutineTable({ routine, title }) {
  const headings = ['#', 'Topics', 'Status', 'Start Date']
  return (
    <div>
      <Suspense fallback={<div />}>
        <p>
          <RoutineTablePdf routine={routine} title={title} />
        </p>
      </Suspense>

      <h3 className='text-primary text-center'>Routine For: {title}</h3>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            {headings.map((heading) => (
              <th>{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {routine.map((syllabus, ind) => (
            <tr>
              <td>{ind + 1}</td>
              <td>{syllabus.syllabus}</td>
              <td>{getStatus(syllabus.startDate, syllabus.endDate)}</td>
              <td>
                {moment(syllabus.startDate).format('DD-MMM-YYYY, h:mm a')}
              </td>
              {/* <td>{moment(syllabus.endDate).format('DD-MMM-YYYY, h:mm a')}</td> */}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}
