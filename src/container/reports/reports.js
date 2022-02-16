import axios from 'axios'
//import moment from 'moment'
import * as moment from 'dayjs'
import React, { useEffect, useState } from 'react'
import { Badge, Col, Form, Row, Table } from 'react-bootstrap'
import MetaInfo from '../../components/seo/metainfo'
import { RoutesConfig } from '../../config/routes.config'
import LineCharts from './lineCharts'
import PieCharts from './pieCharts'

export default function Reports() {
  const [isActive, setIsActive] = useState(null)
  const [courses, setCourses] = useState([])
  const [examStats, setExamStats] = useState([])
  const [examDetails, setExamDetails] = useState(null)
  const [advancedAnalyTics, setAdvancedAnalyTics] = useState(false)
  // const [examTitle, setExamTitle] = useState('')
  // const [examTotalMark, setExamTotalMark] = useState(0)
  const [examActivityStat, setExamActivityStat] = useState([])

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_SITE_URL + '/courses/enrolled/courses')
      .then((res) => {
        setCourses(res.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }, [])

  const courseSelectHandler = (e) => {
    axios
      .get(
        process.env.REACT_APP_SITE_URL +
          '/userExamProfile/courses/' +
          e.target.value
      )
      .then((res) => {
        //console.log(res.data)
        setExamStats(res.data)
      })
      .catch((error) => console.log(error))
  }

  const getExamDetailsById = (examId) => {
    axios
      .get(process.env.REACT_APP_SITE_URL + '/exams/' + examId)
      .then((res) => {
        console.log(res.data)
        setExamDetails(res.data)
      })
      .catch((error) => console.log(error))
  }

  return (
    <div>
      <MetaInfo {...RoutesConfig.Reports.metaInfo} />
      <h3>Reports</h3>
      <Row>
        <Col sm={3}>
          <Form.Control
            as='select'
            className='mr-sm-2'
            id='inlineFormCustomSelect'
            custom
            onChange={courseSelectHandler}
          >
            <option>Select Course</option>
            {courses.map((course) => (
              <option value={course.id}>{course.title}</option>
            ))}
          </Form.Control>

          <p className='mt-4 mr-1'>
            <span>1. First Select A Course</span>
            <br />
            <span>2. Then click on any</span>{' '}
            <Badge variant='info' className='px-3 py-1 text-info'>
              -
            </Badge>{' '}
            <span>colored 'Exam Title' cell to get details</span>
          </p>
        </Col>
        <Col sm={9}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Exam Title</th>
                <th>Average Score</th>
                <th>Total Mark</th>
                <th>Attempt Numbers</th>
                <th>First Attempt Time</th>
                <th>Last Attempt Time</th>
              </tr>
            </thead>
            <tbody>
              {examStats.length > 0 &&
                examStats[0].courses.length > 0 &&
                examStats[0].courses[0].exams.length > 0 &&
                examStats[0].courses[0].exams.map((examStat, ind) => (
                  <tr
                    className={
                      isActive === examStat.examId ? 'bg-info text-white' : ''
                    }
                  >
                    <td>{ind + 1}</td>
                    <td
                      onClick={() => {
                        setIsActive(examStat.examId)
                        getExamDetailsById(examStat.examId)
                        // setExamTitle(examStat.examTitle)
                        // setExamTotalMark(examStat.totalMark)
                        setExamActivityStat(examStat.examActivityStat)
                      }}
                      className='bg-info text-white'
                    >
                      {examStat.examTitle}
                    </td>
                    <td>
                      {(
                        examStat.score.reduce(
                          (previousValue, currentValue) =>
                            Number(previousValue) + Number(currentValue)
                        ) / examStat.score.length
                      ).toFixed(2)}
                    </td>
                    <td>{examStat.totalMark}</td>
                    <td>{examStat.attemptNumbers}</td>
                    <td>
                      {moment(examStat.firstAttemptTime).format(
                        'MMMM Do YYYY, h:mm a'
                      )}
                    </td>
                    <td>
                      {moment(examStat.lastAttemptTime).format(
                        'MMMM Do YYYY, h:mm a'
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
          <div className='bg-light pl-3 py-2 my-3'>
            {examDetails && (
              <>
                <h3 className='text-center text-info my-2'>
                  In Depth about: {examDetails.title}{' '}
                </h3>
                <Form.Check
                  type='switch'
                  id='custom-switch'
                  label='Advanced Analytics'
                  onChange={() => {
                    setAdvancedAnalyTics(!advancedAnalyTics)
                  }}
                />
                <Table striped bordered hover className='mt-2'>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Score</th>
                      <th>Wrong Score</th>
                      <th>Penalty Score</th>
                      <th>Total Right Stems Number</th>
                      <th>Total Wrong Stems Number</th>
                      <th>Total Right Sba Questions (only Sba) </th>
                      <th>Total Wrong Sba Questions (only Sba) </th>
                      <th>Attempt Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {examActivityStat.map((stat, ind) => (
                      <tr>
                        <td>{ind + 1}</td>
                        <td>{stat.totalScore}</td>
                        <td>{stat.totalWrongScore}</td>
                        <td>{stat.totalPenaltyScore}</td>
                        <td>{stat.totalRightStems}</td>
                        <td>{stat.totalWrongStems}</td>
                        <td>{stat.totalRightSbaQuestions}</td>
                        <td>{stat.totalWrongSbaQuestions}</td>
                        <td>
                          {moment(stat.attemptTime).format(
                            'MMMM Do YYYY, h:mm a'
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                <p className='text-center'>Table: Summary View</p>
                <hr />
                {advancedAnalyTics && (
                  <>
                    <h5>Score Analytics</h5>
                    <LineCharts
                      labels={examActivityStat.map(
                        (stat, i) => `Attempt No.${i + 1}`
                      )}
                      dataSetFirst={examActivityStat.map((stat) =>
                        (
                          (stat.totalScore * 100) /
                          (examDetails.singleQuestionMark *
                            examDetails.questions.length)
                        ).toFixed(2)
                      )}
                      dataSetSec={examActivityStat.map((stat) =>
                        (
                          (stat.totalWrongScore * 100) /
                          (examDetails.singleQuestionMark *
                            examDetails.questions.length)
                        ).toFixed(2)
                      )}
                    />
                    <p className='text-center'>Fig: Score Analytics</p>
                    <hr />
                    <div>
                      <h5>Stems Analytics</h5>
                      <div className='row'>
                        {examActivityStat.map((stat) => (
                          <div className='col-6 mb-3'>
                            <PieCharts
                              labels={['Right', 'Wrong', 'UnTouched']}
                              dataSetFirst={[
                                stat.totalRightStems,
                                stat.totalWrongStems,
                                examDetails.questionStemLength *
                                  examDetails.questions.length -
                                  (stat.totalRightStems + stat.totalWrongStems)
                              ]}
                            />
                            <p className='text-center'>
                              Fig: Stems Analytics at
                              {' ' +
                                moment(stat.attemptTime).format(
                                  'MMM Do YY, h:mm a'
                                )}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        </Col>
        <Col></Col>
      </Row>
    </div>
  )
}
