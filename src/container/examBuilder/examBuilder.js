import React, { Component } from 'react'
import {
  Alert,
  Badge,
  Button,
  Col,
  Form,
  FormCheck,
  ListGroup,
  Modal,
  Row
} from 'react-bootstrap'
import { FaShoppingBasket } from 'react-icons/fa'
import { connect } from 'react-redux'
import { FaRegCheckCircle } from 'react-icons/fa'
import ExamSpec from '../../components/examBuilder/examSpec'
import Filter from '../../components/examBuilder/filter'
import SelectedQuestionsPreview from '../../components/examBuilder/selectedQuestionsPreview'
import Pagination from '../../components/pagination/pagination'
import MetaInfo from '../../components/seo/metainfo'
import { RoutesConfig } from '../../config/routes.config'
import { fetchCategory } from '../../store/category'
import { fetchCourseLoader } from '../../store/courses'
import {
  getQuestionByCategoryLoader,
  getQuestionLoader
} from '../../store/question'
import { paginate } from '../../utils/paginate'

class ExamPaper extends Component {
  state = {
    show: false,
    selectedQuestions: [],
    massQIds: [],
    pageSize: 10,
    currentPage: 1,
    qTypeState: 'all',
    search: null
  }
  componentDidMount() {
    this.props.onFetchCategoryLoader()
    this.props.onFetchCoursesLoader()
    this.props.onGetQuestionLoader()
  }

  componentDidUpdate(preProps) {
    if (preProps.editExam !== this.props.editExam) {
      // a very bad and resource consuming computing
      const editQuestions = this.props.editExam.questions.map((e) => {
        const [question] = this.props.question.questions.filter((q) => {
          return q.id.toString() === e
        })

        this.setState({
          [e]: {
            checked: true,
            id: +e,
            title: question && question.title,
            qText: question && question.qText
          }
        })

        return {
          checked: true,
          id: +e,
          title: question && question.title,
          qText: question && question.qText
        }
      })

      this.setState({
        selectedQuestions: editQuestions
      })
    }
  }

  handleShow = () => {
    //control modal show state
    this.setState({ show: true })
  }
  handleClose = () => {
    //control modal show state
    this.setState({ show: false })
  }

  checkHandleChange = (e, question) => {
    const isChecked = e.target.checked
    const value = e.target.value

    if (isChecked) {
      this.setState({
        [value]: {
          checked: true,
          id: question.id,
          title: question.title,
          qText: question.qText
        }
      })
    } else {
      this.setState({
        [value]: {
          checked: false
        }
      })
    }
  }

  actionHandleChange = (e, questions) => {
    e = e.target
    const v = e.value

    switch (v) {
      case 'mAll':
        questions.forEach((e) => {
          this.setState({
            [e.id]: { checked: true, id: e.id, title: e.title, qText: e.qText }
          })
        })
        break
      case 'uAll':
        questions.forEach((e) => {
          this.setState({ [e.id]: { checked: false } })
        })
        break
      case 'mPQ':
        paginate(
          questions,
          this.state.currentPage,
          this.state.pageSize
        ).forEach((e) => {
          this.setState({
            [e.id]: { checked: true, id: e.id, title: e.title, qText: e.qText }
          })
        })
        break
      case 'uPQ':
        paginate(
          questions,
          this.state.currentPage,
          this.state.pageSize
        ).forEach((e) => {
          this.setState({
            [e.id]: { checked: false }
          })
        })
        break
      default:
        break
    }
  }

  selectedQuestionsHandler = (id) => {
    this.setState({
      selectedQuestions: this.state.selectedQuestions.filter(
        (question) => question.id !== +id
      ),
      [id]: { checked: false }
    })
  }

  handleChange = (e) => {
    // the category controller
    e = e.target
    this.props.onGetQuestionByCategoryLoader(e.value)
    this.setState({
      id: e.value,
      currentPage: 1
    })
  }

  handleSwitch = (e) => {
    if (e.target.name === 'sbaOnly') {
      if (e.target.checked) {
        this.setState({ qTypeState: 'sba' })
      } else {
        this.setState({ qTypeState: 'all' })
      }
    } else {
      if (e.target.checked) {
        this.setState({ qTypeState: 'matrix' })
      } else {
        this.setState({ qTypeState: 'all' })
      }
    }
  }

  handleSearch = (text) => {
    this.setState({ search: text })
  }
  matchSearch = (questions) => {
    if (this.state.search) {
      const rs = new RegExp(this.state.search, 'i')
      return questions.filter((ques) => rs.test(ques.qText))
    }
    return null
  }

  questionsFilterMethod = () => {
    const quesByQType =
      this.state.qTypeState === 'sba'
        ? this.props.question.questions.filter((ques) => ques.qType === 'sba')
        : this.state.qTypeState === 'matrix'
        ? this.props.question.questions.filter(
            (ques) => ques.qType === 'matrix'
          )
        : this.props.question.questions
    const quesBySearch = this.state.search
      ? this.matchSearch(quesByQType, this.state.search)
      : quesByQType
    return [quesBySearch, quesBySearch.length]
  }

  onPageHandler = (page) => {
    // for pagination
    this.setState({ currentPage: page })
  }

