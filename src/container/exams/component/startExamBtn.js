import React, { useState } from 'react'
import { Modal, Button, Badge } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import { FaLock } from 'react-icons/fa'
import { resetExamResultLoader } from '../../../store/exams'

export default function StartExamBtn({ exam, courseId, children }) {
  const [showModal, setShowModal] = useState(false)
  const dispatch = useDispatch()
  const isAuthenticated = useSelector((state) => state.auth.token !== null)
  const coursesEnrolledByStu = useSelector(
    (state) => state.courses.coursesEnrolledByStu
  )
  const isFree =
    exam.categoryType.filter((cat) => cat.name === 'Free').length > 0
  const isEnrolledStu = coursesEnrolledByStu
    ? coursesEnrolledByStu.map((course) => course.id).indexOf(+courseId) !== -1
    : null

  const handleCloseModal = () => setShowModal(false)

  return (
    <div>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title className=''>
            {isAuthenticated ? 'Enrollment Required' : 'Login Required'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {children ? (
            children
          ) : (
            <div>
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
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <div className='d-flex justify-content-center align-items-center'>
        <div className='d-flex justify-content-center mr-2'>
          <div>
            <Badge variant='success'>
              {!isEnrolledStu && isFree && (
                <>
                  <span className='px-2 py-1'>Free</span>
                </>
              )}
            </Badge>
            <Badge variant='dark' className='p-1'>
              {!isEnrolledStu && !isFree && (
                <>
                  <span className='px-2 py-1'>Locked</span> <FaLock />
                </>
              )}
            </Badge>
          </div>
        </div>

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
      </div>
    </div>
  )
}
