import moment from 'moment'
import React from 'react'
import { Table } from 'react-bootstrap'
import { examType } from '../../exams/examLists'

function getExamStatus(start, end) {
  const today = new Date()
  if (moment(start).isBefore(today) && moment(end).isAfter(today)) {
    return 'Ongoing'
  } else if (moment(start).isAfter(today)) {
    return 'Upcoming'
  } else if (moment(end).isBefore(today)) {
    return 'Completed'
  }
  return 'Undefined'
}

export default function Exams({ exams }) {
  return (
    <div style={{ maxHeight: '350px', overflowY: 'scroll' }}>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Type</th>
            <th>Description</th>
            <th>Category</th>
            <th>Created At</th>
            <th>Status</th>
            <th>Start From</th>
            <th>Ends on</th>
          </tr>
        </thead>
        <tbody>
          {exams.map((exam, ind) => (
            <tr key={ind}>
              <td>{ind + 1}</td>
              <td>{exam.title}</td>
              <td>{examType[exam.type]}</td>
              <td>{exam.description}</td>
              <td>{exam.categoryType.map((cat) => cat.name).join(', ')}</td>
              <td>{moment(exam.createdAt).format('YYYY-MM-DD, hh:mm a')}</td>
              <td>{getExamStatus(exam.startDate, exam.endDate)}</td>
              <td>{moment(exam.startDate).format('YYYY-MM-DD, hh:mm a')}</td>
              <td>{moment(exam.endDate).format('YYYY-MM-DD, hh:mm a')}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}
