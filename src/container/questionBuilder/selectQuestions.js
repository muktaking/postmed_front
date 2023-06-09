import React, { useEffect, useRef, useState } from 'react'
import { Form, ListGroup, Toast } from 'react-bootstrap'
import Pagination from 'react-js-pagination'
import { useDispatch, useSelector } from 'react-redux'
import CircleLoader from '../../components/customSpinner/circleLoader/circleLoader'
import { fetchCategory } from '../../store/category'
import {
  getQuestionByCategoryLoader,
  resetResponseLoader
} from '../../store/question'
import { paginate } from '../../utils/paginate'
import MiniQues from './component/miniques'
import PdfRenderer from '../../components/pdf/pdfRenderer'
import { Modal, Button } from 'react-bootstrap'
import Axios from 'axios'

export default function SelectQuestions({ viewHandler }) {
  const [showModal, setShowModal] = useState(false)
  const [showDelRes, setshowDelRes] = useState(null)
  const [showPdfButton, setShowPdfButton] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [currentCategory, setCurrentCategory] = useState(null)
  const dispatch = useDispatch()
  const categories = useSelector((state) => state.category.categories)
  const questions = useSelector((state) => state.question.questions)
  const loading = useSelector((state) => state.question.loading)
  const res = useSelector((state) => state.question.response)

  const quesDelRef = useRef()

  useEffect(() => {
    dispatch(fetchCategory())
  }, [dispatch])
  const onPageHandler = (page) => {
    setCurrentPage(page)
  }

  const handleChange = (e) => {
    dispatch(getQuestionByCategoryLoader(e.target.value))
    setCurrentCategory(e.target.value)
  }
  const questionsForPagi = paginate(questions, currentPage, 10)

  const setRes = () => {
    dispatch(resetResponseLoader())
    dispatch(getQuestionByCategoryLoader(currentCategory.split('#')[0]))
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  const massdeleteQuestions = () => {
    Axios.delete(`${process.env.REACT_APP_SITE_URL}/questions`, {
      data: { ids: quesDelRef.current.value }
    })
      .then((delRes) => {
        setshowDelRes(delRes.data.message + JSON.stringify(delRes.data.data))
      })
      .catch((e) => {
        setshowDelRes(e.response.data.message)
      })
  }
  return (
    <div>
      {loading && <CircleLoader />}

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title className='text-danger'>Delete Questions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {showDelRes ? (
            <p>{showDelRes} </p>
          ) : (
            <Form.Group controlId='exampleForm.ControlTextarea1'>
              <Form.Label>Enter questions' ids (comma seperated)</Form.Label>
              <Form.Control as='textarea' rows={3} ref={quesDelRef} />
            </Form.Group>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant='danger' onClick={massdeleteQuestions}>
            Delete All
          </Button>
          <Button variant='secondary' onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Toast
        show={res}
        onClose={setRes}
        style={{ position: 'fixed', right: '20px' }}
      >
        <Toast.Header>
          <strong className='mr-auto'>Response</strong>
        </Toast.Header>
        <Toast.Body>{res && JSON.stringify(res)}</Toast.Body>
      </Toast>

      <div className='d-flex flex-grow-2'>
        <div>
          <Form.Group controlId='categoryType' className='mr-5'>
            <Form.Label>Category Type</Form.Label>
            <Form.Control
              as='select'
              name='categoryType'
              onChange={handleChange}
            >
              <option value=''>Select...</option>
              {categories.map((value) => {
                let categorySlug = value.slug.replace(/_/g, ' / ')
                return (
                  <option value={value.id + '#' + categorySlug}>
                    {categorySlug}
                  </option>
                )
              })}
            </Form.Control>
          </Form.Group>
          <div className='my-5'>
            <Button
              onClick={() => {
                setShowPdfButton(!showPdfButton)
              }}
            >
              Show Pdf Renderer Button
            </Button>
            <div className='mt-3'>
              {showPdfButton && (
                <PdfRenderer
                  questions={questions}
                  name={currentCategory.split('#')[1]}
                />
              )}
            </div>
          </div>
          <div>
            <Button
              onClick={() => {
                setShowModal(true)
              }}
              variant='danger'
            >
              Bulk Delete Modal
            </Button>
          </div>
        </div>
        <div>
          <ListGroup className='my-2'>
            {questions.length < 1 && (
              <p className='text-danger'>No Question in this category.</p>
            )}
            {questionsForPagi.map((question, index) => (
              <ListGroup.Item
                key={question.id}
                variant={index % 2 === 0 ? 'dark' : 'light'}
                className='d-flex'
              >
                <div className='mt-1 mr-3'>
                  {index + 1 + (currentPage - 1) * 10}.
                </div>
                <MiniQues question={question} viewHandler={viewHandler} />
              </ListGroup.Item>
            ))}
          </ListGroup>
          <Pagination
            activePage={currentPage}
            itemsCountPerPage={10}
            totalItemsCount={questions.length}
            pageRangeDisplayed={4}
            onChange={onPageHandler}
            itemClass='page-item'
            linkClass='page-link'
            prevPageText='Previous'
            nextPageText='Next'
          />
        </div>
      </div>
    </div>
  )
}
