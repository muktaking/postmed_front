import React, { Component } from 'react'
import { Alert, Button, Col, Row } from 'react-bootstrap'
import { FaCopy, FaShoppingBasket } from 'react-icons/fa'
import { connect } from 'react-redux'
import ExamSpec from '../../components/examBuilder/examSpec'
import Filter from '../../components/examBuilder/filter'
import SelectedQuestionsPreview from '../../components/examBuilder/selectedQuestionsPreview'
import MetaInfo from '../../components/seo/metainfo'
import { RoutesConfig } from '../../config/routes.config'
import { fetchCategory } from '../../store/category'
import { fetchCourseLoader } from '../../store/courses'
import {
  getQuestionByCategoryLoader,
  getQuestionLoader
} from '../../store/question'
import { paginate } from '../../utils/paginate'
import MultiSquareLoader from '../../components/customSpinner/multiSquare/multiSquareLoader'
import ExamBuilderAction from './component/examBuilderAction'
import QuestionList from './component/questionList'
import CopyPasteQuestionIds from './component/copyPasteQuestionIds'
import { withPageNumberQueryToRoute } from '../../utils/usePageNumberQueryToRoute'

const styles = {
  questionCart: {
    position: 'fixed',
    bottom: '50px',
    right: '20px',
    width: '50px',
    height: '35px',
    zIndex: '99'
  }
}

function getCategoryParamId(search) {
  return new URLSearchParams(search, [search]).get('categoryId')
}
class ExamPaper extends Component {
  state = {
    filteredQuestions: [], //questions filtered by filter section
    questionCartshow: false, // show the question's cart modal
    questionCart: new Set(), // the question cart
    massQIds: [], //
    pageSize: 10, //for paginate - amaount of questions per page
    currentPage: 1, // for paginate - the current page number
    qTypeState: 'all', // type of qTypeState at filter section - all, sba, matrix
    search: null, // search text
    searchRegxErrorMsg: null,
    showStem: null, // show the stems of question
    copyPasteShow: false // show the copyPasteQuestionIds element
  }
  static getDerivedStateFromProps(props, state) {
    return {
      currentPage: props.getPageNumberQueryValue
    }
  }
  componentDidMount() {
    const categoryParamId = getCategoryParamId(this.props.location.search)
    this.props.onFetchCategoryLoader()
    this.props.onFetchCoursesLoader()
    if (categoryParamId) {
      this.props.onGetQuestionByCategoryLoader(categoryParamId)
    } else {
      this.props.onGetQuestionLoader()
    }
  }
  componentDidUpdate(preProps) {
    if (preProps.editExam !== this.props.editExam) {
      this.setState({
        questionCart: new Set(
          this.props.editExam.questions.map((qId) => parseInt(qId))
        )
      })
    }
    if (preProps.question.questions !== this.props.question.questions) {
      this.setState({
        filteredQuestions: this.props.question.questions
      })
      this.questionsFilterMethod()
    }
  }

  handleQuestionCartShow = () => {
    //show question's cart modal show state
    this.setState({ questionCartshow: true })
  }
  handleQuestionCartShowClose = () => {
    //hide question's cart modal show state
    this.setState({ questionCartshow: false })
  }

  //action to manipulate question at mass amount
  actionHandleChange = (event) => {
    const value = event.target.value
    this.setState((state) => {
      switch (value) {
        case 'mAll':
          this.state.filteredQuestions.forEach((q) =>
            state.questionCart.add(q.id)
          )
          break
        case 'uAll':
          this.state.filteredQuestions.forEach((q) => {
            state.questionCart.delete(q.id)
          })
          break
        case 'mPQ':
          paginate(
            state.filteredQuestions,
            state.currentPage,
            state.pageSize
          ).forEach((q) => {
            state.questionCart.add(q.id)
          })

          break
        case 'uPQ':
          paginate(
            state.filteredQuestions,
            state.currentPage,
            state.pageSize
          ).forEach((q) => {
            state.questionCart.delete(q.id)
          })
          break
        default:
          break
      }
      return { questionCart: state.questionCart }
    })
  }

  removeQuestionsFromCartHandler = (ids) => {
    if (ids) {
      this.setState({ questionCart: new Set(ids) })
    } else this.setState({ questionCart: new Set() })
  }

  categoryChangeHandler = ({ target }) => {
    // the category controller
    this.props.onGetQuestionByCategoryLoader(target.value)
    this.setState({
      currentPage: 1
    })
    this.props.history.replace(
      `${this.props.location.pathname}?categoryId=${target.value}`
    )
  }

  qTypeSwitchFilterHandler = ({ target }) => {
    if (target.name === 'sbaOnly') {
      if (target.checked) {
        this.setState({ qTypeState: 'sba' })
      } else {
        this.setState({ qTypeState: 'all' })
      }
    } else {
      if (target.checked) {
        this.setState({ qTypeState: 'matrix' })
      } else {
        this.setState({ qTypeState: 'all' })
      }
    }
    this.questionsFilterMethod()
  }

