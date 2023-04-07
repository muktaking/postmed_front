//import moment from 'moment'
import * as moment from 'dayjs'
import React, { useEffect } from 'react'
import { Badge, Button, Col } from 'react-bootstrap'
import { BsFileText } from 'react-icons/bs'
import { FormattedMessage } from 'react-intl'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ExamCatBadges from '../../../components/exams/gallary/examCatBadges'
import { resetExamResultLoader } from '../../../store/exams'
import { examTypeToString } from '../../../utils/faculty'
import { fetchCourseEnrolledByStuLoader } from '../../../store/courses'
import { FaLock } from 'react-icons/fa'
const duration = require('dayjs/plugin/duration')
const relativeTime = require('dayjs/plugin/relativeTime')
moment.extend(relativeTime)
moment.extend(duration)

export default function ExamByCat({ exam, courseId = null }) {
  const dispatch = useDispatch()
  const coursesEnrolledByStu = useSelector(
    (state) => state.courses.coursesEnrolledByStu
  )
  useEffect(() => {
    dispatch(fetchCourseEnrolledByStuLoader())
  }, [dispatch])

  const isFree =
    exam.categoryType.filter((cat) => cat.name === 'Free').length > 0
  const isEnrolledStu =
    coursesEnrolledByStu.map((course) => course.id).indexOf(+courseId) !== -1
  return (
    <>
      <Col sm={12}>
        <h4 className=''>
          {/* <BsLayersFill size='1.5rem' /> */}
          <span className=''>{exam.title}</span>
        </h4>
        <div className='d-flex justify-content-between'>
          <div>
            <ExamCatBadges categoryType={exam.categoryType} />
            <span>{!isEnrolledStu && !isFree && <FaLock />}</span>
          </div>
          <div>
            <Badge variant='dark' className='px-2 py-1'>
              {examTypeToString(exam.type)}
            </Badge>
          </div>
        </div>
      </Col>
      <Col sm={12} className='mt-1'>
        <p className=''>
          <BsFileText size='1.5rem' className='m-1' />
          <span className='ml-2'>{exam.description}</span>
        </p>
        {/* <p className='text-right'>
          End on:{' '}
          <Badge className='ml-2' variant='danger'>
            {moment(exam.endDate).format('DD-MMM-YYYY hh:mm A')}
          </Badge>
        </p> */}
        {/* <Badge variant='light' className='mt-3'>
          {!authToken &&
            exam.categoryType.filter((cat) => cat.name === 'Free').length > 0 &&
            'Free'}
        </Badge> */}
        <hr />
        <div className='d-flex justify-content-center'>
          <Link
            className='text-white'
            // First get array of coursesEnrolledByStuIds, then finds in them the course id
            // , then check the free status
            to={
              isEnrolledStu
                ? '/exams/' + exam.id + '_' + courseId
                : isFree
                ? '/exams/free/' + exam.id
                : '/exams/' + exam.id
            }
          >
            <Button
              variant='outline-primary'
              onClick={() => {
                dispatch(resetExamResultLoader())
              }}
              disabled={!isEnrolledStu && !isFree}
            >
              <FormattedMessage id='btn.start' defaultMessage='Start Exam' />
            </Button>
          </Link>
          {courseId && (
            <Link
              className='text-white'
              to={'/result/rank/' + (courseId + '_' + exam.id)}
            >
              <Button
                onClick={() => {
                  dispatch(resetExamResultLoader())
                }}
                variant='outline-primary'
                className='ml-2'
                disabled={!isEnrolledStu && !isFree}
              >
                <FormattedMessage id='btn.rank' defaultMessage='Rank' />
              </Button>
            </Link>
          )}
        </div>
        <hr />
        <p className='text-center text-muted'>
          Start: {moment(exam.startDate).fromNow()}
        </p>
      </Col>
    </>
  )
}
