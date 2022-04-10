import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Alert, Badge, ListGroup } from 'react-bootstrap'
import { useLocation } from 'react-router'

function useQuery() {
  const { search } = useLocation()

  return React.useMemo(() => new URLSearchParams(search), [search])
}

export default function ShowQuestions() {
  const [questions, setQuestions] = useState([])
  const [errorMsg, setErrorMsg] = useState(null)
  let query = useQuery()
  const examId = query.get('examId')
  const courseId = query.get('courseId')
  const isAnswers = query.get('answers')

  useEffect(() => {
    Axios.get(
      `${process.env.REACT_APP_SITE_URL}/exams/reports/questions/${examId}_${courseId}?answers=${isAnswers}`
    )
      .then((res) => {
        setQuestions(res.data.questions)
      })
      .catch((e) => {
        setErrorMsg(e.message)
      })
  }, [])

  return (
    <div>
      <h3 className='text-center'>
        {isAnswers === '0' ? 'Questions' : 'Questions With Answers'}
      </h3>
      {errorMsg && <Alert variant='danger'>{errorMsg}</Alert>}
      <div>
        {questions.map((ques, ind) => (
          <ListGroup className='mb-2'>
            <ListGroup.Item>
              <Badge variant='primary' className='p-1 mr-2'>
                Question No. {ind + 1}
              </Badge>
              <span>{ques.qText}</span>
              <br />
              <Badge variant='info'>
                {ques.qType === 'sba' ? 'Single Best Answer' : 'True/False'}
              </Badge>
            </ListGroup.Item>
            {isAnswers === '0' ? (
              ques.stems.map((stem, index) => (
                <ListGroup.Item>{index + 1 + '. ' + stem}</ListGroup.Item>
              ))
            ) : (
              <>
                {ques.stems.map((stem, index) => (
                  <ListGroup.Item className=''>
                    <div
                      className={
                        'rounded p-1 text-white bg-' +
                        (ques.qType === 'matrix'
                          ? stem.aStem === '1'
                            ? 'success'
                            : 'danger'
                          : ques.stems[0].aStem === (index + 1).toString()
                          ? 'success'
                          : ' text-secondary')
                      }
                    >
                      <span>{index + 1 + '. '}</span>
                      <span>{stem.qStem}</span>
                      <br />
                      <span>
                        {stem.fbStem && 'Explanation: ' + stem.fbStem}
                      </span>
                    </div>
                  </ListGroup.Item>
                ))}
                {ques.generalFeedback && (
                  <ListGroup.Item>
                    {'Explanation: ' + ques.generalFeedback}
                  </ListGroup.Item>
                )}
              </>
            )}
          </ListGroup>
        ))}
      </div>
    </div>
  )
}