  render() {
    // const quesByQType =
    //   this.state.qTypeState === 'sba'
    //     ? this.props.question.questions.filter((ques) => ques.qType === 'sba')
    //     : this.state.qTypeState === 'matrix'
    //     ? this.props.question.questions.filter(
    //         (ques) => ques.qType === 'matrix'
    //       )
    //     : this.props.question.questions

    // const quesBySearch = this.state.search
    //   ? this.matchSearch(quesByQType, this.state.search)
    //   : quesByQType
    const [questionsFiltered, questionsFilteredLength] =
      this.questionsFilterMethod()

    const questions = paginate(
      questionsFiltered,
      this.state.currentPage,
      this.state.pageSize
    )

    const checkedQuestionIds = Object.keys(this.state).filter(
      (key) => !isNaN(key) && this.state[key].checked
    )

    return (
      <>
        <MetaInfo {...RoutesConfig.ExamBuilder.metaInfo} />
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Selected Questions Preview</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <SelectedQuestionsPreview
              selectedQuestions={this.state.selectedQuestions}
              selectedQuestionsHandler={this.selectedQuestionsHandler}
            />
          </Modal.Body>

          <Modal.Footer>
            <Button variant='secondary' onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Preview questions cart */}
        <div
          style={{
            position: 'fixed',
            bottom: '50px',
            right: '20px',
            width: '50px',
            height: '35px',
            zIndex: '99'
          }}
        >
          <Button onClick={this.handleShow} title='Questions Busket'>
            <FaShoppingBasket size={'2rem'} />
          </Button>
          <span
            className='bg-danger text-white p-1 text-center'
            style={{ position: 'absolute', top: '-15px', right: '-10px' }}
          >
            {this.state.selectedQuestions.length}
          </span>
        </div>

        <Row>
          <Col lg={4}>
            <Alert variant={'primary'} className='text-center mt-3'>
              Total number of Question is :{questionsFilteredLength}
            </Alert>

            <Filter
              handleChange={this.handleChange}
              categories={this.props.category.categories}
              handleSwitch={this.handleSwitch}
              qTypeState={this.qTypeState}
              handleSearch={this.handleSearch}
            />
            <ExamSpec
              categories={this.props.category.categories}
              courses={this.props.courses.courses}
              selectedQuestionIds={this.state.selectedQuestions.map(
                (q) => q.id
              )}
              editExamSpec={this.props.editExam}
            />
          </Col>
          <Col lg={8}>
            <FormCheck>
              <ListGroup className='my-2'>
                {questions.length < 1 && (
                  <p className='text-danger'>No Question in this category.</p>
                )}
                {questions.map((question, index) => (
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
                        onChange={(e) => {
                          this.checkHandleChange(e, question)
                        }}
                        checked={
                          this.state[question.id] &&
                          this.state[question.id].checked
                        }
                      />
                    }
                    <span className='mr-2'>
                      {index +
                        1 +
                        this.state.pageSize * (this.state.currentPage - 1)}
                      .
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
                        FbStem:{' '}
                        <FaRegCheckCircle className='ml-1' color='green' />
                      </Badge>
                    )}
                    <Badge className='ml-2'>Id No. {question.id}</Badge>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </FormCheck>
            <p className='text-muted'>
              ** Please add checked questions to{' '}
              <Badge variant='info'>Preview Cart</Badge>. Otherwise no questions
              will be avaiable in exam.
            </p>
            <Pagination
              itemsCount={questionsFilteredLength}
              pageSize={this.state.pageSize}
              currentPage={this.state.currentPage}
              onPageHandler={this.onPageHandler}
            />

            <div className='my-3'>
              <Form>
                <Form.Group controlId='massQIds'>
                  <Form.Label>
                    Enter Question's Ids (Comma seperated Values)
                  </Form.Label>
                  <Form.Control
                    type='text'
                    name=' massQIds'
                    placeholder='12,3,25,103,...'
                    onChange={(e) => {
                      this.setState({
                        massQIds: e.target.value.split(',').map((e) => +e)
                      })
                    }}
                  />
                </Form.Group>
              </Form>
            </div>

            <div className='d-flex justify-content-center align-items-center'>
              <Button
                onClick={() => {
                  this.setState({
                    selectedQuestions: [
                      ...checkedQuestionIds.map((id) => this.state[id]),
                      ...this.state.massQIds
                    ]
                  })
                }}
                className='mr-5 mb-2 mb-sm-0'
              >
                Add Questions to Preview Cart
              </Button>

              <Form.Group controlId='formGridParent'>
                <Form.Label>Actions</Form.Label>
                <Form.Control
                  as='select'
                  name='action'
                  onChange={(e) => {
                    this.actionHandleChange(e, questionsFiltered)
                  }}
                >
                  <option>Select...</option>
                  <option value='mAll'>Mark All</option>
                  <option value='uAll'>UnMark All</option>
                  <option value='mPQ'>Mark The On Page's Questiones </option>
                  <option value='uPQ'>UnMark The On Page's Questiones</option>
                </Form.Control>
              </Form.Group>
            </div>
            <div className='my-3'>
              <Alert
                className='d-flex justify-content-between'
                variant='success'
              >
                <span className='mr-3 overflow-auto'>
                  {this.state.selectedQuestions.map((q) => q.id).join(',')}
                </span>
                <Button
                  variant='primary'
                  onClick={() => {
                    navigator.clipboard.writeText(
                      this.state.selectedQuestions.map((q) => q.id).join(',')
                    )
                  }}
                >
                  Copy
                </Button>
              </Alert>
            </div>
          </Col>
        </Row>
      </>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchCategoryLoader: () => dispatch(fetchCategory()),
    onFetchCoursesLoader: () => dispatch(fetchCourseLoader()),
    onGetQuestionLoader: () => dispatch(getQuestionLoader()),
    onGetQuestionByCategoryLoader: (id) =>
      dispatch(getQuestionByCategoryLoader(id))
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    question: state.question,
    category: state.category,
    api: state.api,
    courses: state.courses
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExamPaper)
