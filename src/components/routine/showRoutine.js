import axios from 'axios'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import {
  Badge,
  Button,
  Modal,
  OverlayTrigger,
  Toast,
  Tooltip
} from 'react-bootstrap'
import { GrUpdate } from 'react-icons/gr'
import AddASyllabus from './addASyllabus'

function getStatus(start, end) {
  const date = new Date()
  const startDate = new Date(start)
  const endDate = new Date(end)

  if (
    startDate.getTime() <= date.getTime() &&
    endDate.getTime() >= date.getTime()
  ) {
    return 'Ongoing'
  }

  if (endDate.getTime() <= date.getTime()) {
    return 'Past'
  }

  return 'Upcoming'
}

const RenderTooltip = React.forwardRef(({ id, setMsg, ...props }, ref) => (
  <Tooltip ref={ref} id='button-tooltip' {...props}>
    <p>Are you sure to delete this syllabus.</p>
    <Button
      variant='danger'
      onClick={() => {
        axios
          .delete(process.env.REACT_APP_SITE_URL + '/routine/' + id)
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

export default function ShowRoutine({ showRaw }) {
  const [routine, setRoutine] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [msg, setMsg] = useState(null)
  const [editSyllabusVale, setEditSyllabusValue] = useState([])

  const modalClose = () => {
    setShowModal(false)
  }

  const handleUpdate = () => {
    axios
      .get(process.env.REACT_APP_SITE_URL + '/routine/raw')
      .then((res) => {
        setRoutine(res.data)
      })
      .catch()
  }

  useEffect(() => {
    axios
      .get(
        process.env.REACT_APP_SITE_URL + '/routine' + (showRaw ? '/raw' : '')
      )
      .then((res) => {
        setRoutine(res.data)
      })
      .catch()
  }, [showRaw])
  return (
    <div className='container'>
      <Modal show={showModal} onHide={modalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit The Syllabus</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddASyllabus defaultValue={editSyllabusVale} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={modalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <div className='row'>
        <div className='col-md-12'>
          <div className='card'>
            <div className='card-body'>
              {showRaw && (
                <>
                  <Toast
                    show={msg}
                    onClose={() => {
                      setMsg(null)
                    }}
                    style={{ position: 'absolute', right: '10px', top: '10px' }}
                  >
                    <Toast.Header>
                      <strong className='mr-auto'>Message</strong>
                    </Toast.Header>
                    <Toast.Body>{msg}</Toast.Body>
                  </Toast>
                  <h4 className='card-title'>Raw Routine</h4>
                  <Button variant='light' onClick={handleUpdate}>
                    <GrUpdate size={'1.3rem'} />
                  </Button>
                </>
              )}
              <div
                id='content'
                style={{ maxHeight: '350px', overflowY: 'scroll' }}
              >
                <ul className='timeline'>
                  {routine.map((syllabus, ind) => (
                    <li
                      key={syllabus.id}
                      className='event'
                      data-date={moment(syllabus.startDate).format(
                        'YYYY-MMM-DD, h:mm a'
                      )}
                    >
                      <p>{syllabus.syllabus}</p>
                      <p className='text-danger'>
                        <Badge variant='info' className='mr-2'>
                          Status:{' '}
                        </Badge>
                        {getStatus(syllabus.startDate, syllabus.endDate)}
                      </p>
                      <p className='text-secondary'>
                        Exam ends:{' '}
                        {moment(syllabus.endDate).format('YYYY-MMM-DD, h:mm a')}
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
                                syllabus.syllabus
                              ])
                            }}
                          >
                            Edit
                          </Button>
                          <OverlayTrigger
                            trigger='click'
                            placement='right'
                            overlay={
                              <RenderTooltip setMsg={setMsg} id={syllabus.id} />
                            }
                          >
                            <Button variant='danger' className='ml-2'>
                              Delete
                            </Button>
                          </OverlayTrigger>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
