import axios from 'axios'
import * as _ from 'lodash'
import React, { useEffect, useState } from 'react'
import { Badge, Col, Row } from 'react-bootstrap'
import { FaPaperclip, FaUsers } from 'react-icons/fa'
import Exams from './component/exams'
import GetFeedbacks from './component/feedbacks'
import UploadUsers from './component/uploadUsers'
import Users from './component/users'

export default function Admin() {
  const [users, setUsers] = useState([])
  const [exams, setExams] = useState([])
  const [feedbacks, setFeedbacks] = useState([])

  function feedbackController(ids) {
    if (ids) setFeedbacks(feedbacks.filter((f) => !ids.includes(f.id)))
  }

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_SITE_URL + '/dashboard/admin')
      .then((response) => {
        setUsers(response.data.users)
        setExams(_.flatMap(response.data.exams))
        setFeedbacks(response.data.feedbacks)
      })
      .catch((error) => console.log(error))
  }, [])

  const updater = () => {
    axios
      .get(process.env.REACT_APP_SITE_URL + '/dashboard/admin')
      .then((response) => {
        setUsers(response.data.users)
        setExams(_.flatMap(response.data.exams))
        setFeedbacks(response.data.feedbacks)
      })
      .catch((error) => console.log(error))
  }

  return (
    <div>
      <Row>
        <Col md={8}>
          <div className='d-flex'>
            <div title='Users' className='p-2 m-2'>
              <FaUsers className='mt-3' size={'2.4rem'} />
              <Badge style={{ fontSize: '1.1rem' }}>{users.length}</Badge>
            </div>
            <div title='Exams' className='p-2 m-2'>
              <FaPaperclip className='mt-3' size={'2.4rem'} />
              <Badge style={{ fontSize: '1.1rem' }}>{exams.length}</Badge>
            </div>
            <div className='p-2 m-2 mt-3'>
              <UploadUsers updater={updater} />
            </div>
          </div>
          <Users users={users} updater={updater} />
          <hr />
          <Exams exams={exams} updater={updater} />
        </Col>
        <Col md={4}>
          <GetFeedbacks
            feedbacks={feedbacks}
            feedbackController={feedbackController}
          />
        </Col>
      </Row>
    </div>
  )
}
