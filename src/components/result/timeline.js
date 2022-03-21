import axios from 'axios'
import * as moment from 'dayjs'
import * as _ from 'lodash'
import React, { useEffect, useState } from 'react'
import { Accordion, Badge, Button, Card } from 'react-bootstrap'
import './timeline.css'

const type = [
  'Assignment',
  'Weekly',
  'Monthly',
  'Assesment',
  'Term',
  'Test',
  'Final'
]

export default function Timeline() {
  const [userDashExamInfo, setUserDashExamInfo] = useState([])
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_SITE_URL + '/dashboard')
      .then((response) => {
        if (response.status === 200) {
          setUserDashExamInfo(response.data)
        }
      })
      .catch((e) => {
        console.log(e)
      })
  }, [])

  const userExamStat = userDashExamInfo.map((examStat) => {
    return {
      examTitles: _.map(examStat.userExamStat.examTitles, 'title'),
      examType: _.map(examStat.userExamStat.examTitles, 'type'),
      marks: _.map(
        examStat.userExamStat.stat,
        (value) => `Mark: ${value.averageScore} Out of ${value.totalMark}`
      ),
      lastAttemptTimes: _.map(examStat.userExamStat.stat, 'lastAttemptTime')
    }
  })

  // const examTitles = userExamStat ? _.map(userExamStat.examTitles, 'title') : []
  // const examType = userExamStat ? _.map(userExamStat.examTitles, 'type') : []
  // const marks = userExamStat
  //   ? _.map(
  //       userExamStat.stat,
  //       (value) => `Mark: ${value.averageScore} Out of ${value.totalMark}`
  //     )
  //   : []
  // const lastAttemptTimes = userExamStat
  //   ? _.map(userExamStat.stat, 'lastAttemptTime')
  //   : []

  return (
    <Accordion>
      {userExamStat.map(
        ({ examTitles, examType, marks, lastAttemptTimes }, ind) => (
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant='link' eventKey={ind}>
                Exams Under{' '}
                <Badge variant='primary' style={{ fontSize: '1rem' }}>
                  {userDashExamInfo[ind].title}
                </Badge>{' '}
                Course
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={ind}>
              <Card.Body>
                <div className='container'>
                  <div className='row'>
                    <div className='col-md-12'>
                      <div className='card'>
                        <div className='card-body'>
                          <div id='content'>
                            <ul className='timeline'>
                              {examTitles.map((value, ind) => (
                                <li
                                  key={value}
                                  className='event'
                                  data-date={moment(
                                    lastAttemptTimes[ind]
                                  ).format('DD-MMM-YYYY, h:mm a')}
                                >
                                  <h3>{value}</h3>
                                  <p className='text-danger'>
                                    {type[examType[ind]]}
                                  </p>
                                  <p className='text-secondary'>{marks[ind]}</p>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        )
      )}
    </Accordion>
  )
}
