import axios from 'axios'
import * as _ from 'lodash'
import React, { useEffect, useState } from 'react'
import { Badge, Col, Row } from 'react-bootstrap'
import { FaPaperclip, FaUsers } from 'react-icons/fa'
import Exams from './component/exams'
import Users from './component/users'

export default function Admin() {
  const [users, setUsers] = useState([])
  const [exams, setExams] = useState([])

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_SITE_URL + '/dashboard/admin')
      .then((response) => {
        console.log(response)
        setUsers(response.data.users)
        setExams(_.flatMap(response.data.exams))
      })
      .catch((error) => console.log(error))
  }, [])

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
          </div>
          <Users users={users} />
          <hr />
          <Exams exams={exams} />
        </Col>
        <Col md={4}></Col>
      </Row>
    </div>
  )
}
