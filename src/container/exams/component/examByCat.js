//import moment from 'moment'
import * as moment from 'dayjs'
import React, { useState } from 'react'
import { Badge, Button, Modal } from 'react-bootstrap'
import { BsFileText } from 'react-icons/bs'
import { FormattedMessage } from 'react-intl'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { resetExamResultLoader } from '../../../store/exams'
import { examTypeToString } from '../../../utils/faculty'
import { FaLock, FaUnlock } from 'react-icons/fa'
const duration = require('dayjs/plugin/duration')
const relativeTime = require('dayjs/plugin/relativeTime')
moment.extend(relativeTime)
moment.extend(duration)

export default function ExamByCat({ exam, courseId = null }) {
  const [showModal, setShowModal] = useState(false)
  const dispatch = useDispatch()
  const coursesEnrolledByStu = useSelector(
    (state) => state.courses.coursesEnrolledByStu
  )
  const isAuthenticated = useSelector((state) => state.auth.token !== null)

  const isFree =
    exam.categoryType.filter((cat) => cat.name === 'Free').length > 0
  const isEnrolledStu = coursesEnrolledByStu
    ? coursesEnrolledByStu.map((course) => course.id).indexOf(+courseId) !== -1
    : null

  const handleCloseModal = () => setShowModal(false)

  return (
    <div
      className='mb-2 ml-2 pt-3 px-2 border border-secondary' // bg-secondary text-white
      style={{ width: '350px' }}
    >
      <div>
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title className='text-warning'>
              {isAuthenticated ? 'Enrollment Required' : 'Login Required'}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <span>To continue the exam, you have to</span>{' '}
            {isAuthenticated ? (
              <Link to={`/courses/${courseId ? courseId : ''}`}>
                <Button>Enroll the course</Button>
              </Link>
            ) : (
              <Link to='/login'>
                <Button>Login</Button>
              </Link>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <h4 className=''>
          {/* <BsLayersFill size='1.5rem' /> */}
          <span className=''>{exam.title}</span>
        </h4>
        <div className='d-flex justify-content-between'>
          <div>
            <span>
              {!isEnrolledStu && isFree && (
                <>
                  <Badge variant='success' className='px-2 py-1'>
                    Free
                  </Badge>{' '}
                  <FaUnlock />
                </>
              )}
            </span>
            <span>
              {!isEnrolledStu && !isFree && (
                <>
                  <Badge variant='dark' className='px-2 py-1'>
                    Paid
                  </Badge>{' '}
                  <FaLock />
                </>
              )}
            </span>
          </div>
        </div>
      </div>
      <div className='mt-1'>
        <p className=''>
          <BsFileText size='1.5rem' className='m-1' />
          <span className='ml-2'>{exam.description}</span>
        </p>
        <hr />
        <div className='d-flex justify-content-center'>
          <Link
            className='text-white'
            // First get array of coursesEnrolledByStuIds, then finds in them the course id
            // , then check the free status
            to={
              isEnrolledStu
                ? '/exams/' + exam.id + '_' + courseId
                : isFree && '/exams/free/' + exam.id
            }
          >
            <Button
              variant='outline-primary'
              onClick={() => {
                dispatch(resetExamResultLoader())
                setShowModal(true)
              }}
            >
              <FormattedMessage id='btn.start' defaultMessage='Start Exam' />
            </Button>
          </Link>
          {isAuthenticated && courseId && (
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
      </div>
    </div>
  )
}
