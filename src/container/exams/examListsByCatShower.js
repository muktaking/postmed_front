import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Badge } from 'react-bootstrap'
import { useParams } from 'react-router'
import CircleLoader from '../../components/customSpinner/circleLoader/circleLoader'
import ExamByCat from './component/examByCat'

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
    <div className=''>
      {loading && <CircleLoader />}
      <h2 className='text-center'>
        <span className='mr-2'>Available Exams Under</span>
        <Badge variant='warning'>{name}</Badge>
      </h2>
      {!loading && (
        <p className='text-center text-danger'>
          {exams.length < 1 && 'NO Exam is avaiable.'}
        </p>
      )}
      <div className='d-flex justify-content-center flex-wrap'>
        {exams.map((exam) => (
          <ExamByCat key={exam.title} exam={exam} />
        ))}
      </div>
    </div>
  )
}
