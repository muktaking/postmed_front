import React from 'react'
import { Badge, Form, FormCheck, ListGroup, Table } from 'react-bootstrap'
import Pagination from '../../../components/pagination/pagination'
import { FaChevronCircleDown, FaEdit, FaRegCheckCircle } from 'react-icons/fa'
import { tagsToObj } from '../../../utils/questionUtils'

export default function QuestionList({
  questions,
  showStem,
  questionCartAddHandler,
  questionCartDelHandler,
  showStemHandler,
  questionCart,
  pageSize,
  currentPage,
  onPageHandler,
  filteredQuestionslength
}) {
  function questionSelectOnChangeHandler(event) {
    const isChecked = event.target.checked
    const value = parseInt(event.target.value) // convert string value to number
    if (isChecked) {
      questionCartAddHandler(value)
    } else {
      questionCartDelHandler(value)
    }
  }
  return (
    <>
      <FormCheck>
        <ListGroup className='my-2'>
          {questions.length < 1 && (
            <p className='text-danger'>No Question in this category.</p>
          )}
          {questions.map((question, index) => {
            const tagObj = tagsToObj(question.tags)
            return (
              <ListGroup.Item
                key={question.id}
                variant={index % 2 === 0 ? 'dark' : 'light'}
              >
                {
                  <Form.Check
                    //ref={this.state.input}
                    inline
                    type='checkbox'
                    value={question.id}
                    onChange={questionSelectOnChangeHandler}
                    checked={questionCart.has(question.id)}
                  />
                }
                <span className='mr-2'>
                  {index + 1 + pageSize * (currentPage - 1)}.
                </span>
                <Badge className='mr-2'>{question.title}</Badge>
                <span>{question.qText}</span>
                <Badge className='ml-2'>{question.qType}</Badge>
                {question.generalFeedback && (
                  <Badge className='ml-2'>
                    GF: <FaRegCheckCircle className='ml-1' color='green' />
                  </Badge>
                )}
                {question.stems[0].fbStem && (
                  <Badge className='ml-2'>
                    FbStem: <FaRegCheckCircle className='ml-1' color='green' />
                  </Badge>
                )}
                <Badge className='ml-2'>Id No. {question.id}</Badge>
                {tagObj?.book && <Badge>Book: {tagObj?.book}</Badge>}
                {tagObj?.author && <Badge>Author: {tagObj?.author}</Badge>}
                {tagObj?.operator && (
                  <Badge>Operator: {tagObj?.operator}</Badge>
                )}
                {tagObj?.programme && (
                  <Badge>
                    Programme:{' '}
                    {tagObj?.programme +
                      '-' +
                      tagObj?.session +
                      '-' +
                      tagObj?.year}
                  </Badge>
                )}
                <span
                  onMouseEnter={() => {
                    showStemHandler(question.id)
                  }}
                  onMouseLeave={() => {
                    showStemHandler(null)
                  }}
                >
                  <FaChevronCircleDown />
                </span>
                {showStem === question.id && (
                  <div className='question-stems-container'>
                    <Table striped bordered hover variant='dark'>
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>qStem</th>
                          <th>aStem</th>
                          <th>fbSten</th>
                        </tr>
                      </thead>
                      <tbody>
                        {question.stems.map((stem, ind) => (
                          <tr>
                            <td>{ind + 1}</td>
                            <td>{stem.qStem}</td>
                            <td>{stem.aStem}</td>
                            <td>{stem.fbStem}</td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>
                )}
                <span className='ml-2'>
                  <a
                    href={`/question?action=edit&questionId=${question.id}`}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <FaEdit />
                  </a>
                </span>
              </ListGroup.Item>
            )
          })}
        </ListGroup>
      </FormCheck>
      <Pagination
        itemsCount={filteredQuestionslength}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageHandler={onPageHandler}
      />
    </>
  )
}
