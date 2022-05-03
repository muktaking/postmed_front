//import moment from 'moment'
import * as moment from 'dayjs'
import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import { FaEdit, FaFileAlt, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import DeleteExam from '../../examBuilder/deleteExam'
import EditExam from '../../examBuilder/editExam'
import { examType, examTypeBgColor } from '../../exams/examLists'

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
  const [editExamId, setEditExamId] = useState(null)
  const [delExamId, setDelExamId] = useState(null)
  const [delExamTitle, setDelExamTitle] = useState('')

  function editExamHandleClose() {
    setEditExamId(null)
  }
  function delExamHandleClose() {
    setDelExamId(null)
  }
  return (
    <div style={{ maxHeight: '350px', overflowY: 'scroll' }}>
      {editExamId && (
        <EditExam
          editExamHandleClose={editExamHandleClose}
          editExamId={editExamId}
        />
      )}
      {delExamId && (
        <DeleteExam
          title={delExamTitle}
          delExamId={delExamId}
          delExamHandleClose={delExamHandleClose}
        />
      )}
      <Table striped bordered hover responsive size='sm'>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Type</th>
            <th>Description</th>
            <th>Category</th>
            {/* <th>Created At</th> */}
            <th>Status</th>
            <th>Start From</th>
            <th>Ends on</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {exams.map((exam, ind) => (
            <tr key={ind}>
              <td className={'text-white bg-' + examTypeBgColor[exam.type]}>
                {ind + 1}
              </td>
              <td>{exam.title}</td>
              <td>{examType[exam.type]}</td>
              <td>{exam.description}</td>
              <td>{exam.categoryType.map((cat) => cat.name).join(', ')}</td>
              {/* <td>{moment(exam.createdAt).format('YYYY-MM-DD, hh:mm a')}</td> */}
              <td>{getExamStatus(exam.startDate, exam.endDate)}</td>
              <td>{moment(exam.startDate).format('YYYY-MM-DD, hh:mm a')}</td>
              <td>{moment(exam.endDate).format('YYYY-MM-DD, hh:mm a')}</td>
              <td>
                <Link to={`/reports/actions?examId=${exam.id}&answers=1`}>
                  <span className='mb-2'>
                    <FaFileAlt />
                  </span>
                </Link>
                <br />
                <span
                  onClick={() => {
                    setEditExamId(exam.id)
                  }}
                  style={{ cursor: 'pointer' }}
                  className='mb-2'
                >
                  <FaEdit />
                </span>
                <br />
                <span
                  onClick={() => {
                    setDelExamId(exam.id)
                    setDelExamTitle(exam.title)
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  <FaTimes />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}
