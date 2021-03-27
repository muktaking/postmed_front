import React, { Component } from "react";
import { injectIntl } from 'react-intl';
import { connect } from "react-redux";
import GallaryCard from "../../components/exams/gallary/gallaryCard";
import MetaInfo from '../../components/seo/metainfo';
import { RoutesConfig } from '../../config/routes.config';
import { getAllExamsLoader } from "../../store/exams";

class ExamLists extends Component {

  componentDidMount() {
    this.props.onGetAllExamsLoader();
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
      <MetaInfo {...RoutesConfig.Exams.metaInfo} />
      
      {/* {this.props.exams.exams.length < 1 && (
          <Spinner
            animation="border"
            role="status"
            variant="dark"
            className="content-center"
          ></Spinner>
        )} */}
        {Object.keys(this.props.exams.exams).map(key=> this.props.exams.exams[key] && 
        <GallaryCard
        key={key} 
        title={this.props.intl.formatMessage({id: key, defaultMessage: key})} 
        exams={this.props.exams.exams[key]}
        examLoader = {this.props.onGetAllExamsLoader}
        />)}
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGetAllExamsLoader: () => dispatch(getAllExamsLoader()),
  };
};
const mapStateToProps = (state) => {
  return {
    exams: state.exams,
  };
};

export default injectIntl(connect(mapStateToProps, mapDispatchToProps)((ExamLists)));
