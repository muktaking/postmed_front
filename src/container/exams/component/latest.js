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
  }, [courseId])

  return (
    <>
      <h3 className='text-center'>Ongoing Exam</h3>
      <div className='d-flex justify-content-center'>
        {exam ? (
          <ExamByCat exam={exam} courseId={courseId} />
        ) : (
          <p>
            Sorry! No ongoing exam but do not worry. Please try avaiable
            previous exams.
          </p>
        )}
      </div>
    </>
  )
}
