import React, { Component } from "react";
import { Alert, Button, Col, Form, FormCheck, ListGroup, Modal, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { FaShoppingBasket } from 'react-icons/fa';
import { connect } from "react-redux";
import ExamSpec from "../../components/examBuilder/examSpec";
import Filter from "../../components/examBuilder/filter";
import SelectedQuestionsPreview from "../../components/examBuilder/selectedQuestionsPreview";
import Pagination from "../../components/pagination/pagination";
import { fetchCategory } from "../../store/category";
import { selectedQuestionsLoader } from "../../store/examPaper";
import {
  getQuestionByCategoryLoader, getQuestionLoader
} from "../../store/question";
import { paginate } from "../../utils/paginate";


class ExamPaper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      id: null,
      //input: React.createRef(),
      action: null,
      //toogle: false,
      checkedQuestionIds: [],
      checkedQuestions: [],
      //toogleChecked: false,
      pageSize: 10,
      currentPage: 1,
    };
  }

  componentDidMount() {
    this.props.onFetchCategoryLoader();
    this.props.onGetQuestionLoader();
  }

  handleShow = () => {
    this.setState({ show: true });
  };
  handleClose = () => {
    this.setState({ show: false });
  };

  checkHandleChange = (e) => {
    const isChecked = e.target.checked;
    const value = e.target.value;
    const [title, qText] = e.target.name.split("*_*");
    // this.setState({
    //   checkedQuestionIds: [...this.state.checkedQuestionIds, e.target.value],
    // });

    this.setState((preState) => {
      if (isChecked) {
        preState.checkedQuestionIds = [...preState.checkedQuestionIds, value];
        preState.checkedQuestions = [
          ...preState.checkedQuestions,
          { title, qText },
        ];
        //preState.checkedQuestions.push({ title, qText });
      } else {
        preState.checkedQuestionIds = preState.checkedQuestionIds.filter(
          (v) => v !== value
        );
        preState.checkedQuestions = preState.checkedQuestions.filter(
          (v) => v.title !== title
        );
      }
    });
  };

  actionHandleChange = (e)=>{
    e = e.target;
    const v = e.value;

    switch(v){
      case 'mAll':
        this.setState({
          action: 'mAll',
          checkedQuestionIds: this.props.question.questions.map(e=>e.id),
          checkedQuestions: this.props.question.questions
      
      });
        break;
      case 'uAll':
        this.setState({
          action: 'uAll',
          checkedQuestionIds: [],
          checkedQuestions: []
      });
        break;
    }

  }

  handleChange = (e) => {
    e = e.target;
    this.props.onGetQuestionByCategoryLoader(e.value);
    this.setState({
      id: e.value,
    });
  };
  onPageHandler = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    const questions = paginate(
      this.props.question.questions,
      this.state.currentPage,
      this.state.pageSize
    );
    return (
      <>
        <Helmet>
          <title>Exam Builder</title>
        </Helmet>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Selected Questions Preview</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <SelectedQuestionsPreview
              //toogleChecked={this.toogleChecked}
              checkedQuestions={this.state.checkedQuestions}
              checkedQuestionIds={this.state.checkedQuestionIds}
            />
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        <div style={{position:'fixed', bottom: '50px', right: '20px', width: '50px', height: '35px', zIndex:'99'}}>
          <Button onClick={this.handleShow} title="Questions Busket">
            <FaShoppingBasket size={'2rem'}/>
          </Button>
          <span className="bg-danger text-white p-1 text-center" style={{position: 'absolute', top: '-15px' , right: '-10px'}}>
            {this.props.examPaper.questions.length}
          </span>
          
        </div>

        <Row>
          <Col lg={4}>
            <Alert variant={"primary"} className="text-center mt-3">
              Total number of Question is :
              {this.props.question.questions.length}
            </Alert>
            
            <Filter
              handleChange={this.handleChange}
              categories={this.props.category.categories}
            />
            <ExamSpec categories={this.props.category.categories} />
            {/* <SelectedQuestionsPreview
              //toogleChecked={this.toogleChecked}
              checkedQuestions={this.state.checkedQuestions}
              checkedQuestionIds={this.state.checkedQuestionIds}
            /> */}
          </Col>
          <Col lg={8}>
            {
              <FormCheck>
                <ListGroup className="my-2">
                  {questions.length < 1 && <p className="text-danger">No Question in this category.</p>}
                  {questions.map((question, index) => (
                    <ListGroup.Item
                      key={question.id}
                      variant={index % 2 === 0 ? "dark" : "light"}
                    >
                      { this.state.action === null &&
                        <Form.Check
                        //ref={this.state.input}
                          inline
                          type="checkbox"
                          value={question.id}
                          onChange={this.checkHandleChange}
                          name={question.title + "*_*" + question.qText}
                          defaultChecked={this.state.checkedQuestionIds.includes(
                            question.id
                          )}
                        />
                      }
                

                      {this.state.action === 'mAll' &&
                        <Form.Check
                        //ref={this.state.input}
                          inline
                          type="checkbox"
                          checked={true}
                          value={question.id}
                          onChange={this.checkHandleChange}
                          name={question.title + "*_*" + question.qText}
                          defaultChecked={this.state.checkedQuestionIds.includes(
                            question.id
                          )}
                        /> }

                      {this.state.action === 'uAll' &&
                        <Form.Check
                        //ref={this.state.input}
                          inline
                          type="checkbox"
                          checked={false}
                          value={question.id}
                          onChange={this.checkHandleChange}
                          name={question.title + "*_*" + question.qText}
                          defaultChecked={this.state.checkedQuestionIds.includes(
                            question.id
                          )}
                        />
                      }
                      
                      {`${index + 1}. ${question.title} --> ${question.qText}`}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </FormCheck>
            }
            <Pagination
              itemsCount={this.props.question.questions.length}
              pageSize={this.state.pageSize}
              currentPage={this.state.currentPage}
              onPageHandler={this.onPageHandler}
            />

            <div className="d-flex justify-content-center align-items-center">

              <Button
                onClick={() => {
                  //this.setState({ toogleChecked: !this.state.toogleChecked });
                  this.props.onSelectedQuestionsLoader(
                    this.state.checkedQuestions,
                    this.state.checkedQuestionIds
                  );
                }}
                className="mr-5 mb-2 mb-sm-0"
              >
                Add to Preview Cart
              </Button>
              {/* onChange={actionHandleChange} */}
              <Form.Group controlId="formGridParent">
                <Form.Label>Actions</Form.Label>
                <Form.Control as="select" name="action" onChange={this.actionHandleChange}  >
                <option>Select...</option>
                  <option value="mAll">Mark All</option>
                  <option value="uAll">UnMark All</option>
                </Form.Control>
              </Form.Group>

            </div>
          </Col>
        </Row>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchCategoryLoader: () => dispatch(fetchCategory()),
    onGetQuestionLoader: () => dispatch(getQuestionLoader()),
    onGetQuestionByCategoryLoader: (id) =>
      dispatch(getQuestionByCategoryLoader(id)),
    onSelectedQuestionsLoader: (questions, ids) =>
      dispatch(selectedQuestionsLoader(questions, ids)),
  };
};
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    question: state.question,
    category: state.category,
    api: state.api,
    examPaper: state.examPaper,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExamPaper);
