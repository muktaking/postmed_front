//import moment from 'moment'
import * as moment from 'dayjs'
import React, { Component } from 'react'
import { Alert, ListGroup, Table } from 'react-bootstrap'
import { FormattedMessage } from 'react-intl'
import { connect } from 'react-redux'
import { examRankByIdLoader } from '../../store/exams'
import CircleLoader from '../../components/customSpinner/circleLoader/circleLoader'

class Rank extends Component {
  componentDidMount() {
    const courseId = this.props.match.params.id.includes('_')
      ? this.props.match.params.id.split('_')[0]
      : null
    this.props.onExamRankByLoader(
      this.props.match.params.id.split('_')[1],
      courseId
    )
  }
  render() {
    return (
      <div className='mt-5'>
        {this.props.rankLoading && <CircleLoader />}
        <h3 className='text-center'>
          <FormattedMessage id='btn.rank' defaultMessage='Rank' />
        </h3>
        <div>
          {this.props.exam && (
            <ListGroup horizontal={'lg'}>
              <ListGroup.Item>
                <FormattedMessage id='exam' defaultMessage='Exams' /> :{' '}
                {this.props.exam.title}
              </ListGroup.Item>
              <ListGroup.Item>
                <FormattedMessage id='db.os' defaultMessage='Total Mark' /> :{' '}
                {this.props.exam.singleQuestionMark *
                  this.props.exam.questions.length}
              </ListGroup.Item>
              <ListGroup.Item>
                <FormattedMessage
                  id='tquestions'
                  defaultMessage='Total Questions'
                />{' '}
                : {this.props.exam.questions.length}
              </ListGroup.Item>
              <ListGroup.Item>
                <FormattedMessage
                  id='penalty mark'
                  defaultMessage='Penalty Mark'
                />{' '}
                :{' '}
                {(
                  this.props.exam.penaltyMark *
                  this.props.exam.questionStemLength
                ).toFixed(2)}
              </ListGroup.Item>
              <ListGroup.Item>
                <FormattedMessage id='timelimit' defaultMessage='Time Limit' />{' '}
                : {this.props.exam.timeLimit} Mins
              </ListGroup.Item>
              <ListGroup.Item>
                <FormattedMessage id='db.so' defaultMessage='Started From' /> :{' '}
                {moment(this.props.exam.createdAt).format(
                  'DD-MMM-YYYY, hh:mm A'
                )}
              </ListGroup.Item>
            </ListGroup>
          )}
        </div>
        <div>
          {this.props.rank && this.props.rank.length > 0 ? (
            <Table striped bordered hover responsive='md' className='mt-3'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Score</th>
                  <th>Attempts</th>
                </tr>
              </thead>
              <tbody>
                {this.props.rank.map((rank, ind) => (
                  <tr
                    key={ind}
                    className={
                      rank.user
                        ? +this.props.userId === +rank.user.id
                          ? 'bg-success text-light '
                          : ''
                        : 'text-danger'
                    }
                  >
                    <td>{ind + 1}</td>
                    <td>{rank.user ? rank.user.name : '<-- Unknown -->'}</td>
                    <td>
                      {rank.exam.length > 0
                        ? rank.exam[0].score
                        : 'Exam Not Yet Tried'}
                    </td>
                    <td>
                      {rank.exam.length > 0
                        ? rank.exam[0].attempts
                        : 'Exam Not Yet Tried'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <Alert variant='success' className='text-center my-2'>
              Be first by taking part in the exam.
            </Alert>
          )}
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onExamRankByLoader: (id, courseId) =>
      dispatch(examRankByIdLoader(id, courseId))
  }
}

const mapStateToProps = (state) => {
  return {
    rankLoading: state.exams.rankLoading,
    rank: state.exams.rank,
    exam: state.exams.exam,
    userId: state.auth.userId
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Rank)
