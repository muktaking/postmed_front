/* eslint-disable react/prop-types */
//import moment from 'moment'
import * as moment from 'dayjs'
import React, { Component } from 'react'
import { Alert, Badge, Card, Image, ListGroup, Table } from 'react-bootstrap'
import { FaMinusCircle } from 'react-icons/fa'
import { FormattedMessage, injectIntl } from 'react-intl'
import { LazyLoadComponent } from 'react-lazy-load-image-component'
import ReactMarkdown from 'react-markdown'
import { connect } from 'react-redux'
import remarkGfm from 'remark-gfm'
import SubNavBar from '../../components/navbar/subNavBar'
import Gist from '../../components/result/gist'
import QuestionResultStem from '../../components/result/stem'
import Feedback from './feedback'
const duration = require('dayjs/plugin/duration')
const relativeTime = require('dayjs/plugin/relativeTime')
moment.extend(relativeTime)
moment.extend(duration)

const QType = {
  SingleBestAnswer: 'sba',
  Matrix: 'matrix'
}

class Result extends Component {
  render() {
    const {
      examId,
      examResult,
      totalMark,
      totalScore,
      totalPenaltyMark,
      totalScorePercentage,
      // eslint-disable-next-line no-unused-vars
      timeTakenToComplete,
      error
    } = this.props.exams
    console.log(examId)
    return (
      <div>
        {error && (
          <>
            <Alert variant={'danger'} className='m-5 text-center'>
              {error}
            </Alert>
            <SubNavBar />
          </>
        )}
        {examResult && (
          <div className='mb-5'>
            <Card className='mt-3'>
              <Card.Header as='h5' className='text-center'>
                <FormattedMessage id='result' defaultMessage='Result' />
              </Card.Header>
              <Card.Body className='d-flex justify-content-center'>
                <Gist
                  title='Score'
                  bgColor='bg-warning'
                  value={
                    totalScore.toFixed(2) + ' Out of ' + totalMark.toFixed(2)
                  }
                />
                <Gist
                  title='Time'
                  bgColor='bg-info'
                  value={moment
                    .duration(timeTakenToComplete, 'minutes')
                    .humanize()}
                />
                <Gist
                  title='Percentage'
                  bgColor='bg-primary'
                  value={totalScorePercentage.toFixed(2) + ' %'}
                />
                <Gist
                  title='Penalty Mark'
                  bgColor='bg-secondary'
                  value={totalPenaltyMark.toFixed(2)}
                />
              </Card.Body>
            </Card>

            <Card className='mt-3'>
              <Card.Header as='h5' className='text-center'>
                <FormattedMessage id='detail' defaultMessage='Detail' />
              </Card.Header>
              <Card.Body>
                {examResult.map((item, index) => (
                  <ListGroup key={index} variant='flush' className='mb-4'>
                    <ListGroup.Item>
                      {item.result.stemResult[0] === QType.Matrix &&
                        item.result.stemResult.length === 1 && (
                          <FaMinusCircle
                            className='mr-2'
                            style={{ color: '#777' }}
                            size='1.4rem'
                          />
                        )}
                      {item.result.stemResult[0] === QType.SingleBestAnswer &&
                        item.result.stemResult.length === 2 && (
                          <FaMinusCircle
                            className='mr-2'
                            style={{ color: '#777' }}
                            size='1.4rem'
                          />
                        )}
                      <span>{index + 1 + '. ' + item.qText}</span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <div variant='flush' className='pl-3'>
                        {item.stems.map((stem, ind) => {
                          if (
                            item.result.stemResult[0] === QType.SingleBestAnswer
                          )
                            return (
                              <>
                                <div className='mb-1'>
                                  <QuestionResultStem
                                    index={ind}
                                    qType={item.result.stemResult[0]}
                                    answer={[
                                      item.result.stemResult[1],
                                      item.result.stemResult[2]
                                    ]}
                                    qStem={`${ind + 1}. ${stem.qStem}`}
                                  />
                                </div>
                                <div className='ml-3 mb-1'>
                                  {stem.fbStem &&
                                    this.props.intl.formatMessage({
                                      id: 'explanation',
                                      defaultMessage: 'Explanation is : '
                                    }) +
                                      ' ' +
                                      stem.fbStem}
                                </div>
                              </>
                            )
                          else
                            return (
                              <>
                                <div className='mb-1'>
                                  <QuestionResultStem
                                    qIndex={index}
                                    index={ind}
                                    qType={item.result.stemResult[0]}
                                    answer={item.result.stemResult[ind + 1]}
                                    qStem={`${ind + 1}. ${stem.qStem}`}
                                    aStem={stem.aStem}
                                    isUntouched={
                                      item.result.stemResult.length === 1
                                    }
                                  />
                                </div>

                                <div
                                  // className={
                                  //   (item.result.stemResult[ind] === true
                                  //     ? "bg-success"
                                  //     : "bg-danger") + " text-light ml-3"
                                  // }
                                  className='mb-3'
                                >
                                  <Badge
                                    variant='primary'
                                    style={{ fontSize: '.8rem' }}
                                  >
                                    {' '}
                                    This Statement is{' '}
                                  </Badge>{' '}
                                  {stem.aStem === '1' ? 'True' : 'False'}
                                  <br />
                                  {stem.fbStem && (
                                    <>
                                      <Badge
                                        variant='info'
                                        style={{ fontSize: '.8rem' }}
                                      >
                                        {this.props.intl.formatMessage({
                                          id: 'explanation',
                                          defaultMessage: 'Explanation is'
                                        })}
                                      </Badge>{' '}
                                      <span>{' ' + stem.fbStem}</span>
                                    </>
                                  )}
                                </div>
                              </>
                            )
                        })}
                      </div>
                    </ListGroup.Item>
                    {item.generalFeedback && (
                      <ListGroup.Item className='ml-3 '>
                        <p>
                          <Badge
                            variant='secondary'
                            style={{ fontSize: '.8rem' }}
                          >
                            {this.props.intl.formatMessage({
                              id: 'gexplanation',
                              defaultMessage: 'General explanation is : '
                            })}
                          </Badge>
                        </p>
                        <ReactMarkdown
                          remarkPlugins={[remarkGfm]}
                          components={{
                            table: ({ node, children, ...props }) => (
                              <Table
                                bordered
                                responsive
                                className='text-white w-50'
                                children={children}
                              />
                            ),

                            img: ({ node, src, alt, ...props }) => (
                              <LazyLoadComponent>
                                <Image src={src} alt={alt} width={350} fluid />
                              </LazyLoadComponent>
                            )
                          }}
                        >
                          {item.generalFeedback}
                        </ReactMarkdown>
                      </ListGroup.Item>
                    )}
                  </ListGroup>
                ))}
              </Card.Body>
            </Card>
            <Feedback examId={examId} />
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    exams: state.exams
    //   auth: state.auth,
    //   category: state.category,
    //   api: state.api,
  }
}

export default injectIntl(connect(mapStateToProps)(Result))
