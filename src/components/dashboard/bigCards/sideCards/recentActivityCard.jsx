//import moment from 'moment'
import * as moment from 'dayjs'
import React from 'react'
import { Badge } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup'
import { MdInfo } from 'react-icons/md'
import { useIntl } from 'react-intl'
import BigCard from '../bigCard/bigCard'

const SideCard = ({ userExamStat }) => {
  //const userExamStat = useSelector((state) => state.dashboard.userExamStat)
  const intl = useIntl()

  const examTitles = userExamStat ? userExamStat.examTitles : []
  const stat = userExamStat ? userExamStat.stat : []

  return (
    <BigCard
      header={intl.formatMessage({
        id: 'db.ra',
        defaultMessage: 'Recent Activity'
      })}
      headerColor={'warning'}
      showDatePicker={false}
    >
      <ListGroup as='ul' variant='flush'>
        {examTitles &&
          examTitles.map((exam, index) => {
            if (index < 3) {
              return (
                <ListGroup.Item key={index} as='li' className=''>
                  {/* <Badge variant="info" className="rounded p-1"> */}
                  <MdInfo size='1.5em' color='magenta' />
                  {/* </Badge> */}
                  <Badge variant='light'>{exam.title}</Badge>Exam attempted{' '}
                  <Badge variant='danger'>{stat[index].attemptNumbers}</Badge>{' '}
                  times.
                  <p className='text-muted pl-3' style={{ fontSize: '80%' }}>
                    last attempt{' '}
                    {moment(stat[index].lastAttemptTime)
                      .startOf('day')
                      .fromNow()}
                  </p>
                </ListGroup.Item>
              )
            }
          })}
      </ListGroup>
    </BigCard>
  )
}

export default SideCard
