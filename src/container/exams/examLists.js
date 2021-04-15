import React, { Component } from 'react'
import { Spinner } from 'react-bootstrap'
import { injectIntl } from 'react-intl'
import { connect } from 'react-redux'
import GallaryCard from '../../components/exams/gallary/gallaryCard'
import MetaInfo from '../../components/seo/metainfo'
import { RoutesConfig } from '../../config/routes.config'
import { getAllExamsLoader } from '../../store/exams'

export const examType = [
  'Assignment',
  'Weekly',
  'Monthly',
  'Assesment',
  'Term',
  'Test',
  'Final'
]

const contentCenter = {
  //styling to display server response in middle of screen
  position: 'fixed',
  top: '45vh',
  left: '50%',
  zIndex: '10000000000'
}

class ExamLists extends Component {
  componentDidMount() {
    this.props.onGetAllExamsLoader()
  }

  render() {
    return (
      <>
        <MetaInfo {...RoutesConfig.Exams.metaInfo} />
        {this.props.exams.exams.length < 1 && (
          <Spinner
            animation='grow'
            role='status'
            variant='dark'
            style={contentCenter}
          ></Spinner>
        )}
        {/* {this.props.exams.exams.length < 1 && (
          <Spinner
            animation="border"
            role="status"
            variant="dark"
            className="content-center"
          ></Spinner>
        )} */}
        {Object.keys(this.props.exams.exams).map(
          (key) =>
            this.props.exams.exams[key] && (
              <GallaryCard
                key={key}
                title={this.props.intl.formatMessage({
                  id: key,
                  defaultMessage: key
                })}
                exams={this.props.exams.exams[key]}
                examLoader={this.props.onGetAllExamsLoader}
              />
            )
        )}
      </>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGetAllExamsLoader: () => dispatch(getAllExamsLoader())
  }
}
const mapStateToProps = (state) => {
  return {
    exams: state.exams
  }
}

export default injectIntl(
  connect(mapStateToProps, mapDispatchToProps)(ExamLists)
)
