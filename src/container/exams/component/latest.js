import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import ExamByCat from './examByCat'

export default function Latest({ courseId = null }) {
  const [exam, setExam] = useState(null)
  useEffect(() => {
    axios
      .get(
        process.env.REACT_APP_SITE_URL +
          '/exams/current' +
          '?courseId=' +
          courseId
      )
      .then((res) => {
        setExam(res.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }, [])

  return (
    <>
      <h3 className='text-center'>Current Exam</h3>
      <Row
        className='mx-auto mb-5 py-3 pl-2 border border-secondary'
        style={{ width: '350px' }}
      >
        {exam ? (
          <ExamByCat exam={exam} courseId={courseId} />
        ) : (
          <p>No current exam</p>
        )}
      </Row>
    </>
  )
}
