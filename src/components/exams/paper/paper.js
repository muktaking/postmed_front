import React, { Component } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import Pagination from 'react-js-pagination'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { getExamByIdLoader, postExamByIdLoader } from '../../../store/exams'
import { paginate } from '../../../utils/paginate'
import PaginationCustom from '../../pagination/pagination'
import QuestionView from './question/question'

class Paper extends Component {
  state = {
    pageSize: 1,
    currentPage: 1,
    date: Date.now(),
    timeTakenToComplete: 0,
    shouldEndExam: false
  }
  answers = []
  answerIds = new Set()

  onPageHandler = (page) => {
    this.setState({ currentPage: page })
  }

  onSubmitHandler = () => {
    if (confirm('Are You Sure')) {
      this.answerIds.forEach((id) => {
        this.answers.push({
          id: id,
          stems: this.state[id],
          type: _.find(this.props.exams.questions, (o) => o.id === id).qType
        })
      })
      this.props.onPostExamByIdLoader({
        examId: this.props.match.params.id,
        timeTakenToComplete:
          this.props.exams.timeLimit * 60 * 1000 -
          this.state.timeTakenToComplete,
        answers: this.answers
      })
    }
  }
  handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    if (name.includes('_')) {
      const [id, index] = name.split('_')
      this.setState((preState) => {
        if (!preState[id]) preState[id] = []
        preState[id][index - 1] = value
        this.answerIds.add(id)
      })
    } else {
      this.setState((preState) => {
        preState[name] = [value]
        this.answerIds.add(name)
      })
    }
  }
  componentDidMount() {
    this.props.onGetExamByIdLoader(this.props.match.params.id)
  }

  render() {
    const questions = paginate(
      this.props.exams.questions,
      this.state.currentPage,
      this.state.pageSize
    )
    return (
      <>
        <Row className='ml-2'>
          <Col lg={9}>
            {questions.map((question) => (
              <QuestionView
                key={question.id}
                question={question}
                handleChange={this.handleChange}
                defaultChecked={
                  this.state[question.id] ? this.state[question.id] : null
                }
              />
            ))}
            <div className='mt-2 d-flex justify-content-center'>
              <Pagination
                activePage={this.state.currentPage}
                itemsCountPerPage={1}
                totalItemsCount={this.props.exams.questions.length}
                pageRangeDisplayed={1}
                onChange={this.onPageHandler}
                itemClass='page-item'
                linkClass='page-link'
                prevPageText='Previous'
                nextPageText='Next'
              />
            </div>
          </Col>
          <Col lg={3} className='mt-3'>
            <Button onClick={this.onSubmitHandler} className='mb-3 btn-lg'>
              Submit
            </Button>
            <PaginationCustom
              itemsCount={this.props.exams.questions.length}
              pageSize={this.state.pageSize}
              currentPage={this.state.currentPage}
              onPageHandler={this.onPageHandler}
            />
          </Col>
        </Row>
      </>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGetExamByIdLoader: (id) => dispatch(getExamByIdLoader(id)),
    onPostExamByIdLoader: (data) => dispatch(postExamByIdLoader(data))
  }
}
const mapStateToProps = (state) => {
  return {
    exams: state.exams
    //   auth: state.auth,
    //   category: state.category,
    //   api: state.api,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Paper))
