import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router'
import Spinner from '../../components/shared/spinner/spinner'
import ExamByCat from './component/examByCat'
import ExamFilter from './component/examFilter'

export default function ExamListsByCatShower() {
  const { id } = useParams()
  const [exams, setExams] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios
      .post(process.env.REACT_APP_SITE_URL + '/exams/course/' + id)
      .then((response) => {
        setLoading(false)
        console.log(response.data)
        setExams(response.data)
      })
      .catch((e) => {
        setLoading(false)
        console.log(e)
      })
  }, [id])
  return (
    <div className='mt-5'>
      {loading && <Spinner />}
      <Row>
        <Col lg={2}>
          <ExamFilter setExams={setExams} id={id} />
        </Col>
        <Col lg={10}>
          <h2 className='text-center'>
            <span className='mr-2'>Available Exams</span>
          </h2>
          {!loading && (
            <p className='text-center text-danger'>
              {exams.length < 1 && 'NO Exam is avaiable.'}
            </p>
          )}
          <div className='d-flex justify-content-center flex-wrap'>
            {exams &&
              exams.map((exam) => (
                <Row
                  key={exam.title}
                  className='m-2 py-3 pl-2 border border-secondary' // bg-secondary text-white
                  style={{ width: '350px' }}
                >
                  <ExamByCat exam={exam} courseId={id} />
                </Row>
              ))}
          </div>
        </Col>
      </Row>
    </div>
  )
}
