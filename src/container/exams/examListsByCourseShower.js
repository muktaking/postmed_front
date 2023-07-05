import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'
import Pagination from 'react-js-pagination'
import { useParams } from 'react-router'
import CircleLoader from '../../components/customSpinner/circleLoader/circleLoader'
import ShowRoutine from '../../components/routine/showRoutine'
import { paginate } from '../../utils/paginate'
import ExamByCat from './component/examByCat'
import ExamFilter from './component/examFilter'
import Latest from './component/latest'
import { fetchCourseEnrolledByStuLoader } from '../../store/courses'
import { useDispatch, useSelector } from 'react-redux'
import usePageNumberQueryToRoute from '../../utils/usePageNumberQueryToRoute'

export default function ExamListsByCatShower() {
  const pageNumberQueryToRoute = usePageNumberQueryToRoute()
  const pageNumber = pageNumberQueryToRoute.getPageNumberQueryValue
  const dispatch = useDispatch()
  const isAuthenticated = useSelector((state) => state.auth.token !== null)
  const coursesEnrolledByStu = useSelector(
    (state) => state.courses.coursesEnrolledByStu
  )
  const { id } = useParams()
  const [exams, setExams] = useState([])
  const [filteredExams, setFilteredExams] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(pageNumber ? pageNumber : 1)
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const pageSize = 5
  let paginatedExams = paginate(filteredExams, currentPage, pageSize)

  const isEnrolledStu = coursesEnrolledByStu
    ? coursesEnrolledByStu.map((course) => course.id).indexOf(+id) !== -1
    : null

  function onFreeExamSwitcherHandler(e) {
    const checked = e.target.checked
    if (checked) {
      setFilteredExams(
        filteredExams.filter(
          (exam) =>
            exam.categoryType.filter((cat) => cat.name === 'Free').length > 0
        )
      )
    } else setFilteredExams(exams) // set the rootExams value to exams
  }

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(fetchCourseEnrolledByStuLoader())
    }
    setLoading(true)
    axios
      .post(process.env.REACT_APP_SITE_URL + '/exams/course/' + id)
      .then((response) => {
        setLoading(false)
        setExams(response.data) // this is the base exams
        setFilteredExams(response.data) // this exams will change on filtration such as filter or free swicher
      })
      .catch((e) => {
        setLoading(false)
        console.log(e)
      })
  }, [id, isAuthenticated, dispatch])

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

      <h3 className='text-center'>
        <span className='mr-2'>Available Exams</span>
      </h3>

      <Row>
        <Col lg={3} className='mb-3'>
          <div className='mb-2'>
            <Button onClick={handleShow}>Exams' Routine</Button>
          </div>
          <ExamFilter
            exams={exams}
            setFilteredExams={setFilteredExams}
            setCurrentPage={setCurrentPage}
          />
        </Col>
        <Col lg={9}>
          {!loading && filteredExams.length < 1 ? (
            <p className='text-center text-danger'>NO Exam is avaiable.</p>
          ) : (
            <>
              {isAuthenticated ? (
                !isEnrolledStu ? (
                  <Form.Check
                    className='ml-2'
                    type='switch'
                    id='custom-switch'
                    label='Sort Free Exams'
                    onChange={onFreeExamSwitcherHandler}
                  />
                ) : (
                  <></>
                )
              ) : (
                <Form.Check
                  className='ml-2'
                  type='switch'
                  id='custom-switch'
                  label='Sort Free Exams'
                  onChange={onFreeExamSwitcherHandler}
                />
              )}
            </>
          )}
          <div className='d-flex justify-content-center flex-wrap mt-2'>
            {paginatedExams &&
              paginatedExams.map((exam) => (
                <ExamByCat key={exam.title} exam={exam} courseId={id} />
              ))}
          </div>
          <br />
          <div className='d-flex justify-content-center mt-3'>
            <Pagination
              activePage={currentPage}
              itemsCountPerPage={pageSize}
              totalItemsCount={filteredExams.length}
              pageRangeDisplayed={3}
              onChange={(page) => {
                pageNumberQueryToRoute.add(page)
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
    </div>
  )
}
