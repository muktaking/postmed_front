import Axios from 'axios'
//import moment from 'moment'
import * as moment from 'dayjs'
import React from 'react'
import { Badge, Button, OverlayTrigger, Tooltip } from 'react-bootstrap'

const RenderTooltip = React.forwardRef(({ id, setMsg, ...props }, ref) => (
  <Tooltip ref={ref} id='button-tooltip' {...props}>
    <p>Are you sure to delete this syllabus.</p>
    <Button
      variant='danger'
      onClick={() => {
        Axios.delete(process.env.REACT_APP_SITE_URL + '/routine/' + id)
          .then((res) => {
            console.log(res)
            setMsg(res.data.message)
          })
          .catch((e) => {
            console.log(e)
            setMsg(e.message)
          })
      }}
    >
      Yes
    </Button>
  </Tooltip>
))

export default function SingleRoutineCard({
  syllabus,
  ind,
  showRaw,
  getStatus,
  setShowModal,
  setEditSyllabusValue,
  setMsg
}) {
  return (
    <li
      key={syllabus.id}
      className='event'
      data-date={moment(syllabus.startDate).format('DD-MMM-YYYY, h:mm a')}
    >
      <p>{syllabus.syllabus}</p>
      <p className='text-danger'>
        <Badge variant='info' className='mr-2'>
          Status:{' '}
        </Badge>
        {getStatus(syllabus.startDate, syllabus.endDate)}
      </p>
      <p className='text-secondary'>
        Exam ends: {moment(syllabus.endDate).format('DD-MMM-YYYY, h:mm a')}
      </p>
      {showRaw && (
        <>
          <Button
            variant='warning'
            onClick={() => {
              setShowModal(true)
              setEditSyllabusValue([
                syllabus.id,
                new Date(syllabus.startDate),
                new Date(syllabus.endDate),
                syllabus.syllabus,
                syllabus.courseId
              ])
            }}
          >
            Edit
          </Button>
          <OverlayTrigger
            trigger='click'
            placement='right'
            overlay={<RenderTooltip setMsg={setMsg} id={syllabus.id} />}
          >
            <Button variant='danger' className='ml-2'>
              Delete
            </Button>
          </OverlayTrigger>
        </>
      )}
    </li>
  )
}
