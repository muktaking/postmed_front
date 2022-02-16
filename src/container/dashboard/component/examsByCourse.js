import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import Exams from './exams'

export default function ExamsByCourse({ exams, updater }) {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_SITE_URL + '/courses/auth')
      .then((res) => {
        setCourses(res.data)
      })
      .catch((e) => console.log(e))
  }, [])

  return (
    <div>
      <Tabs defaultActiveKey='1'>
        {courses.map((course, index) => {
          return (
            <Tab eventKey={course.id} title={course.title}>
              <Exams
                exams={exams.filter((exam) =>
                  exam.courseIds.includes(course.id.toString())
                )}
                updater={updater}
              />
            </Tab>
          )
        })}
      </Tabs>
    </div>
  )
}
