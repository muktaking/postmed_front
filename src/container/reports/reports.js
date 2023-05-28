import axios from 'axios'
//import moment from 'moment'
import * as moment from 'dayjs'
import React, { useEffect, useState } from 'react'
import { Badge, Button, Col, Form, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Timeline from '../../components/result/timeline'
import MetaInfo from '../../components/seo/metainfo'
import { RoutesConfig } from '../../config/routes.config'
import LineCharts from './lineCharts'
import PieCharts from './pieCharts'
import CircleLoader from '../../components/customSpinner/circleLoader/circleLoader'
import { useQuery } from '../../utils/queryRouter'

export default function Reports() {
  const [loading, setLoading] = useState(false)
  const [isActive, setIsActive] = useState(null)
  const [courses, setCourses] = useState([])
  const [examStats, setExamStats] = useState([])
  const [examDetails, setExamDetails] = useState(null)
  const [advancedAnalyTics, setAdvancedAnalyTics] = useState(false)
  const [showTimeline, setShowTimeline] = useState(false)
  // const [examTitle, setExamTitle] = useState('')
  // const [examTotalMark, setExamTotalMark] = useState(0)
  const [examActivityStat, setExamActivityStat] = useState([])
  let query = useQuery()
  const userId = query.get('userId')
  const queryCourseId = query.get('courseId')

  useEffect(() => {
    //admin uses userId to get respective user's reports
    if (userId) {
      axios
        .get(
          process.env.REACT_APP_SITE_URL + '/courses/enrolled/courses/' + userId
        )
        .then((res) => {
          setCourses(res.data)
        })
        .catch((e) => {
          console.log(e)
        })
      return
    }
    //will get all courses enrolled by user's
    if (queryCourseId) {
      courseSelectHandler(null, queryCourseId)
    }
    axios
      .get(process.env.REACT_APP_SITE_URL + '/courses/enrolled/courses')
      .then((res) => {
        setCourses(res.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }, [queryCourseId, userId])

  const courseSelectHandler = (e, courseId = null) => {
    setLoading(true)
    //userId will used for admin to get respective user's reports; then, couseId to get only specific course's reports
    axios
      .get(
        process.env.REACT_APP_SITE_URL +
          '/userExamProfile/courses/' +
          (userId
            ? `${userId}_${e.target.value}`
            : courseId
            ? courseId
            : e.target.value)
      )
      .then((res) => {
        //console.log(res.data)
        setLoading(false)
        setExamStats(res.data)
        setExamDetails(null)
        setAdvancedAnalyTics(false)
      })
      .catch((error) => {
        setLoading(false)
      })
  }

  const getExamDetailsById = (examId, courseId) => {
    setLoading(true)
    axios
      .get(
        process.env.REACT_APP_SITE_URL +
          '/exams/reports/filterby?examId=' +
          examId +
          '&courseId=' +
          courseId
      )
      .then((res) => {
        //console.log(res.data)
        setLoading(false)
        setExamDetails(res.data)
      })
      .catch((error) => {
        setLoading(false)
      })
  }

  return (
    <div>
      <MetaInfo {...RoutesConfig.Reports.metaInfo} />
      {loading && <CircleLoader />}
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
              <option
                selected={queryCourseId && queryCourseId}
                value={course.id}
              >
                {course.title}
              </option>
            ))}
          </Form.Control>

          <p className='mt-4 mr-1 pl-3'>
            <span className='text-info'>Steps</span>
            <br />
            <span>1. First Select A Course</span>
            <br />
            <span>2. Then click on any</span>{' '}
            <Badge variant='info' className='px-3 py-1 text-info'>
              -
            </Badge>{' '}
            <span>colored 'Exam Title' cell to get details</span>
            <br />
            <span>
              3. Switched to 'Advanced Analytics' to get in depth view
            </span>
          </p>
          <hr />
          <div>
            <p>More Options</p>
            <Form.Check
              type='switch'
              id='custom-switch-timeline'
              label='Show Timeline'
              onChange={() => {
                setShowTimeline(!showTimeline)
              }}
            />
          </div>
        </Col>
        <Col sm={9}>
          {showTimeline && (
            <div className='mb-3'>
              <h4>
                Timeline <Badge>(Click title to expand)</Badge>
              </h4>
              <Timeline />
              <hr />
            </div>
          )}
          <h4>Exams Reports</h4>
          <Table striped bordered hover responsive size='sm'>
            <thead>
              <tr>
                <th>#</th>
                <th>Exam Title</th>
                <th>Avg Score</th>
                <th>Total Mark</th>
                <th>Attempt</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {examStats.length > 0 &&
              examStats[0].courses.length > 0 &&
              examStats[0].courses[0].exams.length > 0 ? (
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
                        getExamDetailsById(
                          examStat.examId,
                          examStats[0].courses[0].id
                        )
                        // setExamTitle(examStat.examTitle)
                        // setExamTotalMark(examStat.totalMark)
                        setExamActivityStat(examStat.examActivityStat)
                      }}
                      className='bg-info text-white'
                    >
                      {examStat.examTitle}
                    </td>
                    <td>
                      {examStat.score.length > 0 &&
                        (
                          examStat.score.reduce(
                            (previousValue, currentValue) =>
                              Number(previousValue) + Number(currentValue)
                          ) / examStat.score.length
                        ).toFixed(2)}
                    </td>
                    <td>{examStat.totalMark}</td>
                    <td>{examStat.attemptNumbers}</td>
                    <td>
                      <div className='mb-1'>
                        <Link
                          to={`/reports/actions?courseId=${examStats[0].courses[0].courseId}&examId=${examStat.examId}&answers=0`}
                        >
                          <Button size='sm'>Questions</Button>
                        </Link>
                      </div>
                      <div>
                        <Link
                          to={`/reports/actions?courseId=${examStats[0].courses[0].courseId}&examId=${examStat.examId}&answers=1`}
                        >
                          <Button size='sm'>Answers</Button>
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className='text-danger text-center'>
                    You do not take part any exam under the course.
                  </td>
                </tr>
              )}
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
                <Table striped bordered hover responsive className='mt-2'>
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
                            'DD-MMM-YYYY, h:mm a'
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
                          <div className='col-lg-6 col-md-12 mb-3'>
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
                                  'DD-MMM-YY, h:mm a'
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
      </Row>
    </div>
  )
}
