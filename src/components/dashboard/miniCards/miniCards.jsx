import moment from 'moment'
import React, { Component } from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import { connect } from 'react-redux'
import Rank from './miniInfoBlock/rank'
import Result from './miniInfoBlock/result'
import TotalExam from './miniInfoBlock/totalExam'
import UpcomingExam from './miniInfoBlock/upcomingExam'

class MiniCards extends Component {
  state = {
    key: 'h1'
  }

  componentDidMount() {}

  render() {
    const { totalExam, rank, upcomingExam, result } = this.props.userExamInfo
    return (
      // <div > className='d-md-flex justify-content-around flex-wrap'
      <div>
        <Tabs
          id='controlled-tab-example'
          activeKey={this.state.key}
          onSelect={(k) => {
            this.setState({ key: k })
          }}
          className='mb-3'
        >
          <Tab eventKey='h1' title='H1'>
            <div className='d-md-flex justify-content-around flex-wrap'>
              <TotalExam value={totalExam[0]} footerValue={totalExam[1]} />
              <Rank value={rank[0]} footerValue={rank[1]} />
              <UpcomingExam
                value={upcomingExam[0]}
                id={upcomingExam[2]}
                footerValue={moment(upcomingExam[1]).format('DD-MMM-YYYY')}
              />
              <Result value={result[0]} footerValue={result[1]} />{' '}
            </div>
          </Tab>
          <Tab eventKey='h2' title='H2'>
            <div className='d-md-flex justify-content-around flex-wrap'>
              <TotalExam value={totalExam[0]} footerValue={totalExam[1]} />
              <Rank value={rank[0]} footerValue={rank[1]} />
              <UpcomingExam
                value={upcomingExam[0]}
                id={upcomingExam[2]}
                footerValue={moment(upcomingExam[1]).format('DD-MMM-YYYY')}
              />
              <Result value={result[0]} footerValue={result[1]} />{' '}
            </div>
          </Tab>
          <Tab eventKey='h3' title='H3'>
            <h1>HI 3</h1>
          </Tab>
        </Tabs>
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