  searchFilterHandler = (text) => {
    this.setState({
      search: text,
      searchRegxErrorMsg: null,
      filteredQuestions: this.props.question.questions
    })
    this.questionsFilterMethod()
  }

  questionsFilterMethod = () => {
    this.setState((state) => {
      let filteredQuestions = []
      //switch to change questions based on qType
      switch (state.qTypeState) {
        case 'sba':
          filteredQuestions = state.filteredQuestions.filter(
            (ques) => ques.qType === 'sba'
          )
          break
        case 'matrix':
          filteredQuestions = state.filteredQuestions.filter(
            (ques) => ques.qType === 'matrix'
          )
          break
        default:
          filteredQuestions = this.props.question.questions
          break
      }

      //switch to change questions based on search
      if (state.search) {
        try {
          const rs = new RegExp(state.search, 'i')
          filteredQuestions = filteredQuestions.filter((ques) =>
            rs.test(ques.qText)
          )
        } catch (error) {
          this.setState({ searchRegxErrorMsg: error.message })
          console.log(error)
        }
      }
      return { filteredQuestions: filteredQuestions }
    })
  }

  onPageHandler = (page) => {
    // for pagination
    this.props.addPageNumberQueryValue(page)
    this.setState({ currentPage: page })
  }

  render() {
    const questions = paginate(
      this.state.filteredQuestions,
      this.state.currentPage,
      this.state.pageSize
    )

    return (
      <>
        <MetaInfo {...RoutesConfig.ExamBuilder.metaInfo} />
        {/* Preview questions cart section starts*/}
        {this.state.questionCartshow && (
          <SelectedQuestionsPreview
            questionCart={this.state.questionCart}
            removeQuestionsFromCartHandler={this.removeQuestionsFromCartHandler}
            show={this.state.questionCartshow}
            handleClose={this.handleQuestionCartShowClose}
          />
        )}
        <div style={styles.questionCart}>
          <Button
            onClick={this.handleQuestionCartShow}
            title='Questions Busket'
          >
            <FaShoppingBasket size={'2rem'} />
          </Button>
          <span
            className='bg-danger text-white p-1 text-center'
            style={{ position: 'absolute', top: '-15px', right: '-10px' }}
          >
            {this.state.questionCart.size}
          </span>
        </div>
        {/* Preview questions cart section ends*/}

        <Row>
          <Col lg={4}>
            <Alert variant={'primary'} className='text-center mt-3'>
              Total number of Question is :{this.state.filteredQuestions.length}
            </Alert>

            <Filter
              handleChange={this.categoryChangeHandler}
              categories={this.props.category.categories}
              categoryParamId={getCategoryParamId(this.props.location.search)}
              handleSwitch={this.qTypeSwitchFilterHandler}
              qTypeState={this.state.qTypeState}
              handleSearch={this.searchFilterHandler}
              searchRegxErrorMsg={this.state.searchRegxErrorMsg}
            />
            <ExamBuilderAction actionHandleChange={this.actionHandleChange} />
            <ExamSpec
              categories={this.props.category.categories}
              courses={this.props.courses.courses}
              selectedQuestionIds={Array.from(this.state.questionCart)}
              editExamSpec={this.props.editExam}
            />
          </Col>
          <Col lg={8}>
            <div className='text-center mb-2'>
              <FaCopy
                size='1.4rem'
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  this.setState({ copyPasteShow: !this.state.copyPasteShow })
                }}
              />
            </div>
            {this.props.question.loading && <MultiSquareLoader />}
            {this.state.copyPasteShow && (
              <CopyPasteQuestionIds
                massQIdsHandler={(e) => {
                  this.setState({
                    massQIds: e.target.value.split(',')
                  })
                }}
                addToQuestionCartHandler={() => {
                  this.setState((preState) => {
                    this.state.massQIds.forEach((id) => {
                      if (typeof parseInt(id) === 'number') {
                        preState.questionCart.add(parseInt(id))
                      }
                    })
                    return { questionCart: preState.questionCart }
                  })
                }}
                questionCart={this.state.questionCart}
              />
            )}

            <QuestionList
              questions={questions}
              showStem={this.state.showStem}
              questionCartAddHandler={(value) => {
                this.setState((preState) => ({
                  questionCart: preState.questionCart.add(value)
                }))
              }}
              questionCartDelHandler={(value) => {
                this.setState((preState) => {
                  // Set.delete() method returns boolean wheter it deletes or not
                  if (preState.questionCart.delete(value)) {
                    return { questionCart: preState.questionCart }
                  }
                })
              }}
              questionCart={this.state.questionCart}
              showStemHandler={(value) => {
                this.setState({ showStem: value })
              }}
              currentPage={this.state.currentPage}
              pageSize={this.state.pageSize}
              onPageHandler={this.onPageHandler}
              filteredQuestionslength={this.state.filteredQuestions.length}
            />
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
    onGetQuestionByCategoryLoader: (id) => {
      if (id === 'top') {
        dispatch(getQuestionLoader())
      } else {
        dispatch(getQuestionByCategoryLoader(id))
      }
    }
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withPageNumberQueryToRoute(ExamPaper))
