import React, { Component } from "react";
import { Spinner } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import GallaryCard from "../../components/exams/gallary/gallaryCard";
import { getAllExamsLoader, resetExamResult } from "../../store/exams";


class ExamLists extends Component {
  
  componentDidMount() {
    this.props.onGetAllExamsLoader();
    this.props.onResetExamResult();
  }
  type = [
    "Assignment",
    "Weekly",
    "Monthly",
    "Assesment",
    "Term",
    "Test",
    "Final",
  ];
  render() {
    return (
      <>
      <Helmet>
        <title>List of Exams</title>
      </Helmet>
      {this.props.exams.exams.length < 1 && (
          <Spinner
            animation="border"
            role="status"
            variant="dark"
            className="content-center"
          ></Spinner>
        )}
        {Object.keys(this.props.exams.exams).map(key=> this.props.exams.exams[key] && <GallaryCard title={key} exams={this.props.exams.exams[key]} />)}
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGetAllExamsLoader: () => dispatch(getAllExamsLoader()),
    onResetExamResult: () => dispatch({ type: resetExamResult.type }),
  };
};
const mapStateToProps = (state) => {
  return {
    exams: state.exams,
    //   auth: state.auth,
    //   category: state.category,
    //   api: state.api,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExamLists);
