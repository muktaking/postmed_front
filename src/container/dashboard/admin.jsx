import axios from 'axios'
import * as _ from 'lodash'
import * as moment from 'dayjs'
import React, { useEffect, useState } from 'react'
import { Badge, Col, Row } from 'react-bootstrap'
import { FaUsers, FaRegListAlt, FaReceipt } from 'react-icons/fa'
import ExamsByCourse from './component/examsByCourse'
import Expectedenrolled from './component/expectedenrolled'
import GetFeedbacks from './component/feedbacks'
import RoleTabs from './component/roleTabs'
import UploadUsers from './component/uploadUsers'

export default function Admin() {
  const [users, setUsers] = useState([])
  const [courses, setCourses] = useState([])
  const [exams, setExams] = useState([])
  const [feedbacks, setFeedbacks] = useState([])
  const [expectedEnrolled, setExpectedEnrolled] = useState([])

  function feedbackController(ids) {
    if (ids) setFeedbacks(feedbacks.filter((f) => !ids.includes(f.id)))
  }

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_SITE_URL + '/dashboard/admin')
      .then((response) => {
        setUsers(response.data.users)
        setCourses(_.flatMap(response.data.courses))
        setExams(_.flatMap(response.data.exams))
        setFeedbacks(response.data.feedbacks)
        setExpectedEnrolled(response.data.expectedEnrolled)
      })
      .catch((error) => console.log(error))
  }, [])

  const updater = () => {
    axios
      .get(process.env.REACT_APP_SITE_URL + '/dashboard/admin')
      .then((response) => {
        setUsers(response.data.users)
        setCourses(_.flatMap(response.data.courses))
        setExams(_.flatMap(response.data.exams))
        setFeedbacks(response.data.feedbacks)
        setExpectedEnrolled(response.data.expectedEnrolled)
      })
      .catch((error) => console.log(error))
  }

  return (
    <div>
      <Row>
        <Col md={8}>
          <div className='d-flex'>
            <div title='Users' className='p-2 m-2'>
              <FaUsers className='mt-3' size={'1rem'} />
              <Badge>{users.length}</Badge>
            </div>
            <div title='Courses' className='p-2 m-2'>
              <FaRegListAlt className='mt-3' size={'1rem'} />
              <Badge>
                {courses.length}
                {'  '}
                <span className='text-success'>
                  (
                  {courses &&
                    courses.filter(
                      (course) =>
                        moment(new Date(course.endDate)).diff(
                          moment(new Date())
                        ) > 0
                    ).length}
                  )
                </span>
              </Badge>
            </div>
            <div title='Exams' className='p-2 m-2'>
              <FaReceipt className='mt-3' size={'1em'} />
              <Badge>{exams.length}</Badge>
            </div>
            <div className='p-2 m-2 mt-3'>
              <UploadUsers updater={updater} />
            </div>
          </div>
          <RoleTabs users={users} updater={updater} />
          <hr />
          <ExamsByCourse exams={exams} updater={updater} />
          {/* <Exams exams={exams} updater={updater} /> */}
        </Col>
        <Col md={4}>
          <Expectedenrolled
            expectedEnrolled={expectedEnrolled}
            updater={updater}
          />
          <hr />
          <GetFeedbacks
            feedbacks={feedbacks}
            feedbackController={feedbackController}
          />
        </Col>
      </Row>
    </div>
  )
}
