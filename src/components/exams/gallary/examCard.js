import axios from 'axios'
//import moment from 'moment'
import * as moment from 'dayjs'
import React, { Suspense, useState } from 'react'
import { Alert, Button, Card, OverlayTrigger, Popover } from 'react-bootstrap'
import { FormattedMessage, useIntl } from 'react-intl'
import { LazyLoadComponent } from 'react-lazy-load-image-component'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { resetExamResultLoader } from '../../../store/exams'
import { canActivate, rolePermitted } from '../../../utils/canActivate'
import SocialShare from '../../socialShare/socialShare'
import ExamCatBadges from './examCatBadges'
const EditExam = React.lazy(() =>
  import('../../../container/examBuilder/editExam')
)

function isExamFree(categoryType) {
  return categoryType.filter((cat) => cat.name === 'Free').length > 0
}

export default function ExamCard({
  width = '350',
  height = '180',
  examId,
  courseId,
  imgSrc,
  title,
  categoryType,
  description,
  createdAt,
  endDate,
  examLoader
}) {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.auth.token)
  const intl = useIntl()
  const [res, setRes] = useState(null)
  const [editExam, setEditExam] = useState(false)

  function editExamHandleClose() {
    setEditExam(false)
  }

  return (
    <>
      <Card key={examId} className='mr-2 mb-2' style={{ width: width + 'px' }}>
        <LazyLoadComponent>
          {!canActivate(rolePermitted.coordinator, token) && (
            <Card.Img
              variant='top'
              src={imgSrc}
              width={width}
              height={height}
            />
          )}
        </LazyLoadComponent>
        <Card.Body>
          <div>
            <Card.Title style={{ fontSize: '1.4rem', fontWeight: '900' }}>
              {title}
            </Card.Title>

            <Card.Subtitle>
              <ExamCatBadges
                categoryType={
                  token
                    ? categoryType.filter((ct) => ct.name !== 'Free')
                    : categoryType
                }
              />
            </Card.Subtitle>
          </div>

          <div className='mt-1 pt-2'>
            <p className=''>{description} </p>

            <p className='text-right'>
              <span className='text-muted'>
                {intl.formatMessage({
                  id: 'db.so',
                  defaultMessage: 'Start on'
                })}{' '}
                : {moment(createdAt).format('YYYY-MMM-DD hh:mm A')}
              </span>
              <br />
              {
                <span className='text-danger'>
                  {intl.formatMessage({
                    id: 'db.eo',
                    defaultMessage: 'Ends on'
                  })}{' '}
                  : {moment(endDate).format('YYYY-MMM-DD hh:mm A')}
                </span>
              }
            </p>
          </div>

          <div className='d-flex justify-content-around'>
            <Link
              className='text-white'
              to={
                courseId
                  ? `/exams/${examId}_${courseId}`
                  : isExamFree(categoryType)
                  ? `/exams/free/${examId}`
                  : ''
              }
            >
              <Button
                variant='outline-primary'
                onClick={() => {
                  dispatch(resetExamResultLoader())
                }}
                disabled={!isExamFree(categoryType)}
              >
                <FormattedMessage id='btn.start' defaultMessage='Start Exam' />
              </Button>
            </Link>
            <Link className='text-white' to={'/result/rank/' + examId}>
              <Button
                onClick={() => {
                  dispatch(resetExamResultLoader())
                }}
                variant='outline-dark'
              >
                <FormattedMessage id='btn.rank' defaultMessage='Rank' />
              </Button>
            </Link>
          </div>
          {token &&
            (isExamFree(categoryType) ? (
              <Alert variant='warning' className='mt-2'>
                Taking part to this exam will not be added to your exam profile.{' '}
              </Alert>
            ) : (
              <Alert variant='danger' className='mt-2'>
                You can not take part this exam. Go to{' '}
                <Link to='/exams'>avaiable exams </Link>
              </Alert>
            ))}
          <SocialShare
            url={'/exams/' + examId}
            title={title}
            description={description}
          />

          {canActivate(rolePermitted.coordinator, token) && (
            <div className='mt-2'>
              {editExam && (
                <Suspense fallback={<div>Loading...</div>}>
                  <EditExam
                    editExam={editExam}
                    editExamHandleClose={editExamHandleClose}
                  />
                </Suspense>
              )}
              <Button
                variant='primary'
                className='mr-3'
                onClick={() => {
                  setEditExam(true)
                }}
              >
                Edit
              </Button>

              <OverlayTrigger
                trigger='click'
                placement='top'
                overlay={
                  <PopoverWrapper
                    id={examId}
                    res={res}
                    setRes={setRes}
                    token={token}
                    examLoader={examLoader}
                  />
                }
              >
                <Button
                  onClick={() => {
                    dispatch(resetExamResultLoader())
                  }}
                  variant='danger'
                >
                  Delete
                </Button>
              </OverlayTrigger>
            </div>
          )}
        </Card.Body>
      </Card>
    </>
  )
}

const PopoverWrapper = React.forwardRef(
  ({ id, res, setRes, token, examLoader, ...props }, ref) => (
    <Popover id='popover-basic' ref={ref} {...props}>
      <Popover.Title as='h3'>Are You Sure To delete The Exam</Popover.Title>
      <Popover.Content>
        <p>{res}</p>
        <Button
          variant='danger'
          onClick={() => {
            //setAuthorizationToken(token);
            axios({
              baseURL: process.env.REACT_APP_SITE_URL,
              url: '/exams/' + id,
              method: 'delete'
            })
              .then((response) => {
                examLoader()
                setRes('Successfully Deleted')
              })
              .catch((error) => {
                setRes('Can not delete the exam' + JSON.stringify(error))
              })
          }}
        >
          Yes
        </Button>
      </Popover.Content>
    </Popover>
  )
)
