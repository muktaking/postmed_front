//import moment from 'moment'
import * as moment from 'dayjs'
import React from 'react'
import { Carousel, Col, Jumbotron, Nav, Row, Tab } from 'react-bootstrap'
import { FaChevronCircleRight, FaExclamationTriangle } from 'react-icons/fa'
import ExamsFeaturedCard from './bigCards/mainContentCards/examsFeaturedCard'
import ReportCard from './bigCards/mainContentCards/reportCard'
import RecentActivityCard from './bigCards/sideCards/recentActivityCard'
import Routine from './bigCards/sideCards/routine'
import Rank from './miniCards/miniInfoBlock/rank'
import Result from './miniCards/miniInfoBlock/result'
import TotalExam from './miniCards/miniInfoBlock/totalExam'
import UpcomingExam from './miniCards/miniInfoBlock/upcomingExam'
const duration = require('dayjs/plugin/duration')
const relativeTime = require('dayjs/plugin/relativeTime')
moment.extend(relativeTime)
moment.extend(duration)

export default function StuDashCourseComponent({ userDashExamInfo }) {
  return (
    <Tab.Container id='left-tabs-example' defaultActiveKey={0}>
      <Row>
        <Col sm={2}>
          <h4 className='text-center mt-3'>Enrolled Courses</h4>
          <p className='text-muted text-center' style={{ fontSize: '.8rem' }}>
            Select course to get details
          </p>
          <hr />
          <Nav variant='pills' className='flex-column p-3'>
            {userDashExamInfo.map((e, i) => (
              <Nav.Item key={e + i} className='mb-2'>
                <Nav.Link eventKey={i}>
                  <FaChevronCircleRight className='mr-2' />
                  <span>{e.title}</span>
                  {moment(new Date(e.endDate)).diff(moment(new Date())) > 0 ? (
                    ''
                  ) : (
                    <FaExclamationTriangle color='EB455F' className='ml-2' />
                  )}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Col>
        <Col sm={10}>
          <Jumbotron>
            <Tab.Content>
              {userDashExamInfo.map((examInfo, ind) => {
                const { id, userExamInfo, userExamStat, featuredExams } =
                  examInfo
                return (
                  <Tab.Pane key={id} eventKey={ind}>
                    {/* <div className='d-flex justify-content-between flex-wrap'> */}
                    <Carousel nextIcon=<sapn /> prevIcon=<span />>
                      <Carousel.Item>
                        <TotalExam
                          value={userExamInfo.totalExam[1]}
                          footerValue={userExamInfo.totalExam[0]}
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <Rank
                          value={userExamInfo.rank[0]}
                          footerValue={userExamInfo.rank[1]}
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <Result
                          value={userExamInfo.result[0]}
                          footerValue={userExamInfo.result[1]}
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        {userExamInfo.upcomingExam ? (
                          <UpcomingExam
                            value={userExamInfo.upcomingExam[0]}
                            id={userExamInfo.upcomingExam[2]}
                            footerValue={moment(
                              userExamInfo.upcomingExam[1]
                            ).fromNow()}
                            courseId={id}
                          />
                        ) : (
                          <UpcomingExam />
                        )}
                      </Carousel.Item>
                    </Carousel>

                    {/* </div> */}
                    <hr className='my-3' />
                    <Routine id={id} title={examInfo.title} />
                    <hr />
                    <Row>
                      <Col xl={8} lg={12}>
                        <ReportCard userExamStat={userExamStat} />
                      </Col>
                      <Col xl={4}>
                        <RecentActivityCard userExamStat={userExamStat} />
                      </Col>
                    </Row>
                    <hr />
                    <ExamsFeaturedCard
                      featuredExams={featuredExams}
                      courseId={id}
                    />
                  </Tab.Pane>
                )
              })}
            </Tab.Content>
          </Jumbotron>
        </Col>
      </Row>
    </Tab.Container>
  )

  // return (
  //   <div>
  //     <Tabs
  //       id='controlled-tab-course'
  //       activeKey={key}
  //       onSelect={(k) => {
  //         setKey(k)
  //       }}
  //       className='mb-3'
  //       style={{ fontSize: '1.5rem' }}
  //     >
  //       {userDashExamInfo.map((examInfo, ind) => {
  //         const {
  //           id,
  //           title,
  //           userExamInfo,
  //           userExamStat,
  //           featuredExams
  //         } = examInfo
  //         return (
  //           <Tab eventKey={ind} title={title}>
  //             <div className='d-md-flex justify-content-around flex-wrap'>
  //               <TotalExam
  //                 value={userExamInfo.totalExam[0]}
  //                 footerValue={userExamInfo.totalExam[1]}
  //               />
  //               <Rank
  //                 value={userExamInfo.rank[0]}
  //                 footerValue={userExamInfo.rank[1]}
  //               />
  //               <UpcomingExam
  //                 value={userExamInfo.upcomingExam[0]}
  //                 id={userExamInfo.upcomingExam[2]}
  //                 footerValue={moment(userExamInfo.upcomingExam[1]).format(
  //                   'DD-MMM-YYYY'
  //                 )}
  //               />
  //               <Result
  //                 value={userExamInfo.result[0]}
  //                 footerValue={userExamInfo.result[1]}
  //               />{' '}
  //             </div>
  //             <hr className='my-3' />
  //             <Routine id={id} />
  //             <hr />
  //             <Row>
  //               <Col xl={8} lg={12}>
  //                 <ReportCard userExamStat={userExamStat} />
  //                 <hr />
  //                 <ExamsFeaturedCard featuredExams={featuredExams} />
  //                 <hr />
  //               </Col>
  //               <Col xl={4}>
  //                 <RecentActivityCard userExamStat={userExamStat} />
  //                 <hr />
  //               </Col>
  //             </Row>
  //           </Tab>
  //         )
  //       })}
  //     </Tabs>
  //   </div>
  // )
}
