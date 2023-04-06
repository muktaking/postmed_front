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
      <h3 className='text-center'>Ongoing Exam</h3>
      <div className='d-flex justify-content-center'>
        <Row
          className='mb-5 py-3 px-1 border border-secondary justify-content-center'
          style={{ width: '350px' }}
        >
          {exam ? (
            <ExamByCat exam={exam} courseId={courseId} />
          ) : (
            <p>
              Sorry! No ongoing exam but do not worry. Please try avaiable
              previous exams.
            </p>
          )}
        </Row>
      </div>
    </>
  )
}
