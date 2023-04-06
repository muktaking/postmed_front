import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Col, Jumbotron, Modal, Row } from 'react-bootstrap'
import Pagination from 'react-js-pagination'
import { useParams } from 'react-router'
import CircleLoader from '../../components/customSpinner/circleLoader/circleLoader'
import ShowRoutine from '../../components/routine/showRoutine'
import { paginate } from '../../utils/paginate'
import ExamByCat from './component/examByCat'
import ExamFilter from './component/examFilter'
import Latest from './component/latest'

export default function ExamListsByCatShower() {
  const { id } = useParams()
  const [exams, setExams] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const pageSize = 5

  useEffect(() => {
    setLoading(true)
    axios
      .post(process.env.REACT_APP_SITE_URL + '/exams/course/' + id)
      .then((response) => {
        setLoading(false)
        setExams(response.data)
      })
      .catch((e) => {
        setLoading(false)
        console.log(e)
      })
  }, [id])

  const paginatedExams = paginate(exams, currentPage, pageSize)

  return (
    <div>
      {loading && <CircleLoader />}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Routine</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ShowRoutine showRaw={false} id={id} title='' />
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Latest courseId={id} />

      <Jumbotron>
        <h3 className='text-center'>
          <span className='mr-2'>Available Exams</span>
        </h3>

        <Row>
          <Col lg={2} className='mb-3'>
            <div className='mb-2'>
              <Button variant='info' onClick={handleShow}>
                Exam's Routine
              </Button>
            </div>
            <ExamFilter
              setExams={setExams}
              id={id}
              setCurrentPage={setCurrentPage}
            />
          </Col>
          <Col lg={10} className='border'>
            {!loading && (
              <p className='text-center text-danger'>
                {exams.length < 1 && 'NO Exam is avaiable.'}
              </p>
            )}
            <div className='d-flex justify-content-center flex-wrap'>
              {paginatedExams &&
                paginatedExams.map((exam) => (
                  <Row
                    key={exam.title}
                    className='m-2 py-3 pl-2 border border-secondary' // bg-secondary text-white
                    style={{ width: '350px' }}
                  >
                    <ExamByCat exam={exam} courseId={id} />
                  </Row>
                ))}
            </div>
            <div className='d-flex justify-content-center mt-3'>
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={pageSize}
                totalItemsCount={exams.length}
                pageRangeDisplayed={2}
                onChange={(page) => {
                  setCurrentPage(page)
                }}
                itemClass='page-item'
                linkClass='page-link'
                prevPageText='Previous'
                nextPageText='Next'
              />
            </div>
          </Col>
        </Row>
      </Jumbotron>
    </div>
  )
}
