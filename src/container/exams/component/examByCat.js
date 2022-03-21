//import moment from 'moment'
import * as moment from 'dayjs'
import React from 'react'
import { Badge, Button, Col } from 'react-bootstrap'
import { BsFileText } from 'react-icons/bs'
import { FormattedMessage } from 'react-intl'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ExamCatBadges from '../../../components/exams/gallary/examCatBadges'
import { resetExamResultLoader } from '../../../store/exams'
import { examTypeToString } from '../../../utils/faculty'
const duration = require('dayjs/plugin/duration')
const relativeTime = require('dayjs/plugin/relativeTime')
moment.extend(relativeTime)
moment.extend(duration)

export default function ExamByCat({ exam, courseId = null }) {
  const dispatch = useDispatch()
  const authToken = useSelector((state) => (state.auth.token ? true : false))
  return (
    <>
      <Col sm={12}>
        <h4 className=''>
          {/* <BsLayersFill size='1.5rem' /> */}
          <span className=''>{exam.title}</span>
        </h4>
        <div className='d-flex justify-content-between'>
          <div>
            <ExamCatBadges
              categoryType={exam.categoryType.filter(
                (ct) => ct.name !== 'Free'
              )}
            />
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
        <p className='text-right'>
          End on:{' '}
          <Badge className='ml-2' variant='danger'>
            {moment(exam.endDate).format('DD-MMM-YYYY hh:mm A')}
          </Badge>
        </p>
        {/* <Badge variant='light' className='mt-3'>
          {!authToken &&
            exam.categoryType.filter((cat) => cat.name === 'Free').length > 0 &&
            'Free'}
        </Badge> */}
        <hr />
        <div>
          <Link
            className='text-white'
            to={
              (!authToken &&
              exam.categoryType.filter((cat) => cat.name === 'Free').length > 0
                ? '/exams/free/'
                : '/exams/') + (courseId ? exam.id + '_' + courseId : exam.id)
            }
          >
            <Button
              variant='outline-primary'
              onClick={() => {
                dispatch(resetExamResultLoader())
              }}
            >
              <FormattedMessage id='btn.start' defaultMessage='Start Exam' />
            </Button>
          </Link>
          <Link
            className='text-white'
            to={
              '/result/rank/' + (courseId ? courseId + '_' + exam.id : exam.id)
            }
          >
            <Button
              onClick={() => {
                dispatch(resetExamResultLoader())
              }}
              variant='outline-primary'
              className='ml-2'
            >
              <FormattedMessage id='btn.rank' defaultMessage='Rank' />
            </Button>
          </Link>
        </div>
        <hr />
        <p className='text-center text-muted'>
          Start: {moment(exam.startDate).fromNow()}
        </p>
      </Col>
    </>
  )
}
