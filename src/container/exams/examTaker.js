/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { Component } from "react";
import {
  Alert,
  Button,
  Col, Form,
  Modal,
  Row
} from "react-bootstrap";
import { animateScroll as scroll } from 'react-scroll'
import Countdown from "react-countdown";
import { Helmet } from "react-helmet";
//import { FaRegArrowAltCircleDown, FaRegArrowAltCircleUp} from 'react-icons/fa';
import { injectIntl } from 'react-intl';
import Pagination from "react-js-pagination";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Redirect } from "react-router-dom";
//import { Link as LinkScroll } from "react-scroll";
import CircleLoader from "../../components/customSpinner/circleLoader/circleLoader";
import QuestionView from "../../components/exams/paper/question/question";
import SubNavBar from "../../components/navbar/subNavBar";
import PaginationCustom from "../../components/pagination/pagination";
import {
  disableQuestionsAdd,
  getExamByIdLoader,
  getFreeExamByIdLoader,
  postExamByIdLoader,
  postFreeExamByIdLoader,
  resetExamResultLoader
} from "../../store/exams";
import { paginate } from "../../utils/paginate";
import PreExamNotification from "./component/preExamNotification";
import ExamCountDownClock from "./component/examCountDownClock";
//import Axios from "axios";



class ExamTaker extends Component {
  state = {
    loading: false,
    //For Pagination
    pageSize: 1,
    currentPage: 1,
    //For Main Answer Sheet React CountDown
    date: Date.now(),
    //use in ending exam
    timeExpired: false,
    modalShow: false,
    arrowState: true,
    showPagination: true,
    examStartDialogue: true
  };

  timeTakenToComplete = 0;
  answers = [];
  answerIds = new Set();

  modalShow = () => {
    this.setState({ modalShow: true });
  };
  modalHide = () => {
    this.setState({ modalShow: false });
  };

  examStartDialogueHandler = ()=>{
    // const examId = this.props.match.params.id.split('_')[0];
    // const courseId = this.props.match.params.id.split('_')[1]

    this.setState({ examStartDialogue: false });
    this.setState({date: Date.now()});
    
    // if(!this.props.free){
    //     Axios.get(process.env.REACT_APP_SITE_URL + '/postexams/preexamtasking?courseId=' + courseId + '&examId=' + examId)
    //     .then(res=> console.log(res.data))
    //     .catch(error=> console.log(error))
    //   }
  }

  //For paination
  onPageHandler = (page) => {
    scroll.scrollTo(100, {duration: 500});
    this.setState({ currentPage: page });
  };

  onHandleChange = (e) => {
        
    const name = e.target.name;
    const value = e.target.value;
    
    this.props.onDisableQuestionsAddLoader(name);

    if (name.includes("_")) {
      const [id, index] = name.split("_");
      this.setState((preState) => {
        if (!preState[id]) preState[id] = [];
        preState[id][index - 1] = value;
        this.answerIds.add(id);
      });
    } else {
      this.setState((preState) => {
        preState[name] = [value];
        this.answerIds.add(name);
      });
    }
  };

  onSwithchHandleChange = (e) => {
    const checked = e.target.checked;
    if(checked) {
      this.setState({pageSize: this.props.exams.questions.length, currentPage: 1 , showPagination: false});
    }
    else{
      this.setState({pageSize: 1, showPagination: true});
    }
    

  }

  // for submitting Answer Sheet
  onSubmitHandler = () => {
    const examId = this.props.match.params.id.split('_')[0];
    const courseId = this.props.match.params.id.split('_')[1]
    this.setState({ loading: true });

    this.answerIds.forEach((id) => {
      this.answers.push({
        id: id,
        stems: this.state[id],
        type: _.find(this.props.exams.questions, (o) => o.id === +id).qType,
      });
    });
    if (this.props.free) {
      this.props.onPostFreeExamByIdLoader({
        examId,
        timeTakenToComplete: (this.timeTakenToComplete / 60).toFixed(4),
        answers: this.answers,
        questionIdsByOrder: this.props.exams.questionIdsByOrder,
      });
    } else {
      this.props.onPostExamByIdLoader({
        examId,
        courseId,
        timeTakenToComplete: Math.ceil(this.timeTakenToComplete / 60).toFixed(
          4
        ),
        answers: this.answers,
        questionIdsByOrder: this.props.exams.questionIdsByOrder,
      });
    }
  };

