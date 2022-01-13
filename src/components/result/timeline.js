import axios from 'axios'
import * as _ from 'lodash'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Badge } from 'react-bootstrap'
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

  return userExamStat.map(
    ({ examTitles, examType, marks, lastAttemptTimes }, ind) => (
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='card'>
              <div className='card-body'>
                <h6 className='card-title text-center'>
                  Exams Under{' '}
                  <Badge variant='primary' style={{ fontSize: '1rem' }}>
                    {userDashExamInfo[ind].title}
                  </Badge>{' '}
                  Course
                </h6>
                <div id='content'>
                  <ul className='timeline'>
                    {examTitles.map((value, ind) => (
                      <li
                        key={value}
                        className='event'
                        data-date={moment(lastAttemptTimes[ind]).format(
                          'YYYY-MM-DD, h:mm a'
                        )}
                      >
                        <h3>{value}</h3>
                        <p className='text-danger'>{type[examType[ind]]}</p>
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
    )
  )
}
