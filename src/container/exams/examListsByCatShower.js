import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Badge, Row, Spinner } from 'react-bootstrap'
import { useParams } from 'react-router'
import ExamByCat from './component/examByCat'

const contentCenter = {
  //styling to display server response in middle of screen
  position: 'fixed',
  top: '45vh',
  left: '50%',
  zIndex: '10000000000'
}

export default function ExamListsByCatShower() {
  const { id } = useParams()
  let [name, idA] = [null, null]
  if (id) [name, idA] = id.split('-')
  const [exams, setExams] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios
      .get(process.env.REACT_APP_SITE_URL + '/exams/category/' + idA)
      .then((response) => {
        setLoading(false)
        setExams(response.data)
      })
      .catch((e) => {
        setLoading(false)
        console.log(e)
      })
  }, [idA])
  return (
    <div className='mt-5'>
      {loading && (
        <Spinner
          animation='grow'
          role='status'
          variant='dark'
          style={contentCenter}
        ></Spinner>
      )}
      <h2 className='text-center'>
        <span className='mr-2'>Available Exams Under</span>
        <Badge variant='warning'>{name}</Badge>
      </h2>
      {!loading && (
        <p className='text-center text-danger'>
          {exams.length < 1 && 'NO Exam is avaiable.'}
        </p>
      )}
      <div className='d-flex justify-content-center'>
        {exams.map((exam) => (
          <Row
            key={exam.title}
            className='m-2 py-3 pl-2 bg-secondary text-white'
            style={{ width: '350px' }}
          >
            <ExamByCat exam={exam} />
          </Row>
        ))}
      </div>
    </div>
  )
}
