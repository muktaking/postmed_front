import moment from 'moment'
import React, { Component } from 'react'
import { ListGroup, Table } from 'react-bootstrap'
import { FormattedMessage } from 'react-intl'
import { connect } from 'react-redux'
import { examRankByIdLoader } from '../../store/exams'

class Rank extends Component {
  componentDidMount() {
    this.props.onExamRankByLoader(this.props.match.params.id)
  }
  render() {
    return (
      <div className='mt-5'>
        <h3 className='text-center'>
          <FormattedMessage id='btn.rank' defaultMessage='Rank' />
        </h3>
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
                this.props.exam.penaltyMark * this.props.exam.questionStemLength
              ).toFixed(2)}
            </ListGroup.Item>
            <ListGroup.Item>
              <FormattedMessage id='timelimit' defaultMessage='Time Limit' /> :{' '}
              {this.props.exam.timeLimit} Mins
            </ListGroup.Item>
            <ListGroup.Item>
              <FormattedMessage id='db.so' defaultMessage='Started From' /> :{' '}
              {moment(this.props.exam.createdAt).calendar()}
            </ListGroup.Item>
          </ListGroup>
        )}
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
            {this.props.rank &&
              this.props.rank.map((rank, ind) => (
                <tr
                  key={ind}
                  className={
                    this.props.userId === rank.user.id
                      ? 'bg-success text-light '
                      : ''
                  }
                >
                  <td>{ind + 1}</td>
                  <td>{rank.user.name}</td>
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
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onExamRankByLoader: (id) => dispatch(examRankByIdLoader(id))
  }
}

const mapStateToProps = (state) => {
  return {
    rank: state.exams.rank,
    exam: state.exams.exam,
    userId: state.auth.userId
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Rank)
