import axios from 'axios'
import * as moment from 'dayjs'
import React, { useEffect, useState } from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import Exams from './exams'

export default function ExamsByCourse({ exams, updater }) {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_SITE_URL + '/courses/auth')
      .then((res) => {
        //getting the ongoing courses
        // const ongoingCourses = res.data.filter(
        //   (course) =>
        //     moment(new Date(course.endDate)).diff(moment(new Date())) > 0
        // )
        setCourses(res.data)
      })
      .catch((e) => console.log(e))
  }, [])

  return (
    <div>
      {/* Ongoing courses Tab */}
      <h5>Ongoing Courses Tab</h5>
      <Tabs defaultActiveKey='1'>
        {courses &&
          courses
            .filter(
              (course) =>
                moment(new Date(course.endDate)).diff(moment(new Date())) > 0
            )
            .map((course, index) => {
              return (
                <Tab
                  tabClassName='border mb-1 mr-1'
                  eventKey={course.id}
                  title={course.title}
                >
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
      <hr />
      {/* Old courses Tab */}
      <h5 className='mt-3'>Old Courses Tab</h5>
      <Tabs defaultActiveKey='1'>
        {courses &&
          courses
            .filter(
              (course) =>
                moment(new Date(course.endDate)).diff(moment(new Date())) < 0
            )
            .map((course, index) => {
              return (
                <Tab
                  tabClassName='border mb-1 mr-1'
                  eventKey={course.id}
                  title={course.title}
                >
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
