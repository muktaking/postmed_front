import moment from 'moment'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Rank from './miniInfoBlock/rank'
import Result from './miniInfoBlock/result'
import TotalExam from './miniInfoBlock/totalExam'
import UpcomingExam from './miniInfoBlock/upcomingExam'

class MiniCards extends Component {
  componentDidMount() {}

  render() {
    const { totalExam, rank, upcomingExam, result } = this.props.userExamInfo
    return (
      <div className='d-md-flex justify-content-around flex-wrap'>
        <TotalExam value={totalExam[0]} footerValue={totalExam[1]} />
        <Rank value={rank[0]} footerValue={rank[1]} />
        <UpcomingExam
          value={upcomingExam[0]}
          id={upcomingExam[2]}
          footerValue={moment(upcomingExam[1]).format('DD-MM-YYYY')}
        />
        <Result value={result[0]} footerValue={result[1]} />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const mapStateToProps = (state) => {
  return {
    userExamInfo: state.dashboard.userExamInfo
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MiniCards)