  componentDidMount() {
    this.props.onResetExamLoader();
    if (!this.props.free) {
      this.props.onGetExamByIdLoader(this.props.match.params.id);
    } else {
      this.props.onGetFreeExamByIdLoader(this.props.match.params.id);
    }
  }


  render() {
    const questions = paginate(
      this.props.exams.questions,
      this.state.currentPage,
      this.state.pageSize
    );

    return (
      <>
        <Helmet>
          <title>Exam- test your knowledge</title>
        </Helmet>
        {(this.props.exams.examResult || this.props.exams.error) && (
          <Redirect to="/result" />
        )}

        {(this.props.exams.loading) && (
          <CircleLoader />
        )}

        
        {/* Modal tests are you want submit or time expired*/}
        <Modal show={this.state.modalShow} onHide={this.modalHide}>
          {this.state.loading ? 

          <p className="lead mt-5 text-center">Your submitted Exam is processing...</p>
          
          : this.state.timeExpired ? (
            <>
              <Modal.Header>
                <Modal.Title className="text-danger">Time Expired</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div>
                  <p className="lead">You will Taken To Result Page.</p>
                  <Countdown
                    date={Date.now() + 5 * 1000}
                    renderer={({ seconds }) => (
                      <p
                        className="text-center text-danger"
                        style={{ fontSize: "2rem" }}
                      >
                        {seconds}
                      </p>
                    )}
                    onComplete={this.onSubmitHandler}
                  />
                </div>
              </Modal.Body>
            </>
          ) : (
            <>
              <Modal.Header closeButton>
                <Modal.Title>
                {this.props.intl.formatMessage({id: 'btn.sas', defaultMessage: "Submit Answer Sheet"})}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div>
                  <p className="lead">
                    {this.answerIds.size > 0 ? this.props.intl.formatMessage({id: 'et.agree', defaultMessage: "Are You Sure ? You will be taken to result page after submitting. "}) : 'For submiiting you have to answer atleast one question.'}
                  </p>
                  <p>
                    {this.answerIds.size !== this.props.exams.questions.length && <span>You do no answer<span className="text-danger"> {this.props.exams.questions.length - this.answerIds.size} </span> questions.</span> }
                  
                  </p>
                  {/* countdown to proceed for result after clicking the submit button */}
                  <Countdown
                    date={Date.now() + 10 * 1000}
                    renderer={({ seconds }) => (
                      <p
                        className="text-center text-danger"
                        style={{ fontSize: "2rem" }}
                      >
                        {seconds}
                      </p>
                    )}
                    onComplete={this.modalHide}
                  />
                  <p className="text-muted text-center">Modal is closing...</p>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.modalHide}>
                {this.props.intl.formatMessage({id: 'et.no', defaultMessage: "Go Back"})}
                  
                </Button>
                <Button variant="primary" onClick={
                  this.onSubmitHandler
                  } disabled={this.answerIds.size === 0 }>
                {this.props.intl.formatMessage({id: 'et.yes', defaultMessage: "Submit, Answers"})}
                </Button>
              </Modal.Footer>
            </>
          )}
        </Modal>
        {this.props.exams.examError ? (
          <>
            <Alert variant="danger" className="text-center mt-5">
              <h2>{this.props.exams.examError}</h2>
              <h4>Possible Solution</h4>
              {
                this.props.auth.token
                ? <p>You may not enrolled for the course. Please enroll first.</p> 
                :<p> You are not logged in. So you can not participate exams other
                than free. So login or participate free exam only.
              </p>
              }
              
            </Alert>
            <SubNavBar />
          </>
        ) :
          this.props.exams.timeLimit && (
            this.state.examStartDialogue ? <PreExamNotification exams={this.props.exams} examStartDialogueHandler={this.examStartDialogueHandler} /> :
            // !window.confirm('Are You Sure.\n Exam Rules: 1) For True-false based question select true or false for each stem. \n 2) For multiple choice question, select the correct answer only.') ? this.props.history.goBack() :
            
            <>
              <div className="text-dark text-center px-2 pt-3 pb-2 mt-1 bg-light sticky-top">
                <div className="d-flex justify-content-around mb-2">
                  <Form.Switch
                  id="custom-switch"
                  label={this.props.intl.formatMessage({id: 'btn.aqv', defaultMessage: "Switch to All Questions View"})}
                  className="mr-2"
                  onChange={this.onSwithchHandleChange}
                  > 

                  </Form.Switch>
                  <Button onClick={this.modalShow} className="btn-md">
                    {this.props.intl.formatMessage({id: 'btn.sas', defaultMessage: "Submit Answer"})}
                  </Button>
                </div>

                {/* Exam Clock */}
                 <Countdown
                  date={this.state.date + this.props.exams.timeLimit * 60 * 1000}
                  renderer={ExamCountDownClock}
                  onTick={() => {
                    this.timeTakenToComplete++;
                  }}
                  onComplete={() => {
                    this.setState({ timeExpired: true, modalShow: true });
                  }}
                />
                
              </div>
                          
              {/* <div className="scroll-container d-flex justify-content-center flex-wrap">
                <LinkScroll
                  to={"et-top"}
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                >
                  <FaRegArrowAltCircleUp size={"1.2rem"} />
                  
                </LinkScroll>

                <LinkScroll
                  to={"qNavigator"}
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                >
                  <FaRegArrowAltCircleDown size={"1.2rem"}/>

                </LinkScroll>
              </div> */} 
            <Row id="et-top">  
              <Col lg={9}>
                {questions.map((question, ind) => (
                  <QuestionView
                    key={question.id}
                    question={question}
                    handleChange={this.onHandleChange}
                    defaultChecked={
                      this.state[question.id] ? this.state[question.id] : null
                    }
                    index={this.state.showPagination ? (this.state.currentPage * this.state.pageSize) : (ind + 1)}
                    isAnswerRestricted = {this.props.exams.isAnswerRestricted}
                  />
                ))}
                <div className="mt-2 d-flex justify-content-center">
                  {this.state.showPagination && <Pagination
                    activePage={this.state.currentPage}
                    itemsCountPerPage={1}
                    totalItemsCount={this.props.exams.questions.length}
                    pageRangeDisplayed={1}
                    onChange={this.onPageHandler}
                    itemClass="page-item"
                    linkClass="page-link"
                    prevPageText="Previous"
                    nextPageText="Next"
                  /> }
                  
                </div>
              </Col>
              <Col lg={3} className="mt-3" id="qNavigator">
              {this.state.showPagination && <PaginationCustom
                  itemsCount={this.props.exams.questions.length}
                  pageSize={this.state.pageSize}
                  currentPage={this.state.currentPage}
                  onPageHandler={this.onPageHandler}
                />}
              </Col>
          </Row>
          </>
          )}
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGetExamByIdLoader: (id) => dispatch(getExamByIdLoader(id)),
    onGetFreeExamByIdLoader: (id) => dispatch(getFreeExamByIdLoader(id)),
    onPostExamByIdLoader: (data) => dispatch(postExamByIdLoader(data)),
    onPostFreeExamByIdLoader: (data) => dispatch(postFreeExamByIdLoader(data)),
    onResetExamLoader: () => dispatch(resetExamResultLoader()),
    onDisableQuestionsAddLoader: (name) => dispatch({type: disableQuestionsAdd.type, payload: name})
  };
};
const mapStateToProps = (state) => {
  return {
    exams: state.exams,
    auth: state.auth,
    //   category: state.category,
    //   api: state.api,
  };
};

export default injectIntl(connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ExamTaker)));
