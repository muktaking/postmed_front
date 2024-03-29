import React, { useState } from 'react'
import { Badge, Button, Col, Modal, Row } from 'react-bootstrap'
import { useIntl } from 'react-intl'
import { Link } from 'react-router-dom'
import ExamCard from './examCard'

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

export default function ListCard({ title, exams, landing, examLoader }) {
  const intl = useIntl()

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <>
      <Modal show={show} onHide={handleClose} size={'xl'}>
        <Modal.Header closeButton>
          <Modal.Title>
            {intl.formatMessage({ id: 'btn.more', defaultMessage: 'More' })}
            <Badge variant='warning'>{' ' + title.toUpperCase() + ' '}</Badge>
            {intl.formatMessage({ id: 'btn.exams', defaultMessage: 'Exams' })}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {
            <Row className='mt-3 ml-3'>
              <Col className='d-flex justify-content-center flex-wrap'>
                {exams.slice(2).map((exam) => (
                  <ExamCard
                    key={exam.id}
                    examId={exam.id}
                    imgSrc={
                      exam.categoryType.length > 0
                        ? process.env.REACT_APP_SITE_URL +
                          '/' +
                          exam.categoryType[
                            getRndInteger(0, exam.categoryType.length)
                          ].imageUrl
                        : '/assets/image/uncat.jpg'
                    }
                    title={exam.title}
                    categoryType={
                      exam.categoryType.length > 0
                        ? exam.categoryType
                        : [{ name: 'Uncategorized' }]
                    }
                    description={exam.description}
                    createdAt={exam.createdAt}
                    endDate={exam.endDate}
                    free={
                      exam.categoryType.filter((cat) => cat.name === 'Free')
                        .length > 0
                    }
                    examLoader={examLoader}
                    landing={landing}
                  />
                ))}
              </Col>
            </Row>
          }
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <div className='my-5 position-relative'>
        <h3
          className='text-center bg-warning text-light p-3 mx-auto'
          style={{ maxWidth: '400px' }}
        >
          {title.toUpperCase() + ' '}{' '}
          {!landing && (
            <Badge variant='light' className='ml-2'>
              {' '}
              {exams.length}
            </Badge>
          )}{' '}
        </h3>
        <div className='mt-5'>
          <div className='d-flex justify-content-around flex-wrap'>
            {exams.length < 1 && (
              <p className='lead text-danger'>
                {' '}
                {title +
                  ' ' +
                  intl.formatMessage({
                    id: 'noExamCreated',
                    defaultMessage: 'are not created'
                  })}{' '}
              </p>
            )}
            {exams.map((exam, i) => (
              <ExamCard
                key={exam.id}
                examId={exam.id}
                imgSrc={
                  exam.categoryType.length > 0
                    ? process.env.REACT_APP_SITE_URL +
                      '/images/bootstrap/featured_0' +
                      (Math.floor(Math.random() * 3) + 1) +
                      '.svg'
                    : process.env.REACT_APP_SITE_URL +
                      '/images/bootstrap/uncat.svg'
                }
                title={exam.title}
                categoryType={
                  exam.categoryType.length > 0
                    ? exam.categoryType
                    : [{ name: 'Uncategorized' }]
                }
                description={exam.description}
                createdAt={exam.startDate}
                endDate={exam.endDate}
                examLoader={examLoader}
                landing={landing}
              />
            ))}
          </div>
          {landing ? (
            <div className='d-flex justify-content-center'>
              <Link to='/exams/category/Featured-2'>
                <Button variant='warning' size='lg' className='text-white'>
                  More Featured Exams...
                </Button>
              </Link>
            </div>
          ) : (
            <div className='my-2 d-flex justify-content-center'>
              {exams.length > 2 ? (
                <Button
                  style={{ height: '50px', width: '150px' }}
                  onClick={() => {
                    handleShow()
                  }}
                >
                  {intl.formatMessage({
                    id: 'btn.more',
                    defaultMessage: 'More...'
                  })}
                  .
                </Button>
              ) : (
                ''
              )}
            </div>
          )}
        </div>
      </div>
    </>
  )
}
