import React, { Component } from 'react'
import { injectIntl } from 'react-intl'
import { connect } from 'react-redux'
import GallaryCard from '../../components/exams/gallary/gallaryCard'
import MetaInfo from '../../components/seo/metainfo'
import Spinner from '../../components/shared/spinner/spinner'
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

export const examTypeBgColor = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'dark'
]

class ExamLists extends Component {
  componentDidMount() {
    this.props.onGetAllExamsLoader()
  }

  render() {
    return (
      <>
        <MetaInfo {...RoutesConfig.Exams.metaInfo} />
        {this.props.exams.exams.length < 1 && <Spinner />}
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
